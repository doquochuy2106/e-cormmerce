import axios, { AxiosHeaders } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string,
  headers: { "Content-Type": "application/json" },
  // withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const headers = AxiosHeaders.from(config.headers || {});

  const token =
    typeof window !== "undefined"
      ? window.localStorage?.getItem("access_token")
      : null;

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  headers.set("Accept-Language", "vi");
  config.headers = headers;
  return config;
});
export default instance;
