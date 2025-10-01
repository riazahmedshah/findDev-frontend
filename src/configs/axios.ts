import axiosDefault from "axios"

const API_URL = new URL("/api/v1",import.meta.env.VITE_BACKEND_URL).toString();

const axios = axiosDefault.create({
  baseURL: API_URL
});


axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axios;