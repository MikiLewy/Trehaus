import { InternalAxiosRequestConfig } from 'axios';

export const attachCMSAccessToken = (config: InternalAxiosRequestConfig) => {
  config.headers['Authorization'] =
    `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN}`;

  return config;
};
