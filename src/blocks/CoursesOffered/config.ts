import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CoursesOfferedBlock: Block = {
  slug: 'coursesOffered',
  interfaceName: 'CoursesOfferedBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Courses Offered',
      label: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'richText',
      label: 'Subtitle',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
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
    {
      name: 'courses',
      type: 'array',
      label: 'Courses',
      fields: [
        {
          name: 'courseNumber',
          type: 'text',
          label: 'Course Number',
          required: true,
        },
        {
          name: 'courseTitle',
          type: 'text',
          label: 'Course Title',
          required: true,
        },
        {
          name: 'programName',
          type: 'text',
          label: 'Program Name',
          required: true,
        },
        {
          name: 'tags',
          type: 'text',
          label: 'Tags (comma-separated)',
          required: false,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
          options: [
            { label: 'Book', value: 'book' },
            { label: 'GraduationCap', value: 'graduationCap' },
            { label: 'BookOpen', value: 'bookOpen' },
            { label: 'Library', value: 'library' },
            { label: 'FileText', value: 'fileText' },
          ],
          defaultValue: 'book',
        },
        {
          name: 'iconColor',
          type: 'select',
          label: 'Icon Color',
          required: true,
          options: [
            { label: 'Orange', value: 'orange' },
            { label: 'Blue', value: 'blue' },
            { label: 'Purple', value: 'purple' },
            { label: 'Green', value: 'green' },
          ],
          defaultValue: 'blue',
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'CoursesOfferedBlock',
  },
  labels: {
    plural: 'Courses Offered Blocks',
    singular: 'Courses Offered Block',
  },
}
