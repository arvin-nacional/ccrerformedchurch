import type { CollectionConfig } from 'payload'

export const Members: CollectionConfig = {
  slug: 'members',
  auth: {
    tokenExpiration: 7200, // 2 hours
    cookies: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
    },
  },
  access: {
    // Members cannot access admin panel
    admin: () => false,
    // Only admins (users collection) can create members
    create: ({ req }) => {
      // Check if the request is from an admin user
      if (req.user && req.user.collection === 'users') {
        return true
      }
      return false
    },
    // Members can only read their own data
    read: ({ req }) => {
      if (req.user) {
        // Admins can read all
        if (req.user.collection === 'users') return true
        // Members can only read themselves
        if (req.user.collection === 'members') {
          return {
            id: {
              equals: req.user.id,
            },
          }
        }
      }
      return false
    },
    // Members can only update their own data
    update: ({ req }) => {
      if (req.user) {
        if (req.user.collection === 'users') return true
        if (req.user.collection === 'members') {
          return {
            id: {
              equals: req.user.id,
            },
          }
        }
      }
      return false
    },
    // Only admins can delete members
    delete: ({ req }) => {
      return req.user?.collection === 'users'
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'createdAt'],
    group: 'Members',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'memberSince',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Inactive members cannot log in',
      },
    },
  ],
  timestamps: true,
}
