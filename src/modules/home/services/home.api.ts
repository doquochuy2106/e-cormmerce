import axios from "@/config/axios.config";
import { IBackendRes, IPaginate } from "@/types/backend";
import { IProduct } from "../types/home.type";

export const getProducts = async () => {
  return axios.get<IBackendRes<IPaginate<IProduct>>>("/product");
};
