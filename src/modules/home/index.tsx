import Banners from "./components/banners";
import Category from "./components/category";
import FirstOrderSale from "./components/first-order-sale";
import FlashSales from "./components/flash-sales";

const HomePage: React.FunctionComponent = () => {
  return (
    <div className="min-h-full space-y-2 py-2 ">
      <Category />
      <div className="bg-section">
        <Banners />
      </div>
      <FlashSales />
      <FirstOrderSale />
    </div>
  );
};

export default HomePage;
