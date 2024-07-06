import { EntryFields } from 'contentful';

import { KeyValuePair } from '@/types/interfaces/key-value-pair';

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
  externalUrlToOfferDetails: EntryFields.Text;
}
