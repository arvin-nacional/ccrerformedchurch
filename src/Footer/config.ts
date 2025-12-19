import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue:
        'Christ-centered, Bible-believing community devoted to helping people know, live, and proclaim Christ.',
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media Links',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
        {
          name: 'youtube',
          type: 'text',
          label: 'YouTube URL',
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '09123456789',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Address',
          defaultValue:
            'Enderun Design & Innovation Campus\n1605 Taguig City, 1605\nMeralco Ave, Ortigas Center,\nPasig City',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          defaultValue: 'info@ccreformedchurch.org',
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 8,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: 'Capitol Commons Reformed Church 2025',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
