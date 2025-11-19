import { IProduct } from "@/modules/home/types/home.type";
import { Product } from "@/types";
import { Text } from "zmp-ui";
interface DisplayProductProps {
  product: Product;
}

const DisplayProduct = ({ product }: DisplayProductProps) => {
  return (
    <div className="bg-white p-4">
      <img src={product?.image} alt={product?.name} />
      <Text className="text-xl font-bold pt-2">{product?.name}</Text>
      <Text className="text-2xl font-bold text-red-600 py-2">
        {product?.price.toLocaleString()}đ
      </Text>
      <hr className="mt-2" />
      <Text className="pt-2">Đã bán: 123,456</Text>
      <Text className="pt-2">Mua hôm nay, mai nhận ngay</Text>
      <Text className="pt-2">
        Sản phẩm được đảm bảo và cung cấp bởi chúng tôi
      </Text>
    </div>
  );
};

export default DisplayProduct;
