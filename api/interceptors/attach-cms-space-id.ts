import { InternalAxiosRequestConfig } from 'axios';

export const attachCMSSpaceId = (config: InternalAxiosRequestConfig) => {
  config.baseURL = `${config.url}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

  return config;
};
