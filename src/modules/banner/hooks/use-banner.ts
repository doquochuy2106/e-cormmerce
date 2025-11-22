import { useEffect, useState } from "react";

import { useApiWrapper } from "@/hooks/use-api-wrapper";

import { IBanner } from "../types/banner.type";
import { getBanners } from "../services/banner.api";

export const useBanners = () => {
  const { handleApiCall } = useApiWrapper();
  const [data, setData] = useState<IBanner[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBanners = async () => {
    try {
      const res = await handleApiCall(() => getBanners(), {
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
    fetchBanners();
  }, []);

  return { data, loading, error, refetch: fetchBanners };
};
