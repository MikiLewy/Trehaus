import { cmsApi } from '@/api/clients/cms';
import { Offer } from '@/features/offer/api/types/offer';

export const fetchOffersListings = async (): Promise<Offer[]> => {
  const { items } = await cmsApi.getEntries<{
    contentTypeId: string;
    fields: Offer;
  }>({
    content_type: 'offer',
  });

  const offersListings = items?.map(item => item.fields) ?? [];

  return offersListings;
};

export const fetchOfferDetails = async (slug: string): Promise<Offer> => {
  const { items } = await cmsApi.getEntries<{
    contentTypeId: string;
    fields: Offer;
  }>({
    content_type: 'offer',
    limit: 1,
    // @ts-expect-error - contentful throws an error but this property exists
    'fields.slug': slug,
  });

  return items?.[0]?.fields;
};
