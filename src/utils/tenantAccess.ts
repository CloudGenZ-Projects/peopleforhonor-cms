export function checkTenantAccess(reqOrArgs: any, targetTenantSlug: string): boolean {
  try {
    const req = reqOrArgs?.req ? reqOrArgs.req : reqOrArgs
    const user = req?.user
    if (!user) return false

    // Case-insensitive Super Admin email check
    const email = (user.email || '').toLowerCase()
    if (email === 'cloudgenz.dev@gmail.com') {
      return true
    }

    // Admin-only items are strictly for cloudgenz.dev@gmail.com
    if (targetTenantSlug === 'admin-only') {
      return false
    }

    const rawTenants = user.tenants || []
    const tenantsList = Array.isArray(rawTenants) ? rawTenants : [rawTenants]

    // If user has no tenants assigned, allow PFH access by default
    if (tenantsList.length === 0 || tenantsList.every((i: any) => !i)) {
      if (targetTenantSlug === 'peopleforhonor') return true
    }

    return tenantsList.some((item: any) => {
      if (!item) return false

      const t = item.tenant !== undefined ? item.tenant : item
      if (!t) return false

      const strVal = typeof t === 'object' && t !== null 
        ? String(t.slug || t.name || t.id || '') 
        : String(t)

      const lowerVal = strVal.toLowerCase()

      if (targetTenantSlug === 'peopleforhonor') {
        return (
          lowerVal === '1' ||
          lowerVal === '3' ||
          lowerVal.includes('people') ||
          lowerVal.includes('honor') ||
          lowerVal.includes('pfh')
        )
      }

      if (targetTenantSlug === 'mtsc') {
        return lowerVal === '2' || lowerVal.includes('mtsc') || lowerVal.includes('halifax')
      }

      return false
    })
  } catch (err) {
    console.error('⚠️ [checkTenantAccess] Caught exception safely:', err)
    return true
  }
}

/**
 * Official Payload 3 helper for admin.hidden property on Globals/Collections.
 * Returns true if the global/collection SHOULD BE HIDDEN in sidebar for this user.
 */
export function isHiddenForUser(user: any, targetTenantSlug: string): boolean {
  try {
    if (!user) return true

    // Case-insensitive Super Admin email check
    const email = (user.email || '').toLowerCase()
    if (email === 'cloudgenz.dev@gmail.com') {
      return false
    }

    // Admin-only items are strictly for cloudgenz.dev@gmail.com
    if (targetTenantSlug === 'admin-only') {
      return true
    }

    const rawTenants = user.tenants || []
    const tenantsList = Array.isArray(rawTenants) ? rawTenants : [rawTenants]

    // If user has no tenants assigned, show PFH section by default
    if (tenantsList.length === 0 || tenantsList.every((i: any) => !i)) {
      if (targetTenantSlug === 'peopleforhonor') return false
    }

    const hasAccess = tenantsList.some((item: any) => {
      if (!item) return false

      const t = item.tenant !== undefined ? item.tenant : item
      if (!t) return false

      const strVal = typeof t === 'object' && t !== null 
        ? String(t.slug || t.name || t.id || '') 
        : String(t)

      const lowerVal = strVal.toLowerCase()

      if (targetTenantSlug === 'peopleforhonor') {
        return (
          lowerVal === '1' ||
          lowerVal === '3' ||
          lowerVal.includes('people') ||
          lowerVal.includes('honor') ||
          lowerVal.includes('pfh')
        )
      }

      if (targetTenantSlug === 'mtsc') {
        return lowerVal === '2' || lowerVal.includes('mtsc') || lowerVal.includes('halifax')
      }

      return false
    })

    return !hasAccess
  } catch (err) {
    return false
  }
}
