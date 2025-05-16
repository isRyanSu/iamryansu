import type { CollectionConfig } from 'payload'

export const User: CollectionConfig = {
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [],
  slug: 'users',
}
