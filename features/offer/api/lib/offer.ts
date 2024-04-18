import { cmsApi } from '@/api/clients/cms';
import { Offer } from '@/features/offer/api/types/offer';

export const fetchOffersListings = async (): Promise<Offer[]> => {
  const { items } = await cmsApi.getEntries<Offer>({
    content_type: 'offer',
  });

  return items as unknown as Offer[];
};

export const fetchOfferDetails = async (slug: string): Promise<Offer[]> => {
  const { items } = await cmsApi.getEntries({
    content_type: 'offer',
    'fields.slug': slug,
  });

  return items as unknown as Offer[];
};
