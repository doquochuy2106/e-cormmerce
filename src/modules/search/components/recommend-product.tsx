import { recommendedProductsState } from "@/state";
import { useAtomValue } from "jotai";
import RecommendProductItem from "./recommend-product-item";
import { Text } from "zmp-ui";

interface RecommendedProductsProps {
  title?: string;
  showAll?: boolean;
  backgroundColor?: string;
}

export function RecommendedProducts({
  title,
  showAll,
  backgroundColor,
}: RecommendedProductsProps) {
  const recommendedProducts = useAtomValue(recommendedProductsState);

  return (
    <div className={`mb-4 ${backgroundColor}`}>
      <div className="flex justify-between items-center">
        <Text className="font-semibold text-lg px-4 py-3">
          {title || "Gợi ý cho bạn"}
        </Text>

        <Text className="flex-1 text-right text-sm px-4 py-3 text-green-700 font-medium">
          {showAll ? "Xem tất cả" : ""}
        </Text>
      </div>
      <div className="px-4 pb-6 flex space-x-2 overflow-x-auto hide-scrollbar ">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="flex-none"
            style={{ flexBasis: "calc((100vw - 200px) / 2)" }}
          >
            <RecommendProductItem key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
