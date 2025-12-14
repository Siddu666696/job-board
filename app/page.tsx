// app/jobs/page.tsx
// Next.js App Router – Hybrid SSR + Client Infinite Scroll
// Optimized for performance, accessibility, i18n, and scalability

import { Suspense } from 'react';
import { Typography } from '@mui/material';
import type { Metadata } from 'next';
import JobsList from '@/components/JobsLIst';
import ListSkeleton from '@/components/ListSkeleton';

export const metadata: Metadata = {
  title: 'Jobs for You | Infinite Scroll Jobs',
  description:
    'Browse jobs with fast, accessible infinite scrolling. Optimized for blue-collar and skilled workers.',
};

export default function JobsPage() {
  return (
    <main >
      <Suspense fallback={<ListSkeleton/>}>
        <JobsList />
      </Suspense>
    </main>
  );
}