
const tenantCache = new Map<string, { slug: string; name: string }>()


function normalizeSlug(str: string): string {
  return String(str || '')
    .trim()
    .toLowerCase()
    .replace(/[-_\s]/g, '')
}

export function setTenantInCache(id: string | number, slug: string, name?: string): void {
  if (!id || !slug) return
  tenantCache.set(String(id), {
    slug: String(slug).trim().toLowerCase(),
    name: String(name || '').trim().toLowerCase(),
  })
}


export function removeTenantFromCache(id: string | number): void {
  if (!id) return
  tenantCache.delete(String(id))
}

export function getTenantFromCache(id: string | number): { slug: string; name: string } | undefined {
  if (!id) return undefined
  return tenantCache.get(String(id))
}


export async function refreshTenantCache(payload: any): Promise<void> {
  try {
    const result = await payload.find({
      collection: 'tenants',
      limit: 1000,
      depth: 0,
    })
    const docs = result?.docs || []
    if (Array.isArray(docs)) {
      for (const t of docs) {
        if (t?.id && t?.slug) {
          setTenantInCache(t.id, t.slug, t.name)
        }
      }
      console.log(`✅ [tenantAccess] Loaded ${docs.length} tenants into dynamic memory cache`)
    }
  } catch (err) {
    console.error('⚠️ [tenantAccess] Failed to pre-load tenants cache:', err)
  }
}


function matchesTargetSlug(tenantRef: any, targetNormalized: string): boolean {
  if (!tenantRef) return false

  let slug = ''
  let idStr = ''

  if (typeof tenantRef === 'object' && tenantRef !== null) {
    slug = String(tenantRef.slug || '')
    idStr = String(tenantRef.id || '')
  } else {
    idStr = String(tenantRef)
  }

  // 1. Direct match on populated tenant slug
  if (slug && normalizeSlug(slug) === targetNormalized) {
    return true
  }

  // 2. Match via cached tenant ID
  if (idStr && tenantCache.has(idStr)) {
    const cached = tenantCache.get(idStr)!
    if (normalizeSlug(cached.slug) === targetNormalized) {
      return true
    }
  }

  return false
}


export async function checkTenantAccess(reqOrArgs: any, targetTenantSlug: string): Promise<boolean> {
  try {
    const req = reqOrArgs?.req ? reqOrArgs.req : reqOrArgs
    const user = req?.user
    if (!user) return false

    // 1. Super Admin email bypass
    const email = (user.email || '').toLowerCase()
    if (email === 'cloudgenz.dev@gmail.com') {
      return true
    }

    // 2. Global Admin / Super-Admin roles bypass
    const roles = Array.isArray(user.roles) ? user.roles : (user.role ? [user.role] : [])
    if (roles.includes('admin') || roles.includes('super-admin')) {
      return true
    }

    // 3. Admin-only sections are reserved for super admins
    if (targetTenantSlug === 'admin-only') {
      return false
    }

    const targetNorm = normalizeSlug(targetTenantSlug)
    const rawTenants = user.tenants || []
    const tenantsList = Array.isArray(rawTenants) ? rawTenants : [rawTenants]

    // Default fallback: If user has no tenants assigned, grant access only to default primary tenant
    if (tenantsList.length === 0 || tenantsList.every((i: any) => !i)) {
      return targetNorm === normalizeSlug('peopleforhonor')
    }

    for (const item of tenantsList) {
      if (!item) continue
      const t = item.tenant !== undefined ? item.tenant : item
      if (!t) continue

      // Check against populated object or in-memory cache
      if (matchesTargetSlug(t, targetNorm)) {
        return true
      }

      // If tenant ID is not yet in cache, fetch dynamically from database using req.payload
      const idStr = String(typeof t === 'object' && t !== null ? t.id || '' : t)
      if (idStr && !tenantCache.has(idStr) && req?.payload) {
        try {
          const doc = await req.payload.findByID({
            collection: 'tenants',
            id: idStr,
            depth: 0,
          })
          if (doc?.slug) {
            setTenantInCache(idStr, doc.slug, doc.name)
            if (normalizeSlug(doc.slug) === targetNorm) {
              return true
            }
          }
        } catch {
          // Lookup failed, continue checking remaining tenants
        }
      }
    }

    return false
  } catch (err) {
    console.error('⚠️ [checkTenantAccess] Caught exception safely:', err)
    return true
  }
}


export function isHiddenForUser(user: any, targetTenantSlug: string): boolean {
  try {
    if (!user) return true

    // 1. Super Admin email bypass
    const email = (user.email || '').toLowerCase()
    if (email === 'cloudgenz.dev@gmail.com') {
      return false
    }

    // 2. Global Admin / Super-Admin roles bypass
    const roles = Array.isArray(user.roles) ? user.roles : (user.role ? [user.role] : [])
    if (roles.includes('admin') || roles.includes('super-admin')) {
      return false
    }

    // 3. Admin-only sections are reserved for super admins
    if (targetTenantSlug === 'admin-only') {
      return true
    }

    const targetNorm = normalizeSlug(targetTenantSlug)
    const rawTenants = user.tenants || []
    const tenantsList = Array.isArray(rawTenants) ? rawTenants : [rawTenants]

    // Default fallback: If user has no tenants assigned, show only default primary tenant
    if (tenantsList.length === 0 || tenantsList.every((i: any) => !i)) {
      return targetNorm !== normalizeSlug('peopleforhonor')
    }

    const hasAccess = tenantsList.some((item: any) => {
      if (!item) return false
      const t = item.tenant !== undefined ? item.tenant : item
      if (!t) return false
      return matchesTargetSlug(t, targetNorm)
    })

    return !hasAccess
  } catch (err) {
    return false
  }
}
