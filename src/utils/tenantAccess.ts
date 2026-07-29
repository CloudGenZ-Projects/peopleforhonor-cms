export function checkTenantAccess(req: any, targetTenantSlug: string): boolean {
  const user = req?.user
  if (!user) return false

  // Determine active tenant selected in the UI filter dropdown
  let activeTenantSlug: string | null = null

  // 1. Check req.tenant object or ID
  if (req?.tenant) {
    if (typeof req.tenant === 'string' || typeof req.tenant === 'number') {
      activeTenantSlug = String(req.tenant)
    } else if (typeof req.tenant === 'object' && req.tenant !== null) {
      activeTenantSlug = req.tenant.slug || String(req.tenant.id) || req.tenant.name?.toLowerCase()
    }
  }

  // 2. Check req.headers (payload-tenant header sent by Admin UI dropdown)
  if (!activeTenantSlug && req?.headers) {
    try {
      const headerTenant =
        typeof req.headers.get === 'function'
          ? req.headers.get('payload-tenant') || req.headers.get('x-payload-tenant')
          : req.headers['payload-tenant'] || req.headers['x-payload-tenant']

      if (headerTenant) {
        activeTenantSlug = String(headerTenant)
      }
    } catch (e) {
      // Ignore header read errors
    }
  }

  // If a specific tenant filter dropdown is selected in the Admin UI:
  if (activeTenantSlug) {
    // If selected tenant is MTSC Halifax (slug 'mtsc' or ID 2):
    if (
      activeTenantSlug === 'mtsc' ||
      activeTenantSlug === '2' ||
      activeTenantSlug.includes('mtsc')
    ) {
      if (targetTenantSlug === 'peopleforhonor') return false
      if (targetTenantSlug === 'mtsc') return true
    }

    // If selected tenant is People For Honor (slug 'peopleforhonor' or ID 1):
    if (
      activeTenantSlug === 'peopleforhonor' ||
      activeTenantSlug === '1' ||
      activeTenantSlug.includes('peopleforhonor')
    ) {
      if (targetTenantSlug === 'mtsc') return false
      if (targetTenantSlug === 'peopleforhonor') return true
    }
  }

  // If user is Super Admin and no active filter dropdown is set
  if (user.email === 'cloudgenz.dev@gmail.com') {
    return true
  }

  // If collection or global is strictly Admin-only (e.g. Users, Tenants)
  if (targetTenantSlug === 'admin-only') {
    return false
  }

  // Fallback: check user's assigned tenants
  const userTenants = user.tenants
  if (!userTenants || !Array.isArray(userTenants)) return false

  return userTenants.some((t: any) => {
    if (typeof t === 'string' || typeof t === 'number') {
      const val = String(t)
      return (
        (targetTenantSlug === 'peopleforhonor' && (val === '1' || val === 'peopleforhonor')) ||
        (targetTenantSlug === 'mtsc' && (val === '2' || val === 'mtsc'))
      )
    }
    if (typeof t === 'object' && t !== null) {
      return (
        t.slug === targetTenantSlug ||
        t.name?.toLowerCase().includes(targetTenantSlug) ||
        (targetTenantSlug === 'peopleforhonor' && (t.slug === 'peopleforhonor' || t.id === 1)) ||
        (targetTenantSlug === 'mtsc' && (t.slug === 'mtsc' || t.id === 2))
      )
    }
    return false
  })
}
