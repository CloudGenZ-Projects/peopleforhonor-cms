# 📝 Action Plan for Next Chat — UI Discrepancies, Typos & Service Page Fixes

This file (`cms-docs/05-next-chat-action-plan.md`) contains the exact action plan to be executed in the new chat session.

---

## 🎯 Summary of Items to Execute

### 1. Homepage (`/`) Fixes & Service Card Links
- **Hero Title Spacing**: Fix space between "Your" and "Life" in `HomePage.ts` schema, `seed-home.ts`, and `Hero.jsx`.
- **Services Card URL**: Update Culture & Community service card link to `/service/culture-and-community-ottawa-program` (or `http://localhost:8080/service/culture-and-community-ottawa-program`).
- **Hero Image Fallback**: Update `Hero.jsx` so if dynamic CMS background image is null/loading, a high-quality fallback hero image displays instead of just a gradient.

### 2. Address & Postal Code Formatting (All Pages)
- **Address Typo**: Change `"1505 laperrieve Ave Suite 506"` ➔ `"1505 Laperriere Ave Suite 506"`.
- **Postal Code Typo**: Change `"ON, K127T1"` / `"K127T1"` ➔ `"Ottawa, ON K1Z 7T1"`.
- **Files to update**: `HomePage.ts`, `ContactPage.ts`, `seed-home.ts`, `seed-contact.ts`, `Footer.jsx`, `Contact.jsx`, `ContactPage.jsx`.

### 3. Dedicated Custom Page Layouts (`/programs/empowerment` & `/service/culture-and-community-ottawa-program`)
- **`EmpowermentMentorship.jsx` (`/programs/empowerment`)**:
  - Connect to `useProgramDetailLive('empowerment')`.
  - Wire CMS fields to Hero, Empowerment, Mentorship, Coaching, What We Offer feature lists, and Choose Your Starting Point CTA.
  - Maintain full static fallback content if CMS data is unseeded/loading.
- **`CultureCommunity.jsx` (`/service/culture-and-community-ottawa-program`)**:
  - Connect to `useProgramDetailLive('culture-and-community-ottawa-program')`.
  - Wire CMS fields for YouTube video (`HQ5mnZqWgMk`), "Find your Community in Ottawa" card, and 2 sub-cards (African/Caribbean Cultural Dance Exchange & Domestic Empowerment).
  - Maintain full static fallback content if CMS data is unseeded/loading.

### 4. Standard Program Subpages Content Sync (`/programs/*`)
- **Issue**: Standard program subpages (`/programs/barbershop-training`, `/programs/sewing-beginners`, `/programs/entrepreneurship-launchpad`, `/programs/cultural-dance`, `/programs/mentorship`, `/programs/coaching`, `/programs/braiding-training`, `/programs/community-cooking-cultural-food`) feature fully populated curriculum and module details on Live, whereas local shows empty shells if unseeded.
- **Fix**: 
  1. Seed all 9 programs in `seed-program-details.ts`.
  2. Update `ProgramDetail.jsx`, `CoachingProgram.jsx`, `MentorshipProgram.jsx` with complete static fallback content matching the live site.

### 5. Ways to Give / Join Us Page Alignment (`/join`)
- **Upcoming Events Card**: Align text between Live ("No upcoming events at the moment. Check back soon for updates!") and Localhost ("Mentorship Info Session") so local matches live config or toggle.
- **Community Gathering Image Grid**: Ensure 6 images display in `JoinUsPage.ts`, `seed-join.ts`, and `JoinUs.jsx` (currently 3 on local vs 6 on live).

### 6. Events & Service Dates Standardization
- **African Caribbean Cultural Dance Exchange Date**: Align date between Live ("Saturday, November 22, 2025") and Local ("Friday, September 26, 2025").

### 7. Contact Page & Footer Office Hours Formatting
- **Call Us Hours**: Standardize format to `"Monday - Friday: 9:00 AM - 6:00 PM"` across `ContactPage.ts`, `seed-contact.ts`, `Contact.jsx`, `ContactPage.jsx`, and `Footer.jsx`.

---

## 🛠️ Step-by-Step Execution Plan for New Chat

### Step 1: Update CMS Schemas & Seed Scripts
1. Update `HomePage.ts` & `ContactPage.ts` with correct typos ("Laperriere Ave", "K1Z 7T1", "Your Life in Canada").
2. Update service card link in `HomePage.ts` & `seed-home.ts` to `/service/culture-and-community-ottawa-program`.
3. Update seed scripts: `seed-home.ts`, `seed-contact.ts`, `seed-join.ts`, `seed-program-details.ts`.
4. Push CMS updates to GitHub (`honor-forge-cms`).

### Step 2: Update WebApp Components & Fallbacks
1. Update `Footer.jsx`, `Contact.jsx`, `Hero.jsx`, `Services.jsx`.
2. Update `ContactPage.jsx`, `JoinUs.jsx`, `ProgramDetail.jsx`, `CultureCommunity.jsx`, `EmpowermentMentorship.jsx`.
3. Push WebApp updates to GitHub (`honor-forge-webapp`).

### Step 3: Run Seeding on VPS
1. Run `npm run db:seed-home && npm run db:seed-contact && npm run db:seed-join && npm run db:seed-program-details` on VPS.

---

## 💡 Instructions for New AI Agent
When you start the new chat, simply type:
> **"Read `cms-docs/05-next-chat-action-plan.md` and execute the fixes."**
