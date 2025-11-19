import { startTransition } from "react";
import { Button, Icon, Text, useNavigate } from "zmp-ui";
import { IProduct } from "../../types/home.type";

interface FirstOrderSaleProps {
  product: IProduct;
}
const FirstOrderSaleProduct: React.FunctionComponent<FirstOrderSaleProps> = ({
  product,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    startTransition(() => {
      navigate(`/product/${product._id}`);
    });
  };

  return (
    <div className="flex p-2 border-b" onClick={handleClick}>
      <div className="w-[40%] relative">
        <img src={product.image} alt={product.name} />
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
          <h2 className="bg-red-600 bg-opacity-80 text-white text-xs font-semibold rounded-md px-2 py-0.5 shadow-md">
            Khách mới
          </h2>
          <p className="bg-yellow-400 bg-opacity-90 text-black text-sm font-bold rounded-md px-3 py-0.5 shadow-md">
            -{100 - Math.round((product.price / product.originalPrice!) * 100)}%
          </p>
        </div>
      </div>
      <div className="flex-1 px-2 relative">
        <div className="bg-sky-200 w-max py-1 px-2 rounded-2xl mb-1 flex items-center gap-1 text-sm text-sky-800">
          <Icon icon="zi-unhide" size={16} />
          <Text>Mát</Text>
        </div>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-end">
          <p className="text-xl text-primary line-clamp-2">
            {product.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p className="text-sm text-subtitle line-clamp-2 ms-2 line-through">
            {product.originalPrice?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>
        <p>Đã bán: 123.456</p>
        <button className="absolute bottom-0 right-0  bg-green-600 px-3 py-2 rounded-md text-white">
          +
        </button>
      </div>
    </div>
  );
};

export default FirstOrderSaleProduct;
