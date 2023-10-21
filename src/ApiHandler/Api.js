// unsplashApi.js

import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ksnmp5-M8cE6pHz7y35snOObzt1K5i4sM4BKRSVXQVo',
  },
});

export const searchPhotos = async (query, page = 1, perPage = 10) => {
  try {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPhoto = async (photoId) => {
  try {
    const response = await unsplashApi.get(`/photos/${photoId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
