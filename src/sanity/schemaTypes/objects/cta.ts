import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const ctaObject = defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Page', value: 'internal' },
          { title: 'External URL', value: 'external' },
          { title: 'Phone Number', value: 'phone' },
          { title: 'Email Address', value: 'email' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      hidden: ({ parent }) => parent?.linkType !== 'external',
      validation: (rule) =>
        rule.uri({ scheme: ['http', 'https'] }).custom((value, ctx) => {
          const parent = ctx.parent as { linkType?: string }
          if (parent?.linkType === 'external' && !value) return 'URL is required'
          return true
        }),
    }),
    defineField({
      name: 'internalPath',
      title: 'Internal Path',
      type: 'string',
      description: 'e.g. /services or /contact',
      hidden: ({ parent }) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'e.g. +15555550100',
      hidden: ({ parent }) => parent?.linkType !== 'phone',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      hidden: ({ parent }) => parent?.linkType !== 'email',
      validation: (rule) =>
        rule.custom((value, ctx) => {
          const parent = ctx.parent as { linkType?: string }
          if (parent?.linkType === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Must be a valid email address'
          }
          return true
        }),
    }),
  ],
})
