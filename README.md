# EventStack — Production-Grade Event Ecosystem Platform

## 1) High-Level Architecture
- **Frontend:** Next.js App Router + TypeScript + Tailwind + Framer Motion.
- **Backend:** Next.js Route Handlers (API), Prisma ORM, PostgreSQL.
- **Auth/RBAC:** NextAuth with role-aware authorization guards.
- **Payments:** Stripe intent + webhook validation. Razorpay ready via adapter pattern.
- **Real-time:** Socket layer for counters/leaderboard (via Socket.IO server in deployment target).
- **Documents:** QR ticket generation + PDF certificate generation.
- **Observability:** structured logs, Sentry/OpenTelemetry integration points.

## 2) Database Schema
See `prisma/schema.prisma` for normalized entity model covering users, events, registrations, payments, certificates, coupons, referrals, and leaderboard rows.

## 3) Folder Structure
- `app/` pages + API routes
- `components/` reusable UI and sections
- `lib/` security, metadata, validation, business helpers
- `prisma/` schema and migrations
- `tests/` validation tests

## 4) Setup Instructions
1. `npm install`
2. Copy `.env.example` to `.env.local`
3. Set `DATABASE_URL`, `NEXTAUTH_SECRET`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
4. `npx prisma generate && npx prisma migrate dev`
5. `npm run dev`

## 5) Complete Code
This repository includes landing page, event detail, participant/organizer/admin dashboards, legal pages, APIs for events/registration/payments/AI/leaderboard/QR validation/certificate generation.

## 6) AI Features Implementation
- `/api/ai/assistant` supports FAQ responses, recommendations, and schedule clash messaging.
- Extend with LLM provider (OpenAI/Anthropic) behind a policy and moderation gateway.

## 7) Payment Setup
- Use `/api/payment/create-intent` to create server-side Stripe PaymentIntent.
- Use `/api/payment/stripe-webhook` to verify signature and commit payment status updates.
- Razorpay can be wired with same payment service interface and webhook validator.

## 8) QR System Setup
- `/api/register` creates a ticket ID + QR payload after validation.
- `/api/tickets/validate` and `/api/scan` prevent double entry by tracking consumed IDs.

## 9) Deployment Guide
- Vercel deployment with managed Postgres (Neon/Supabase/RDS).
- Enable HTTPS, set env vars, configure Stripe webhook to `/api/payment/stripe-webhook`.
- Attach custom domain and DNS records; enforce HSTS and secure cookies.
- Add CI (GitHub Actions): lint, typecheck, tests, build.

## 10) Security Checklist
- API validation via Zod.
- XSS input sanitization.
- In-memory rate limiting (replace with Redis in prod).
- CSRF token requirement for mutation APIs.
- Security headers in middleware + route handlers.
- Payment webhook signature verification.
- RBAC model in DB + app layer.

## 11) SEO Checklist
- Metadata defaults with Open Graph + Twitter card.
- Dynamic event SEO path support.
- `sitemap.xml` and `robots.txt` enabled.
- Add JSON-LD schema for Event entities per detail page.

## 12) Launch Checklist
- [ ] Configure production DB backups
- [ ] Add Redis for cache + distributed rate limiting
- [ ] Add queue for emails/certificate jobs
- [ ] Add monitoring + alerts
- [ ] Add e2e flow tests
- [ ] Security audit and penetration test

## FAQ: Does this automatically save to GitHub? How do I run it?
### Does it auto-store code?
- **Local repo:** yes. Any committed change is stored in this local git repository history.
- **GitHub remote:** **no, not automatic** unless CI or a git hook is configured to push.
- To publish to GitHub, run:
  1. `git remote add origin <your-github-repo-url>` (first time only)
  2. `git push -u origin <branch-name>`

### How to run locally
1. Install dependencies:
   - `npm install`
2. Create env file:
   - `cp .env.example .env.local`
3. Update `.env.local` values for database and Stripe secrets.
4. Generate Prisma client and run migrations:
   - `npx prisma generate`
   - `npx prisma migrate dev`
5. Start development server:
   - `npm run dev`
6. Open:
   - `http://localhost:3000`

### How to run in production mode locally
1. `npm run build`
2. `npm run start`

### Why install might fail here
If you see `403 Forbidden` during `npm install`, that is usually an environment registry policy/proxy restriction. In your own machine or CI with normal npm registry access, the commands above should work.
