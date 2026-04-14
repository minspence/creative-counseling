import { type SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import serviceType from "./serviceType";
import therapistType from "./therapistType";
import settingsType from "./settingsType";
import { faqType } from "./faqType";
import { faqsType } from "./blocks/faqsType";
import { featuresType } from "./blocks/featuresType";
import { heroType } from "./blocks/heroType";
import { pageBuilderType } from "./pageBuilderType";
import { pageType } from "./pageType";
import { splitImageType } from "./blocks/splitImageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    serviceType,
    therapistType,
    settingsType,
    pageBuilderType,
    pageType,
    heroType,
    splitImageType,
    featuresType,
    faqType,
    faqsType,
  ],
};
