export function checkTenantAccess(req: any, targetTenantSlug: string): boolean {
  const user = req?.user
  if (!user) return false

  // Super Admin email ALWAYS gets access to everything
  if (user.email === 'cloudgenz.dev@gmail.com') {
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
