import type { StructureResolver } from 'sanity/structure'
import {
  CogIcon,
  DocumentTextIcon,
  HelpCircleIcon,
  StarIcon,
  TagIcon,
  UserIcon,
} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Creative Counseling')
    .items([
      // Singleton: Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      S.documentTypeListItem('service').title('Services').icon(TagIcon),
      S.documentTypeListItem('therapist').title('Therapists').icon(UserIcon),
      S.divider(),
      S.documentTypeListItem('post').title('Blog / Resources').icon(DocumentTextIcon),
      S.documentTypeListItem('faq').title('FAQs').icon(HelpCircleIcon),
      S.documentTypeListItem('testimonial').title('Testimonials').icon(StarIcon),
    ])
