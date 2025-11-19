import FirstOrderSaleProduct from "./product/first-order-sale-product";
import { useProducts } from "../hooks/use-product";

const FirstOrderSale: React.FunctionComponent = () => {
  const { data: products, loading, error, refetch } = useProducts();

  return (
    <div className=" bg-white ">
      <h1 className="text-lg font-semibold  py-2 px-4 ">
        Ưu đãi đơn hàng đầu tiên
      </h1>
      <div className="border-t">
        {products.length > 0 &&
          products.map((product) => (
            <FirstOrderSaleProduct key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default FirstOrderSale;
