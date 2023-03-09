import axios from 'axios';

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL });

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const countriesApi = createAxiosInstance('https://restcountries.com/v3.1/');
