import { useAtomValue } from "jotai";
import { flashSaleProductsState } from "@/state";
import { Text, useNavigate } from "zmp-ui";
import SaleProduct from "./product/sale-product";
import { useProducts } from "../hooks/use-product";

export default function FlashSales() {
  // const products = useAtomValue(flashSaleProductsState);
  const { data: products, loading, error, refetch } = useProducts();
  
  const navigate = useNavigate();
  return (
    <div className="px-2" onClick={() => navigate("/promotion")}>
      <div className="bg-section rounded-xl p-2">
        <div className="flex justify-between">
          <Text className="+ font-semibold px-1 mb-2">
            Ưu đãi khách hàng mới
          </Text>
          <Text className="text-primary ">Xem thêm</Text>
        </div>
        <div
          className="bg-section flex gap-2 py-2 overflow-x-auto rounded-xl hide-scrollbar"
          style={{ maxWidth: "100%" }}
        >
          {products.length > 0 &&
            products.map((product) => (
              <SaleProduct
                key={product._id}
                imageUrl={product.image}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
