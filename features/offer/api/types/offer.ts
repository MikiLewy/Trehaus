import { Asset, EntryFields } from 'contentful';

export interface KeyValuePair {
  id: string;
  key: string;
  value: string;
}

export interface Offer {
  contentTypeId: string;
  fields: {
    slug: string;
    title: string;
    description: EntryFields.RichText;
    shortDescription: string;
    mainImage: Asset;
    squareMeters: EntryFields.Number;
    thumbnails: Asset[];
    details: KeyValuePair[];
    finishingStandards: KeyValuePair[];
    groundFloorImage: Asset;
    groundFloorDetails: KeyValuePair[];
  };
}
