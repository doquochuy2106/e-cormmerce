import { useEffect, useState } from "react";
import { getProducts } from "../services/home.api";
import { useApiWrapper } from "@/hooks/use-api-wrapper";
import { IProduct } from "../types/home.type";

export const useProducts = () => {
  const { handleApiCall } = useApiWrapper();
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHotProducts = async () => {
    try {
      const res = await handleApiCall(() => getProducts(), {
        setLocalLoading: setLoading,
        useGlobal: true,
      });
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

  useEffect(() => {
    fetchHotProducts();
  }, []);

  return { data, loading, error, refetch: fetchHotProducts };
};
