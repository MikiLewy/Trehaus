import { cmsApi } from '@/api/clients/cms';
import { Offer } from '@/api/types/offer';

export const fetchOffersListings = async (): Promise<Offer[]> => {
  const { items } = await cmsApi.getEntries<Offer>({
    content_type: 'offer',
  });

  return items as unknown as Offer[];
};
