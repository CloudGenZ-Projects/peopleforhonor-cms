export function checkTenantAccess(req: any, targetTenantSlug: string): boolean {
  const user = req?.user
  if (!user) return false

  // Super Admin email gets access to all Globals
  if (user.email === 'cloudgenz.dev@gmail.com') {
    return true
  }

  // Check if user has assigned tenants matching target tenant
  const userTenants = user.tenants
  if (!userTenants || !Array.isArray(userTenants)) return false

  return userTenants.some((t: any) => {
    if (typeof t === 'string' || typeof t === 'number') return true
    if (typeof t === 'object' && t !== null) {
      return t.slug === targetTenantSlug || t.name?.toLowerCase().includes(targetTenantSlug)
    }
    return false
  })
}
