import axios from "axios";

const token = localStorage.getItem("token");
const headers = token ? { Authorization: "Bearer " + token } : undefined;
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers,
});

export default instance;
