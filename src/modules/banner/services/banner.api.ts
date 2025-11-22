import { ICategory } from "@/modules/home/types/home.type";
import { IBackendRes } from "@/types/backend";
import { IBanner } from "../types/banner.type";
import axios from "@/config/axios.config";

export const getBanners = async () => {
  return axios.get<IBackendRes<IBanner[]>>("/banners");
};
