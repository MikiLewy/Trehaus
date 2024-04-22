import { EntryFields } from 'contentful';

export interface Realization {
  slug: EntryFields.Text;
  title: EntryFields.Text;
  description: EntryFields.RichText;
  shortDescription: EntryFields.Text;
  mainImage: EntryFields.AssetLink;
  galleryImages: EntryFields.AssetLink[];
}
