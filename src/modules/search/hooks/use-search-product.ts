import { useEffect, useState } from "react";
import { useApiWrapper } from "@/hooks/use-api-wrapper";
import { getProducts } from "../services/search.api";
import { IProduct } from "@/modules/home/types/home.type";

export const useSearchProducts = () => {
  const { handleApiCall } = useApiWrapper();
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSearchProducts = async (
    keyword: string,
    page?: number,
    limit?: number
  ) => {
    try {
      const res = await handleApiCall(
        () => getProducts({ keyword, page, limit }),
        {
          setLocalLoading: setLoading,
          useGlobal: true,
        }
      );
      if (res && res.data && res.data.data) {
        setData(res.data.data.data);
      } else {
        setData([]);
      }
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, search: fetchSearchProducts };
};
