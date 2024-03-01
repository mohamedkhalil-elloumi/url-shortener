import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL: `${baseUrl}api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
