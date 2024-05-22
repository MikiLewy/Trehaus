import { MetadataRoute } from 'next';

import { fetchOffersListings } from '@/features/offer/api/lib/offer';
import { fetchRealizations } from '@/features/realizations/api/lib/realizations';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const realization = await fetchRealizations();
  const offerListings = await fetchOffersListings();

  const offerListingsEntries: MetadataRoute.Sitemap = offerListings.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/oferta/${slug}`,
    }),
  );

  const realizationsEntries: MetadataRoute.Sitemap = realization.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/realizacje/${slug}`,
    }),
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/oferta`,
      lastModified: new Date(),
    },
    ...offerListingsEntries,
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/realizacje`,
      lastModified: new Date(),
    },
    ...realizationsEntries,
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/technologia`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/kontakt`,
      lastModified: new Date(),
    },
  ];
}
