# 🚀 People For Honor & MTSC Halifax — Multi-Tenant CMS & WebApp Documentation

Welcome! This documentation directory (`cms-docs/`) contains a complete, AI-readable technical reference for the **People For Honor & MTSC Halifax** multi-tenant ecosystem.

---

## 📌 Ecosystem Overview

1. **`honor-forge-cms`** — Payload CMS 3.x (Next.js 15 App Router + PostgreSQL + `@payloadcms/plugin-multi-tenant` + S3/R2 Storage).
   - `https://pfh-cms.cloudgenz.com` (Main Super Admin & People For Honor CMS)
   - `https://mtsc-halifax-cms.cloudgenz.com` (MTSC Halifax CMS Access)
   - `https://astro-test.cloudgenz.com` (Astro Test Demo)

2. **`honor-forge-webapp`** — Vite + React 18 + Tailwind CSS + Lucide Icons + TanStack React Query + `@payloadcms/live-preview-react`.
   - `https://peopleforhonor.com` (Live Production Frontend)
   - `http://localhost:8080` (Local Dev Frontend)

---

## 📁 Key Documentation Files

- 📄 [`01-multi-tenancy-architecture.md`](./01-multi-tenancy-architecture.md) — Multi-tenancy config, `tenantAccess.ts`, Super Admin rule, `admin.hidden` vs `access.read`.
- 📄 [`02-cms-schema-and-globals.md`](./02-cms-schema-and-globals.md) — Collections & Globals schema breakdown.
- 📄 [`03-frontend-architecture-and-live-preview.md`](./03-frontend-architecture-and-live-preview.md) — React Query, Live Preview, relative media URLs, dynamic program routing.
- 📄 [`04-vps-deployment-and-seed-scripts.md`](./04-vps-deployment-and-seed-scripts.md) — VPS git pull/build/pm2 commands, database seed commands, env vars.
- 📘 [`05-how-to-add-new-pages-programs-and-globals.md`](./05-how-to-add-new-pages-programs-and-globals.md) — **Universal Guide: How any AI agent adds new pages, custom programs, or services.**
