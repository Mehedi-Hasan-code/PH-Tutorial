import axios from 'axios';
import React from 'react';
import useAuthContext from '../useAuthContext';
import { useNavigate } from 'react-router';

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = useAuthContext();
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
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  privateApi.interceptors.response.use(
    (res) => {
      console.log(res.data);
      return res.data;
    },
    (error) => {
      const status = error.response?.status;
      if (status === 403) {
        navigate('/forbidden');
      } else if (status === 401) {
        signOutUser()
          .then(() => {
            navigate('/login');
          })
          .catch(() => {});
      }
      return Promise.reject(error);
    }
  );

  return { publicApi, privateApi };
};

export default useAxiosSecure;
