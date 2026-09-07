# 🌐 Universal Guide: How to Add a New Website / Tenant

> **For Developers & AI Coding Agents**  
> This guide outlines the exact, step-by-step process for onboarding and integrating a new website (tenant) into the `honor-forge-cms` multi-tenant ecosystem.
>
> ⚠️ **CRITICAL RULE**: Do **NOT** hardcode tenant IDs, tenant names, or user emails in `src/utils/tenantAccess.ts`. The architecture is 100% dynamic.

---

## 🏗️ Architecture Overview

The multi-tenant system uses a dynamic, decoupled architecture:
1. **Tenant Registry**: Stored in PostgreSQL in the `tenants` collection (`name`, `slug`, `domain`).
2. **In-Memory Cache (`tenantCache`)**: Automatically primed on CMS boot via `onInit` in `payload.config.ts`.
3. **Real-time Lifecycle Hooks**: Creating, editing, or deleting a tenant in the CMS UI updates the in-memory cache instantly via `afterChange` and `afterDelete` hooks in `src/collections/Tenants.ts`.
4. **Universal Slug Normalization**: Slugs are normalized (`toLowerCase()`, stripped of `-`, `_`, and spaces), meaning `toronto`, `TORONTO`, `MTSC-Toronto`, and `mtsc_toronto` match seamlessly.
5. **Session & Access Control**:
   - `checkTenantAccess(args, targetTenantSlug)` controls Save/Update permissions.
   - `isHiddenForUser(user, targetTenantSlug)` controls Sidebar visibility.

---

## 📋 The 5-Step Integration Workflow

### Example Scenario: Adding `MTSC Toronto` (Slug: `toronto`)

---

### Step 1: Create the Tenant in CMS Admin UI

No code changes are needed for this step.

1. Log into Payload Admin as a Super Admin (`cloudgenz.dev@gmail.com`).
2. Navigate to **Admin Settings** ➔ **Tenants** ➔ Click **Create New**.
3. Fill in the fields:
   * **Tenant Name**: `MTSC Toronto`
   * **Tenant Slug ID**: `toronto` (use a clean, lowercase identifier)
   * **Domain Name (Optional)**: `mtsc-toronto-cms.cloudgenz.com`
4. Click **Save**.
   * *The `afterChange` hook automatically puts `{ id, slug: 'toronto' }` into memory cache immediately.*

---

### Step 2: Create the Dedicated Tenant User

1. Navigate to **Admin Settings** ➔ **Users** ➔ Click **Create New**.
2. Fill in the user details:
   * **Email**: `toronto@mtsc.ca` (or whatever email they use)
   * **Name**: `MTSC Toronto Manager`
   * **Password**: Set a secure temporary password
3. Under **Tenants** (relationship field):
   * Select `MTSC Toronto`
4. Click **Save**.

---

### Step 3: Create Page Globals in Code

Create a folder for the new website under `src/globals/<tenant-slug>/`:

Example: `src/globals/toronto/TorontoHomePage.ts`:

```typescript
import type { GlobalConfig } from 'payload'
import { checkTenantAccess, isHiddenForUser } from '../../utils/tenantAccess'

export const TorontoHomePage: GlobalConfig = {
  slug: 'toronto-home-page',
  label: 'Toronto Home Page',
  versions: {
    max: 5,
  },
  admin: {
    group: 'MTSC Toronto', // Groups sidebar items cleanly
    hidden: ({ user }) => isHiddenForUser(user, 'toronto'), // 👈 Passes target slug
    livePreview: {
      url: () => {
        const siteUrl = process.env.PAYLOAD_PUBLIC_TORONTO_SITE_URL || 'http://localhost:5173'
        return `${siteUrl}/`
      },
    },
  },
  access: {
    read: () => true,
    update: (args) => checkTenantAccess(args, 'toronto'), // 👈 Passes target slug
  },
  fields: [
    // Define tabs and fields needed for this page
  ],
}
```

Repeat for any other pages (`TorontoAboutPage.ts`, `TorontoContactPage.ts`, etc.).

---

### Step 4: Register Globals & Configure CORS / CSRF

#### A. Register Globals in `src/payload.config.ts`:
Import your new global and add it to the `globals` array:

