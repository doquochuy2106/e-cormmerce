import axios from "@/config/axios.config";
import { IProduct } from "@/modules/home/types/home.type";
import { IBackendRes, IPaginate } from "@/types/backend";
import { ISearchParams } from "../types/search.type";

export const getProducts = async (params: ISearchParams) => {
  return axios.get<IBackendRes<IPaginate<IProduct>>>(`/product`, {
    params: {
      limit: params.limit,
      page: params.page,
      keyword: params.keyword,
    },
  });
};
