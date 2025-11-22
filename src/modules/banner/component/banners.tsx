import Carousel from "@/components/carousel";
import { useAtomValue } from "jotai";
import { bannersState } from "@/state";
import { useBanners } from "@/modules/banner/hooks/use-banner";

export default function Banners() {
  // const banners = useAtomValue(bannersState);
  const { data: banners, loading, error, refetch } = useBanners();

  console.log(banners);
  return (
    <Carousel
      slides={banners.map((banner) => (
        <img className="w-full rounded" src={banner.image} />
      ))}
    />
  );
}
