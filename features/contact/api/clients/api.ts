import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEB3_FORMS_URL,
});

export default api;
