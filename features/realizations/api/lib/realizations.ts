import { cmsApi } from '@/api/clients/cms';

import { Realization } from '../types/realization';

export const fetchRealizations = async (): Promise<Realization[]> => {
  const { items } = await cmsApi.getEntries<{
    contentTypeId: string;
    fields: Realization;
  }>({
    content_type: 'realization',
  });

  const realizations = items?.map(item => item.fields) ?? [];

  return realizations;
};

export const fetchRealization = async (slug: string): Promise<Realization> => {
  const { items } = await cmsApi.getEntries<{
    contentTypeId: string;
    fields: Realization;
  }>({
    content_type: 'realization',
    limit: 1,
    // @ts-expect-error - contentful throws an error but this property exists
    'fields.slug': slug,
  });

  return items?.[0]?.fields;
};
