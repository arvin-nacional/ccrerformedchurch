import type { Block } from 'payload'

export const ContactUsBlock: Block = {
  slug: 'contactUs',
  interfaceName: 'ContactUsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Contact Us',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        "We'd love to hear from you! Reach out with any questions or to plan your visit.",
      label: 'Section Description',
    },
    {
      type: 'collapsible',
      label: 'Get In Touch Section',
      fields: [
        {
          name: 'getInTouchTitle',
          type: 'text',
          defaultValue: 'Get In Touch',
          label: 'Title',
        },
        {
          name: 'getInTouchDescription',
          type: 'text',
          defaultValue: "Visit us, call us, or send us a message. We're here for you!",
          label: 'Description',
        },
        {
          name: 'address',
          type: 'text',
          label: 'Address Line 1',
          defaultValue: '123 Church Street',
        },
        {
          name: 'addressLine2',
          type: 'text',
          label: 'Address Line 2',
          defaultValue: 'Springfield, ST 12345',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '(555) 123-4567',
        },
        {
          name: 'phoneHours',
          type: 'text',
          label: 'Phone Hours',
          defaultValue: 'Monday - Friday, 9am - 5pm',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
          defaultValue: 'info@gracechurch.com',
        },
        {
          name: 'emailNote',
          type: 'text',
          label: 'Email Note',
          defaultValue: "We'll respond within 24 hours",
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Service Times Section',
      fields: [
        {
          name: 'serviceTimesTitle',
          type: 'text',
          defaultValue: 'Service Times',
          label: 'Title',
        },
        {
          name: 'serviceTimes',
          type: 'array',
          label: 'Service Times',
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'serviceName',
              type: 'text',
              label: 'Service Name',
              required: true,
            },
            {
              name: 'time',
              type: 'text',
              label: 'Time',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Contact Form Section',
      fields: [
        {
          name: 'formTitle',
          type: 'text',
          defaultValue: 'Send Us a Message',
          label: 'Form Title',
        },
        {
          name: 'formDescription',
          type: 'text',
          defaultValue: "Fill out the form below and we'll get back to you as soon as possible.",
          label: 'Form Description',
        },
        {
          name: 'form',
          type: 'relationship',
          relationTo: 'forms',
          required: true,
          label: 'Select Form',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      required: true,
      options: [
        { label: 'White', value: 'bg-white' },
        { label: 'Gray 50', value: 'bg-gray-50' },
        { label: 'Transparent', value: 'bg-transparent' },
      ],
      defaultValue: 'bg-gray-50',
    },
  ],
  graphQL: {
    singularName: 'ContactUsBlock',
  },
  labels: {
    plural: 'Contact Us Blocks',
    singular: 'Contact Us Block',
  },
}
