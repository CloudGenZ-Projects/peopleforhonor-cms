# Honor Forge CMS (Payload CMS 3.0 Backend)

Standalone **Payload CMS 3.0** backend for **MTSC Halifax** and **People for Honor**.

---

## 🚀 Quick Reference Commands (`package.json`)

### 1. Server & Build Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts development server on `http://localhost:4000` |
| `npm run build` | Generates importmaps and compiles production Next.js build |
| `npm run start` | Runs compiled production server on port 4000 |

---

### 2. Database & Drizzle Studio Commands
| Command | Description |
| :--- | :--- |
| `npm run db:push` | Syncs PostgreSQL tables with Payload & Drizzle schema (`src/sync-db.ts`) |
| `npm run db:studio` | Launches **Drizzle Studio** GUI on `http://0.0.0.0:4983` |
| `npm run db:backup` | Generates a full PostgreSQL database backup (`src/backup-db.ts`) |

---

### 3. MTSC Halifax Seeding Commands
| Command | Description |
| :--- | :--- |
| `npm run db:seed-tenants` | Seeds initial tenant organizations and tenant users |
| `npm run db:seed-mtsc-home` | Seeds **MTSC Home Page** global content |
| `npm run db:seed-mtsc-whoweare` | Seeds **MTSC Who We Are Page** global content |
| `npm run db:seed-mtsc-support` | Seeds **MTSC Seafarer Support Page** global content |
| `npm run db:seed-mtsc-waystogive` | Seeds **MTSC Ways to Give Page** global content |
| `npm run db:seed-mtsc-publications` | Seeds **MTSC Publications & Reports Page** global content |
| `npm run db:seed-mtsc-contact` | Seeds **MTSC Contact Us Page** global content |

---

## 🗄️ How to Access Drizzle Studio (`npm run db:studio`)

### Option A: Using SSH Tunnel (Recommended & Secure)

1. **Open SSH Tunnel on your Local PC Terminal**:
   ```powershell
   ssh -i "your_location/id_dev_g91" -L 4983:localhost:4983 your_username@your_vps_ip
   ```
2. **Inside VPS Terminal (Once logged in)**:
   ```bash
   cd /root/peopleforhonor-cms
   npm run db:push
   npm run db:studio
   ```
3. **Open in Browser**:
   👉 **[http://localhost:4983](http://localhost:4983)** (or `http://127.0.0.1:4983`)

---

### Option B: Direct IP Access (Without SSH Tunnel)

1. **Allow Port 4983 on VPS Firewall** (Run once on VPS):
   ```bash
   ufw allow 4983
   ```
2. **Inside VPS Terminal**:
   ```bash
   cd /root/peopleforhonor-cms
   npm run db:push
   npm run db:studio
   ```
3. **Open in Browser**:
   👉 **[http://31.97.207.35:4983](http://31.97.207.35:4983)**

---

## ⚙️ Environment Variables (`.env`)

```env
PORT=4000
PAYLOAD_SECRET=peopleforhonor-payload-secret-key-2026
PAYLOAD_PUBLIC_SERVER_URL=https://mtsc-halifax-cms.cloudgenz.com
PAYLOAD_PUBLIC_MTSC_SITE_URL=https://www.missiontoseafarershalifax.ca
CORS_ORIGINS=https://www.missiontoseafarershalifax.ca,https://mtsc-halifax-dev.web.app,http://localhost:5173
DATABASE_URI=postgresql://honor_user:xxxx@127.0.0.1:5432/honor_forge_db

# Cloudflare R2 / S3 Uploads
R2_BUCKET=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_ENDPOINT=
R2_REGION=auto
```

For DB backup:
```bash
gunzip -c /root/cms_backup/DB_backup_2026-09-02_03-00_peopleforhonor.sql.gz | psql "postgresql://honor_user:xxx@127.0.0.1:5432/honor_forge_db"
```

## 📦 VPS Production Update & Deployment Flow

Run these commands on your VPS terminal (`/root/peopleforhonor-cms`):

```bash
cd /root/peopleforhonor-cms
git pull origin main
npm run build
npm run db:push
pm2 restart honor-forge-cms
```
