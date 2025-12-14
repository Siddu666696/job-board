"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import ListSkeleton from "./ListSkeleton";
import JobCard from "./JobCard";
import HeroSection from "./HeroSection";
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  job_type: string;
  description: string;
  salary_from: number;
}

const PAGE_SIZE = 10;

async function fetchJobs(page: number): Promise<Job[]> {
  const res = await fetch(
    `https://jsonfakery.com/jobs/infinite-scroll?page=${page}&limit=${PAGE_SIZE}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const json = await res.json();
  return json.data ?? [];
}

export default function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      const data = await fetchJobs(page);
      if (!ignore) setJobs((prev) => [...prev, ...data]);
      if (data.length < PAGE_SIZE) setHasMore(false);
      setLoading(false);
    }

    load();
    return () => {
      ignore = true;
    };
  }, [page]);

  useEffect(() => {
    if (!hasMore || loading || jobs?.length == 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loading && hasMore) {
          observer.disconnect(); // prevent duplicate triggers
          setPage((p) => p + 1);
        }
      },
      { rootMargin: "100px" }
    );

    const el = observerRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <section aria-label="Job listings">
      <Box>
        <HeroSection />
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {loading && <ListSkeleton />}
        <div ref={observerRef} aria-hidden />
      </Box>
    </section>
  );
}
