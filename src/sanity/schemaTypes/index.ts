import { settings } from './documents/settings'
import { service } from './documents/service'
import { therapist } from './documents/therapist'
import { post } from './documents/post'
import { testimonial } from './documents/testimonial'
import { faq } from './documents/faq'
import { seoObject } from './objects/seo'
import { portableTextObject } from './objects/portableText'
import { ctaObject } from './objects/cta'

export const schemaTypes = [
  // Documents
  settings,
  service,
  therapist,
  post,
  testimonial,
  faq,
  // Objects
  seoObject,
  portableTextObject,
  ctaObject,
]
