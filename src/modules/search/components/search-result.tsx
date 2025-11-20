import FirstOrderSaleProduct from "@/modules/home/components/product/first-order-sale-product";
import { debounce } from "lodash";
import { useSearchProducts } from "../hooks/use-search-product";
import { useEffect } from "react";
interface SearchResultProps {
  keyword: string;
}
const SearchResult: React.FC<SearchResultProps> = ({ keyword }) => {
  const { data: products, loading, error, search } = useSearchProducts();

  useEffect(() => {
    if (!keyword || keyword.trim() === "") {
      return;
    }
    const debouncedFetch = debounce(() => {
      search(keyword);
    }, 1000);

    debouncedFetch();

    return () => {
      debouncedFetch.cancel();
    };
  }, [keyword]);
  return (
    <>
      <div className="border-t bg-white">
        {products.length > 0 &&
          products.map((product) => (
            <FirstOrderSaleProduct key={product._id} product={product} />
          ))}
      </div>
    </>
  );
};
export default SearchResult;