```typescript
import { TorontoHomePage } from './globals/toronto/TorontoHomePage'

export default buildConfig({
  // ...
  globals: [
    // ...existing globals
    TorontoHomePage,
  ],
})
```

#### B. Add Domains to `defaultOrigins` in `src/payload.config.ts`:
Add both the CMS subdomain and frontend domain to `defaultOrigins`:

```typescript
const defaultOrigins = [
  // ...existing origins
  'https://mtsc-toronto-cms.cloudgenz.com',
  'https://mtsc-toronto.cloudgenz.com',
  '*',
]
```

#### C. Update `.env.production` on VPS:
Ensure `CORS_ORIGINS` includes the new domains **on a single line without line breaks**:

```env
CORS_ORIGINS=https://peopleforhonor.com,https://pfh-cms.cloudgenz.com,https://mtsc-halifax-cms.cloudgenz.com,https://mtsc-nl-cms.cloudgenz.com,https://mtsc-toronto-cms.cloudgenz.com,https://mtsc-toronto.cloudgenz.com,http://localhost:8080,http://localhost:5173
```

---

### Step 5: Frontend Website Setup

In the frontend repository for the new website (e.g. Vite/React):

#### A. Clean API Fetching (`src/services/api.ts`):
**DO NOT** pass custom headers like `Expires: '0'` or `Pragma` — they trigger CORS preflight `OPTIONS` rejections!  
Use a clean standard GET request with a timestamp for cache busting:

```typescript
export const CMS_URL = import.meta.env.VITE_CMS_URL || 'https://mtsc-toronto-cms.cloudgenz.com'

export async function getTorontoHomePageData() {
  try {
    const res = await fetch(`${CMS_URL}/api/globals/toronto-home-page?depth=2&_t=${Date.now()}`)
    if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`)
    return await res.json()
  } catch (err) {
    console.error('Error fetching Toronto HomePage data:', err)
    return null
  }
}
```

#### B. Live Preview & Real-Time Sync Hook:
Listen for Payload's postMessage events (`payload-live-preview` for typing, `payload-document-event` for post-save refetch):

```typescript
window.addEventListener('message', (event) => {
  if (event.data?.type === 'payload-live-preview') {
    // Update live state while typing in CMS
  }
  if (event.data?.type === 'payload-document-event') {
    // Invalidate TanStack query cache and refetch from CMS after Save
  }
})
```

---

## ⚠️ Common Pitfalls & Troubleshooting

| Issue / Error | Root Cause | Solution |
| :--- | :--- | :--- |
| **`{"errors":[{"message":"No User"}]}`** on logout or save | Domain is missing from `CORS_ORIGINS` or `defaultOrigins`. Payload's CSRF check dropped the JWT cookie. | Add the CMS domain (e.g. `https://mtsc-toronto-cms.cloudgenz.com`) to `CORS_ORIGINS` in `.env.production` and restart PM2. |
| **`Blocked by CORS policy: Request header field expires is not allowed`** | Frontend is passing custom request headers (`'Expires': '0'`) in `fetch()`. | Remove custom headers from frontend `fetch()` calls. Use `?_t=${Date.now()}` query param for 100% cache-busting instead. |
| **`You are not allowed to perform this action`** | The tenant slug passed to `checkTenantAccess(args, slug)` does not match the slug in the database. | Verify that the tenant was created in **Tenants** with the exact slug ID used in code. |
| **Second half of `.env` ignored** | `CORS_ORIGINS` was split across multiple lines in `.env`. | `.env` variables cannot span multiple lines. Place the entire comma-separated list on a single continuous line. |

---

## 🏁 Summary Checklist for Developers

- [ ] Create Tenant in CMS Admin UI (**Tenants** ➔ Create New).
- [ ] Create/Edit User and assign the Tenant (**Users** ➔ Select Tenant).
- [ ] Create Global config with `checkTenantAccess(args, '<slug>')` and `isHiddenForUser(user, '<slug>')`.
- [ ] Register Global in `src/payload.config.ts`.
- [ ] Add CMS and Frontend domains to `defaultOrigins` in `payload.config.ts`.
- [ ] Add domains to `CORS_ORIGINS` in `.env.production`.
- [ ] Pull to VPS and run `pm2 restart honor-forge-cms`.
- [ ] **Verify zero changes were needed in `tenantAccess.ts`!**
