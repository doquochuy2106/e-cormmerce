import { Sheet } from "zmp-ui";
import { useState } from "react";
import { IProduct } from "@/modules/home/types/home.type";
import FooterCart123 from "./FooterCart";

import HeaderCart from "./HeaderCart";
import CartItem from "./cart-item";

interface CartSheetProps {
  visible: boolean;
  onClose: () => void;
  // items: CartItem[];
  cardProducts: IProduct[];
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemoveItem?: (id: number) => void;
  onCheckout?: () => void;
}

export default function CartSheet({
  visible,
  onClose,
  // items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  cardProducts,
}: CartSheetProps) {
  return (
    <Sheet
      visible={visible}
      onClose={onClose}
      height="95vh"
      mask
      maskClosable
      swipeToClose
    >
      <div className="bg-white rounded-t-2xl h-full flex flex-col">
        {/* Header */}
        <HeaderCart
          cardProducts={cardProducts}
          onClose={onClose}
          visible={visible}
        />

        {/* Cart Items */}
        <CartItem cardProducts={cardProducts} />

        {/* Footer */}
        <FooterCart123 />
      </div>
    </Sheet>
  );
}
