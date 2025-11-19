import { useLoading } from "@/contexts/loading.context";

type ApiFn<T> = () => Promise<T>;

export const useApiWrapper = () => {
  const { show, hide } = useLoading();

  const handleApiCall = async <T>(
    apiFn: ApiFn<T>,
    options?: {
      setLocalLoading?: (isLoading: boolean) => void;
      useGlobal?: boolean;
      timeoutMs?: number;
    }
  ): Promise<T | null> => {
    const { setLocalLoading, useGlobal = false, timeoutMs } = options || {};
    if (setLocalLoading) setLocalLoading(true);
    if (useGlobal) show();

    // helper to apply timeout
    const withTimeout = <U>(p: Promise<U>, ms?: number) => {
      if (!ms || ms <= 0) return p;
      return Promise.race([
        p,
        new Promise<U>((_, reject) =>
          setTimeout(() => reject(new Error("timeout")), ms)
        ),
      ]);
    };

    try {
      const result = await withTimeout(apiFn(), timeoutMs);
      return result as T;
    } catch (err: any) {
      // normalize error handling
      console.error("useApiWrapper error:", err);
      return null;
    } finally {
      if (setLocalLoading) setLocalLoading(false);
      if (useGlobal) hide();
    }
  };

  return { handleApiCall };
};
