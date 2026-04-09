import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short description shown in the site header or hero.',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'emergencyDisclaimer',
      title: 'Emergency / Crisis Disclaimer',
      type: 'text',
      rows: 3,
      description:
        'Required footer text. e.g. "If you are in crisis, call or text 988." This is displayed on every page.',
      validation: (rule) => rule.required().warning('Emergency disclaimer is required for mental health sites.'),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Psychology Today', value: 'psychologytoday' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }),
            }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
      description: 'Fallback SEO values for pages that do not define their own.',
    }),
  ],
  preview: {
    select: { title: 'siteName' },
    prepare({ title }) {
      return { title: title ?? 'Site Settings' }
    },
  },
})
