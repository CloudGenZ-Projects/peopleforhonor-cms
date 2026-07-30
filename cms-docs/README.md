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

- 📄 [`01-multi-tenancy-architecture.md`](../cms-docs/01-multi-tenancy-architecture.md)
- 📄 [`02-cms-schema-and-globals.md`](../cms-docs/02-cms-schema-and-globals.md)
- 📄 [`03-frontend-architecture-and-live-preview.md`](../cms-docs/03-frontend-architecture-and-live-preview.md)
- 📄 [`04-vps-deployment-and-seed-scripts.md`](../cms-docs/04-vps-deployment-and-seed-scripts.md)
