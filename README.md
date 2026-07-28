# Honor Forge CMS

Standalone **Payload CMS 3.0** backend for `client.cloudgenz.com`.

## 🚀 Quick Start (Local Development)

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
2. **Start Dev Server:**
   ```bash
   npm run dev
   ```
3. Open **http://localhost:3000/cms/admin** in your browser.

## ⚙️ Environment Variables (`.env`)

```env
PORT=3000
PAYLOAD_SECRET=peopleforhonor-payload-secret-key-2026
PAYLOAD_PUBLIC_SERVER_URL=https://client.cloudgenz.com
CORS_ORIGINS=http://localhost:5173,http://localhost:3000,https://client.cloudgenz.com
DATABASE_URI=postgresql://postgres:password@localhost:5432/honor_forge_db

# S3 / Cloudflare R2 Keys (Optional - defaults to local /uploads)
S3_BUCKET=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_ENDPOINT=
S3_REGION=auto
```

## 📦 VPS Deployment (PM2)

```bash
# Clone to VPS
git clone https://github.com/CloudGenZ-Projects/peopleforhonor-cms.git
cd peopleforhonor-cms

# Install dependencies
npm install --legacy-peer-deps

# Generate importmap & build
npm run build

# Start with PM2
pm2 start npm --name "peopleforhonor-cms" -- start
```
