import { useAtomValue } from "jotai";
import FirstOrderSaleProduct from "./product/first-order-sale-product";
import { flashSaleProductsState } from "@/state";

const FirstOrderSale: React.FunctionComponent = () => {
  const products = useAtomValue(flashSaleProductsState);
  return (
    <div className=" bg-white ">
      <h1 className="text-lg font-semibold  py-2 px-4 ">
        Ưu đãi đơn hàng đầu tiên
      </h1>
      <div className="border-t">
        {products.length > 0 &&
          products.map((product) => (
            <FirstOrderSaleProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default FirstOrderSale;
