import axios from 'axios';
import React from 'react';
import useAuthContext from '../useAuthContext';

const useAxiosSecure = () => {
  const { user } = useAuthContext();
  // public api
  const publicApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API}`,
  });

  publicApi.interceptors.response.use(
    (res) => {
      console.log(res.data);
      return res.data;
    },
    (err) => console.log(err)
  );

  // private api
  const privateApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API}`,
  });

  privateApi.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  privateApi.interceptors.response.use((res) => {
    console.log(res.data);
    return res.data;
  });

  return { publicApi, privateApi };
};

export default useAxiosSecure;
