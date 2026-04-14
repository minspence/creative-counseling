import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("therapist").title("Therapists"),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.divider(),
      S.documentTypeListItem("settings").title("Settings"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["service", "therapist", "page", "faq", "settings"].includes(
            item.getId()!,
          ),
      ),
    ]);
