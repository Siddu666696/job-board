WorkIndia Job Platform

This is a frontend job listing platform inspired by WorkIndia and other blue-collar job portals.
The application is built using Next.js and Material UI with a focus on performance, accessibility,
SEO, and scalability.

Tech Stack
Next.js
Material UI (MUI)
JSON Fakery (mock job API)
Intersection Observer API

Features
Job listing page that fetches jobs from a JSON Fakery endpoint
Infinite scrolling implemented using Intersection Observer
Skeleton loaders for better perceived performance
Responsive UI for mobile, tablet, and desktop
SEO-friendly markup using semantic HTML elements
Schema markup added for job postings using article tags and labels

Infinite Scroll Implementation
Jobs are loaded in batches from the API.
An intersection observer watches the last job card.
When the observer enters the viewport, the next page of jobs is fetched.
The observer is enabled only when valid job data is returned to avoid unnecessary API calls.

SEO
Each job posting is wrapped in an article tag.
Important fields like job title, location, salary, and employment type are labeled clearly.
This improves search engine indexing and job rich results.

Localization (Planned)
The platform is designed to support localization using i18n.
Future support includes regional Indian languages.
Language switching will be applied across all pages.

Getting Started
Clone the repository
Install dependencies using npm install
Run the development server using npm run dev
Open http://localhost:3000 in the browser

Future Improvements
i18n support for local languages
Voice-based job search
Advanced job filters
SSR streaming for job listings
Analytics and tracking

Author
Frontend implementation using Next.js and Material UI
Focused on real-world job search UX patterns
