import type { CollectionConfig } from 'payload'
import { checkTenantAccess } from '../utils/tenantAccess'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'name',
    group: 'Admin Settings',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: ({ req }) => checkTenantAccess(req, 'admin-only'),
    update: ({ req }) => checkTenantAccess(req, 'admin-only'),
    delete: ({ req }) => checkTenantAccess(req, 'admin-only'),
    admin: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tenant Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Tenant Slug ID',
    },
    {
      name: 'domain',
      type: 'text',
      label: 'Domain Name (Optional)',
    },
  ],
}
