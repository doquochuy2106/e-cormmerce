import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../services/home.api";
import { useApiWrapper } from "@/hooks/use-api-wrapper";
import { ICategory, IProduct } from "../types/home.type";

export const useCategories = () => {
  const { handleApiCall } = useApiWrapper();
  const [data, setData] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await handleApiCall(() => getCategories(), {
        setLocalLoading: setLoading,
        useGlobal: true,
      });
      if (res && res.data && res.data.data) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    } catch (err: any) {
      setError(err.message || "Lỗi khi tải categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { data, loading, error, refetch: fetchCategories };
};
