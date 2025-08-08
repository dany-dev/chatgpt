# ChatGPT Next.js Example

This repository contains a minimal [Next.js](https://nextjs.org/) project with a couple of pages and a basic middleware.

## Available Routes
- `/` – Home page with a link to the About page.
- `/about` – Simple static page.

Requests to `/about` go through a middleware that adds an `x-powered-by` header.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
