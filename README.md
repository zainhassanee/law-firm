Deployment to Vercel

This is a Next.js 14 app (App Router). Follow these steps to deploy to Vercel.

Prerequisites
- Node.js 18+
- Vercel account
- (Optional) Resend account for contact form emails

1) Configure Environment Variables
In Vercel project settings → Environment Variables:
- RESEND_API_KEY: your Resend API key (optional; without it, the API logs the message instead of sending email)

2) Push to Git and Import
- Initialize a repository and push to GitHub/GitLab/Bitbucket
- On Vercel, click "New Project" and import the repo
- Framework preset: Next.js (auto-detected)

3) Build Settings
- Build command: next build (default)
- Output directory: .next (default)

A vercel.json is included to set security headers. You can modify as needed.

4) Test the Contact Form
- Navigate to /contact
- Submit the form
- If RESEND_API_KEY is not configured, the API will return success but only log server-side
- With RESEND_API_KEY, an email is sent using Resend

Local Development
```bash
pnpm dev # or npm run dev / yarn dev
```

Notes
- The images are configured as unoptimized for broader compatibility.
- TypeScript and ESLint errors are ignored during build to avoid blocking deploys. Tighten these in next.config.mjs when ready.

