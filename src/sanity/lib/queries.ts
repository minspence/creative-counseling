import { defineQuery } from "next-sanity";

export const SERVICES_QUERY = defineQuery(
  `*[_type == "service" && defined(slug.current)][]{_id, title, slug, shortDescription}`,
);

export const SERVICE_QUERY = defineQuery(
  `*[_type == "service" && slug.current == $slug][0]{title, description, mainImage }`,
);

export const THERAPISTS_QUERY = defineQuery(
  `*[_type == "therapist"][]{_id, name, slug, role, bio, credentials, mainImage}`,
);

export const THERAPIST_QUERY = defineQuery(
  `*[_type == "therapist" && slug.current == $slug][0]{name, role, credentials, bio, mainImage}`,
);
