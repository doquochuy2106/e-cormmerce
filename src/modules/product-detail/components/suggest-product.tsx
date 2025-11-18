import { RecommendedProducts } from "@/modules/search/components/recommend-product";

const SuggestProduct = () => {
  return (
    <div className="mt-2">
      <RecommendedProducts
        title="Sản phẩm tương tự"
        showAll={false}
        backgroundColor="bg-white"
      />
    </div>
  );
};

export default SuggestProduct;
