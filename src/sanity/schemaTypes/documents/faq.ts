import { defineField, defineType } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'portableText',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Getting Started', value: 'getting-started' },
          { title: 'Insurance & Fees', value: 'insurance-fees' },
          { title: 'Services', value: 'services' },
          { title: 'Privacy & HIPAA', value: 'privacy-hipaa' },
          { title: 'Online Therapy', value: 'online-therapy' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within each category.',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
})
