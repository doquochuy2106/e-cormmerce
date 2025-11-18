import { Header, Page } from "zmp-ui";
import FirstOrderSale from "../home/components/first-order-sale";
import Footer from "@/components/footer";

const PromotionPage = () => {
  return (
    <Page className="hide-scrollbar overflow-x-hidden">
      <Header
        title={
          (
            <div className="w-[75%] flex flex-col">
              <div className="flex items-center gap-2 w-full">
                <span className="text-black font-semibold text-lg">
                  Ưu đãi khách hàng mới
                </span>
              </div>
            </div>
          ) as unknown as string
        }
      />
      <div className="p-9" />
      <FirstOrderSale />
      <Footer />
    </Page>
  );
};

export default PromotionPage;
