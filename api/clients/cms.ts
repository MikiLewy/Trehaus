import { createClient } from 'contentful';

export const cmsApi = createClient({
  accessToken:
    process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN ?? '',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
});
