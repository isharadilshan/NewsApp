const axios = require('axios').default;

//api key a81f155dbbe541d1adf17649230e34d1

// this will be moved to config in future
const url = 'https://newsapi.org/v2';

export const Axios = axios.create({baseURL: url});

/**
 * This request interceptor will send access token with every request
 */
Axios.interceptors.request.use(config => {
  const token = 'a81f155dbbe541d1adf17649230e34d1';
  config.headers.Authorization = token;

  return config;
});
