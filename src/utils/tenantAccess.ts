export function checkTenantAccess(req: any, targetTenantSlug: string): boolean {
  const user = req?.user
  if (!user) return false

  // Super Admin email gets access to everything (or respects UI dropdown filter)
  if (user.email === 'cloudgenz.dev@gmail.com') {
    let activeTenantSlug: string | null = null

    if (req?.tenant) {
      activeTenantSlug =
        typeof req.tenant === 'object'
          ? req.tenant.slug || String(req.tenant.id)
          : String(req.tenant)
    }

    if (!activeTenantSlug && req?.headers) {
      try {
        const headerTenant =
          typeof req.headers.get === 'function'
            ? req.headers.get('payload-tenant') || req.headers.get('x-payload-tenant')
            : req.headers['payload-tenant'] || req.headers['x-payload-tenant']

        if (headerTenant) activeTenantSlug = String(headerTenant)
      } catch (e) {
        // Ignore header read errors
      }
    }

    if (activeTenantSlug) {
      if (
        activeTenantSlug === 'mtsc' ||
        activeTenantSlug === '2' ||
        activeTenantSlug.includes('mtsc')
      ) {
        if (targetTenantSlug === 'peopleforhonor') return false
        if (targetTenantSlug === 'mtsc') return true
      }

      if (
        activeTenantSlug === 'peopleforhonor' ||
        activeTenantSlug === '1' ||
        activeTenantSlug.includes('peopleforhonor')
      ) {
        if (targetTenantSlug === 'mtsc') return false
        if (targetTenantSlug === 'peopleforhonor') return true
      }
    }

    return true
  }

  // If item is strictly Admin-only (Users, Tenants, AstroTestPage)
  if (targetTenantSlug === 'admin-only') {
    return false
  }

  // For non-admin tenant users (e.g. mtsc user):
  // Check user's assigned tenants array (handles t directly OR t.tenant nested object/ID)
  const rawTenants = user.tenants || []
  const tenantsList = Array.isArray(rawTenants) ? rawTenants : [rawTenants]

  return tenantsList.some((item: any) => {
    if (!item) return false

    // Payload multi-tenant plugin wraps entries as { tenant: tenantObjOrID }
    const t = item.tenant !== undefined ? item.tenant : item
    if (!t) return false

    if (typeof t === 'number' || typeof t === 'string') {
      const val = String(t)
      return (
        (targetTenantSlug === 'peopleforhonor' && (val === '1' || val === 'peopleforhonor')) ||
        (targetTenantSlug === 'mtsc' && (val === '2' || val === 'mtsc'))
      )
    }

    if (typeof t === 'object' && t !== null) {
      const slug = (t.slug || t.name || '').toLowerCase()
      const id = String(t.id || '')
      return (
        slug.includes(targetTenantSlug) ||
        (targetTenantSlug === 'peopleforhonor' && (slug === 'peopleforhonor' || id === '1')) ||
        (targetTenantSlug === 'mtsc' && (slug === 'mtsc' || id === '2'))
      )
    }

    return false
  })
}
