# 📘 Universal Architectural Guide: Adding New Pages, Programs, & Services

This document defines the exact workflow and architectural pattern for adding new pages, programs, services, or globals to the **People For Honor & MTSC Halifax** multi-tenant ecosystem. Any AI agent working on this codebase should follow these instructions precisely.

---

## 🏗️ Architecture Overview

The system consists of two main codebases:
1. **`honor-forge-cms`** (Payload CMS 3.x on Next.js 15 App Router + PostgreSQL)
2. **`honor-forge-webapp`** (React 18 + Vite + React Query + `@payloadcms/live-preview-react`)

---

## 🚀 Pattern A: Adding a New Website Page (Global CMS Page)

Use this pattern when adding a top-level page like `/about`, `/contact`, `/gallery`, `/join`, `/new-page`.

### Step 1: Create Payload Global Schema (`honor-forge-cms`)
Create a new file in `src/globals/pfh/` (or `src/globals/mtsc/`):
```typescript
// src/globals/pfh/NewPage.ts
import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const NewPage: GlobalConfig = {
  slug: 'new-page',
  label: 'New Page Title',
  admin: {
    group: 'People For Honor',
    hidden: ({ user }) => isHiddenForUser(user, 'peopleforhonor'),
    livePreview: {
      url: process.env.PAYLOAD_PUBLIC_SITE_URL || 'http://localhost:8080',
    },
  },
  access: {
    read: () => true, // Public site access
    update: (args) => checkTenantAccess(args, 'peopleforhonor'),
  },
  fields: [
    {
      name: 'hero_title',
      label: 'Hero Title',
      type: 'text',
      defaultValue: 'Welcome to New Page',
    },
    // Add tabs or array fields as needed
  ],
}
```

### Step 2: Register in `payload.config.ts` (`honor-forge-cms`)
1. Import `NewPage` in `src/payload.config.ts`.
2. Add `NewPage` to the `globals: [...]` array.

### Step 3: Create Seed Script (`honor-forge-cms`)
1. Create `src/seed/pfh/seed-new-page.ts`.
2. Add seed execution script using `payload.updateGlobal` / `payload.findGlobal`.
3. Add script command to `package.json`:
   ```json
   "db:seed-new-page": "npx tsx src/seed/pfh/seed-new-page.ts"
   ```

### Step 4: Create React Page & Live Preview Hook (`honor-forge-webapp`)
1. Create `src/pages/NewPage.jsx`.
2. Fetch live CMS data:
   ```javascript
   import { useGlobalLive } from "@/hooks/usePayloadLive";
   
   const NewPage = () => {
       const { data } = useGlobalLive('new-page');
       const title = data?.hero_title || "Welcome to New Page";
       // Render UI
   };
   ```
3. Register route in `src/App.jsx`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Add link to `Header.jsx` or `Footer.jsx` if applicable.

---

## 🎯 Pattern B: Adding a New Program or Service Subpage (`/programs/:slug` or `/service/:slug`)

Use this pattern when adding a program (e.g. `/programs/new-program`) or a service page (e.g. `/service/new-service-slug`).

### Step 1: Extend `ProgramDetails.ts` Collection Schema (`honor-forge-cms`)
All program subpages are managed inside the `program-details` collection (`src/collections/ProgramDetails.ts`).

If your new program requires custom fields, add them with an `admin.condition`:
```typescript
{
  name: 'my_custom_field',
  label: 'My Custom Field',
  type: 'text',
  admin: {
    condition: (data) => data?.slug === 'my-new-program' || Boolean(data?.my_custom_field),
  },
}
```

### Step 2: Add Data to Seed Script (`honor-forge-cms`)
Open `src/seed/pfh/seed-program-details.ts` and add your program document to the `programItems` array:
```typescript
{
  title: 'My New Program',
  slug: 'my-new-program',
  badge: 'Culture & Community Program',
  hero_subtitle: 'Description of the new program...',
  // Add learning_outcomes, curriculum, or custom fields
}
```

### Step 3: Create WebApp Page Component (`honor-forge-webapp`)
- **Standard Program Layout**: If the program uses standard week-by-week curriculum, `src/pages/ProgramDetail.jsx` dynamically loads it automatically!
- **Custom Program Layout**: If the program has a unique layout:
  1. Create `src/pages/programs/MyNewProgram.jsx`.
  2. Connect to live CMS data:
     ```javascript
     import { useProgramDetailLive } from "@/hooks/usePayloadLive";
     
     const MyNewProgram = () => {
         const { data } = useProgramDetailLive('my-new-program');
         // Bind data to component UI
     };
     ```
  3. Register route in `src/App.jsx`:
     ```javascript
     <Route path="/programs/my-new-program" element={<MyNewProgram />} />
     // or for service routes:
     <Route path="/service/my-new-service" element={<MyNewProgram />} />
     ```

---

## 🔒 Critical Multi-Tenant & Security Rules

1. **Super Admin Access Rule**: `cloudgenz.dev@gmail.com` MUST always have 100% unrestricted access to all tenants and sidebar menus.
2. **Sidebar Hiding**: Always use `admin.hidden: ({ user }) => isHiddenForUser(user, 'peopleforhonor')` for PFH items, and `isHiddenForUser(user, 'mtsc')` for MTSC items.
3. **Public Read Access**: Always set `access.read: () => true` on public site Globals and `ProgramDetails` collection so frontend visitors never get `403 Forbidden` errors.
4. **Live Preview Requirement**: Always verify `admin.livePreview.collections` in `payload.config.ts` includes `'program-details'` and `'media'`.

---

## ⚡ Summary Checklist for Any AI Agent
- [ ] Schema file created/updated in `honor-forge-cms/src/globals/` or `src/collections/`.
- [ ] Registered in `payload.config.ts`.
- [ ] Seed script added/updated in `honor-forge-cms/src/seed/`.
- [ ] `access.read: () => true` set for public site access.
- [ ] React page created/updated in `honor-forge-webapp/src/pages/`.
- [ ] Live preview hook (`useGlobalLive` or `useProgramDetailLive`) connected.
- [ ] Route added in `App.jsx`.
