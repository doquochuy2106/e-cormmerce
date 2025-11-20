import { IProduct } from "@/modules/home/types/home.type";
import { useState } from "react";

interface CartSheetProps {
  cardProducts: IProduct[];
}

const CartItem = ({ cardProducts }: CartSheetProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(
    cardProducts.map((item) => item._id)
  );

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  const handleQuantityChange = (id: string, delta: number) => {};

  const calculateTotal = () => {};

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const total = calculateTotal();
  const selectedCount = selectedItems.length;
  return (
    <div className="flex-1 overflow-y-auto">
      {cardProducts.map((item) => (
        <div key={item._id} className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-start gap-3">
            {/* Checkbox */}
            <button onClick={() => toggleSelectItem(item._id)} className="mt-1">
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border-2 ${
                  selectedItems.includes(item._id)
                    ? "bg-red-500 border-red-500"
                    : "border-gray-300"
                }`}
              >
                {selectedItems.includes(item._id) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>

            {/* Product Image */}
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              {/* Product Name */}
              <h4 className="text-sm text-gray-900 mb-2 line-clamp-2">
                {item.name}
              </h4>

              {/* Price and Quantity */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-base font-semibold text-black-600">
                  {item.price}
                </span>

                {/* Quantity Control */}
                <div className="flex items-center gap-2 ml-20 ">
                  <button
                    onClick={() => handleQuantityChange(item._id, -1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200"
                    disabled={true}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="w-10 text-center font-medium">
                    {/* {item.quantity} */}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item._id, 1)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Delete Button */}
            <button
              // onClick={() => onRemoveItem?.(item._id)}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
