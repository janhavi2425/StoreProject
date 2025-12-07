import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:0000",   // change to needed host
});

// Add token if present
API.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
