interface SaleProductProps {
  imageUrl: string;
  price: number;
}

const SaleProduct = ({ imageUrl, price }: SaleProductProps) => {
  return (
    <div className="relative flex-none w-1/5">
      <img src={imageUrl} alt="Sale Product" className="w-full rounded-lg" />

      <div className="absolute h-6 w-full text-center bottom-0 left-1/2 -translate-x-1/2 mb-1 bg-amber-200 px-2 py-1 rounded">
        {price.toLocaleString()}đ
      </div>
    </div>
  );
};

export default SaleProduct;
