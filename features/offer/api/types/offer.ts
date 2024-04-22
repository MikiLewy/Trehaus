import { EntryFields } from 'contentful';

export interface KeyValuePair {
  id: string;
  key: string;
  value: string;
}

export interface Offer {
  slug: EntryFields.Text;
  title: EntryFields.Text;
  description: EntryFields.RichText;
  shortDescription: EntryFields.Text;
  mainImage: EntryFields.AssetLink;
  squareMeters: EntryFields.Number;
  thumbnails: EntryFields.AssetLink[];
  details: KeyValuePair[];
  realizationHref: EntryFields.Text;
  finishingStandards: KeyValuePair[];
  groundFloorImage: EntryFields.AssetLink;
  groundFloorDetails: KeyValuePair[];
}
