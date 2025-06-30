import axios from 'axios';
import React from 'react';

const useAxiosSecure = () => {
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

  privateApi.interceptors.response.use((res) => {
    console.log(res.data);
    return res.data;
  });

  return { publicApi, privateApi };
};

export default useAxiosSecure;
