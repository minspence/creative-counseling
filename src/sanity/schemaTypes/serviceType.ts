import { defineField, defineType } from "sanity";
import { ClipboardIcon } from "@sanity/icons";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: ClipboardIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
    }),
  ],
});
