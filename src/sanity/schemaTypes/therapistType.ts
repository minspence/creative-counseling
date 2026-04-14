import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export default defineType({
  name: "therapist",
  title: "Therapist",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Thearpist name is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) =>
        Rule.required().error("Required to generate page on the website"),
      options: {
        source: "name",
        maxLength: 96,
      },
      hidden: ({ document }) => !document?.name,
      readOnly: ({ value, currentUser }) => {
        // Anyone can set the initial slug
        if (!value) {
          return false;
        }
        const isAdmin = currentUser?.roles.some(
          (role) => role.name === "administrator",
        );
        // Only allow admins to edit the slug after it's been set
        return !isAdmin;
      },
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "bio",
      description:
        "A short bio of the therapist to be displayed on their profile page",
      title: "Bio",
      type: "blockContent",
    }),
    defineField({
      name: "credentials",
      description:
        "Therapist's credentials (e.g. LCSW, LPC) to be displayed under their name. (separate multiple credentials with commas)",
      title: "Credentials",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "mainImage",
    },
  },
});
