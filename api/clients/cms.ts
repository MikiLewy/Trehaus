
import { createClient } from 'contentful';

// export const cmsApi = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environment/master`,
// });

// // cmsApi.interceptors.request.use(attachCMSSpaceId);
// cmsApi.interceptors.request.use(attachCMSAccessToken);

export const cmsApi = createClient({
  accessToken:
    process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN ?? '',
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  // baseURL: `${process.env.NEXT_PUBLIC_CONTENTFUL_API_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environment/master`,
});
