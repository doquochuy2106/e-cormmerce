import { IProduct } from "@/modules/home/types/home.type";
import { useState } from "react";

interface HeaderCartProps {
  visible: boolean;
  onClose: () => void;
  cardProducts: IProduct[];
}

const HeaderCart = ({ cardProducts, onClose }: HeaderCartProps) => {
  const toggleSelectAll = () => {
    if (selectedItems.length === cardProducts.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cardProducts.map((item) => item._id));
    }
  };

  const [selectedItems, setSelectedItems] = useState<string[]>(
    cardProducts.map((item) => item._id)
  );
  return (
    <>
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="text-lg font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
            Giỏ hàng của anh/chị 0765332106
          </h3>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 flex items-center gap-3">
        <div className="text-2xl">🎁</div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-blue-900">
            MUA 2 LỐC YAKULT TẶNG QUÀ
          </p>
        </div>
      </div>
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
          <span className="flex-1 text-sm text-gray-600">
            [Quà tặng] Khăn đa năng Yakult
          </span>
          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-medium">
            Xem
          </button>
        </div>
      </div>

      <div className="px-4 py-3 border-b border-gray-100">
        <button
          onClick={toggleSelectAll}
          className="flex items-center gap-3 w-full text-left"
        >
          <div
            className={`w-5 h-5 rounded flex items-center justify-center border-2 ${
              selectedItems.length === cardProducts.length
                ? "bg-red-500 border-red-500"
                : "border-gray-300"
            }`}
          >
            {selectedItems.length === cardProducts.length && (
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
          <span className="font-medium text-gray-900">
            Chọn tất cả ({cardProducts.length})
          </span>
        </button>
      </div>
    </>
  );
};

export default HeaderCart;
