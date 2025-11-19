import { productState } from "@/state";
import { useAtomValue } from "jotai";
import { Header, Page, useParams } from "zmp-ui";
import DisplayProduct from "./components/display-product";
import SuggestProduct from "./components/suggest-product";
import { useState } from "react";
import BottomBar from "./components/bottom-bar";
import SheetAddProduct from "./components/sheet-add-product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = useAtomValue(productState(Number(id)))!;
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);
  const handleOpenSheet = () => {
    setIsOpenSheet(true);
  };
  return (
    <Page
      className="hide-scrollbar overflow-x-hidden"
      style={{ overflow: "hidden" }}
    >
      <Header
        title={
          (
            <div className="w-[75%] flex flex-col">
              <div className="flex items-center gap-2 w-full">
                <span className="text-black font-semibold text-lg">
                  {product?.name}
                </span>
              </div>
            </div>
          ) as unknown as string
        }
      />
      <div className="pt-16"></div>
      <DisplayProduct product={product} />
      <SuggestProduct />
      <div className="h-10" />
      <SheetAddProduct
        isOpen={isOpenSheet}
        onClose={() => setIsOpenSheet(false)}
        product={product}
      />
      <BottomBar onOpenSheet={handleOpenSheet} />
    </Page>
  );
};

export default ProductDetailPage;
