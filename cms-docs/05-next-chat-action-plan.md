# 📝 Action Plan for Next Chat — UI Discrepancies, Typos & Service Page Fixes

This file (`cms-docs/05-next-chat-action-plan.md`) contains the exact action plan to be executed in the new chat session.

---

## 🎯 Summary of Items to Execute

### 1. Homepage (`/`) Fixes
- **Hero Title Spacing**: Fix space between "Your" and "Life" in `HomePage.ts` schema, `seed-home.ts`, and `Hero.jsx`.
- **Hero Image Fallback**: Update `Hero.jsx` so if dynamic CMS background image is null/loading, a high-quality fallback hero image displays instead of just a gradient.

### 2. Address & Postal Code Formatting (All Pages)
- **Address Typo**: Change `"1505 laperrieve Ave Suite 506"` ➔ `"1505 Laperriere Ave Suite 506"`.
- **Postal Code Typo**: Change `"ON, K127T1"` / `"K127T1"` ➔ `"Ottawa, ON K1Z 7T1"`.
- **Files to update**: `HomePage.ts`, `ContactPage.ts`, `seed-home.ts`, `seed-contact.ts`, `Footer.jsx`, `Contact.jsx`, `ContactPage.jsx`.

### 3. Program Subpages & Content Sync (`/programs/*`)
- **Issue**: Live subpages (`/programs/entrepreneurship-launchpad`, `/programs/mentorship`, `/programs/coaching`, `/programs/braiding-training`, etc.) feature fully populated curriculum and module details, whereas local shows empty shells if unseeded.
- **Fix**: Update `seed-program-details.ts` to include rich default seed data for all 9 programs, and update `ProgramDetail.jsx` / `CoachingProgram.jsx` / `MentorshipProgram.jsx` with static fallback data when CMS API is loading or empty.

### 4. Ways to Give / Join Us Page Alignment (`/join`)
- **Upcoming Events Card**: Align text between Live ("No upcoming events at the moment. Check back soon for updates!") and Localhost ("Mentorship Info Session") so local matches live config or toggle.
- **Community Gathering Image Grid**: Ensure 6 images display in `JoinUsPage.ts`, `seed-join.ts`, and `JoinUs.jsx` (currently 3 on local vs 6 on live).

### 5. Events & Service Dates Standardization
- **African Caribbean Cultural Dance Exchange Date**: Align date between Live ("Saturday, November 22, 2025") and Local ("Friday, September 26, 2025").

### 6. Contact Page & Footer Office Hours Formatting
- **Call Us Hours**: Standardize format to `"Monday - Friday: 9:00 AM - 6:00 PM"` across `ContactPage.ts`, `seed-contact.ts`, `Contact.jsx`, `ContactPage.jsx`, and `Footer.jsx`.

### 7. Dedicated Service Page Route Integration (`/service/*` & `/services`)
- Ensure `/service/culture-and-community-ottawa-program` and `/services` routes load full service detail page content with complete fallback components.

---

## 🛠️ Step-by-Step Execution Plan for New Chat

### Step 1: Update CMS Schemas & Seed Scripts
1. Update `F:\peopleforhonor\honor-forge-cms\src\globals\pfh\HomePage.ts` & `ContactPage.ts` with correct typos ("Laperriere Ave", "K1Z 7T1", "Your Life in Canada").
2. Update seed scripts: `seed-home.ts`, `seed-contact.ts`, `seed-join.ts`, `seed-program-details.ts`.
3. Push CMS updates to GitHub (`honor-forge-cms`).

### Step 2: Update WebApp Components & Fallbacks
1. Update `F:\peopleforhonor\honor-forge-webapp\src\components\Footer.jsx`, `Contact.jsx`, `Hero.jsx`.
2. Update `F:\peopleforhonor\honor-forge-webapp\src\pages\ContactPage.jsx`, `JoinUs.jsx`, `ProgramDetail.jsx`.
3. Push WebApp updates to GitHub (`honor-forge-webapp`).

### Step 3: Run Seeding on VPS
1. Run `npm run db:seed-home && npm run db:seed-contact && npm run db:seed-join && npm run db:seed-program-details` on VPS.

---

## 💡 Instructions for New AI Agent
When you start the new chat, simply type:
> **"Read `cms-docs/05-next-chat-action-plan.md` and execute the fixes."**
