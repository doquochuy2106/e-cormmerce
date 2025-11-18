import TransitionLink from "@/components/transition-link";
import { Product } from "@/types";
import { formatPrice } from "@/utils/format";
import { startTransition, useState } from "react";
import { useNavigate } from "zmp-ui";

export interface ProductItemProps {
  product: Product;
}

export default function RecommendProductItem(props: ProductItemProps) {
  const navigate = useNavigate();
  const handleClickProduct = () => {
    startTransition(() => {
      navigate(`/product/${props.product.id}`);
    });
  };
  return (
    <div
      className="flex flex-col cursor-pointer group bg-white rounded-xl "
      onClick={handleClickProduct}
    >
      <div className=" pb-0">
        <img
          src={props.product.image}
          className="w-full aspect-square object-cover"
          alt={props.product.name}
        />
        <div className="p-2 pb-1.5">
          <div className="pb-0.5">
            <div className="text-xs h-9 line-clamp-2">{props.product.name}</div>
          </div>
          <div className="mt-0.5 text-sm font-bold text-primary truncate">
            {formatPrice(props.product.price)}
          </div>
        </div>
      </div>
    </div>
  );
}
