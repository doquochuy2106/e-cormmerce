import FirstOrderSaleProduct from "@/modules/home/components/product/first-order-sale-product";
import { flashSaleProductsState } from "@/state";
import { useAtomValue } from "jotai";
interface SearchResultProps {
  keyword: string;
}
const SearchResult: React.FC<SearchResultProps> = ({ keyword }) => {
  const products = useAtomValue(flashSaleProductsState);

  return (
    <>
      <div className="border-t bg-white">
        {products.length > 0 &&
          products.map((product) => (
            <FirstOrderSaleProduct key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
export default SearchResult;
