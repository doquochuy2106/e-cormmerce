import { Sheet } from "zmp-ui";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  badges?: {
    newCustomer?: boolean;
    refrigerated?: boolean;
  };
}

interface CartSheetProps {
  visible: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity?: (id: number, quantity: number) => void;
  onRemoveItem?: (id: number) => void;
  onCheckout?: () => void;
}

export default function CartSheet({
  visible,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartSheetProps) {
  const [selectedItems, setSelectedItems] = useState<number[]>(
    items.map((item) => item.id)
  );

  const toggleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleQuantityChange = (id: number, delta: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      onUpdateQuantity?.(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return items
      .filter((item) => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  const total = calculateTotal();
  const selectedCount = selectedItems.length;

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

        {/* Promotion Banner */}
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

        {/* Select All */}
        <div className="px-4 py-3 border-b border-gray-100">
          <button
            onClick={toggleSelectAll}
            className="flex items-center gap-3 w-full text-left"
          >
            <div
              className={`w-5 h-5 rounded flex items-center justify-center border-2 ${
                selectedItems.length === items.length
                  ? "bg-red-500 border-red-500"
                  : "border-gray-300"
              }`}
            >
              {selectedItems.length === items.length && (
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
              Chọn tất cả ({items.length})
            </span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-start gap-3">
                {/* Checkbox */}
                <button
                  onClick={() => toggleSelectItem(item.id)}
                  className="mt-1"
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center border-2 ${
                      selectedItems.includes(item.id)
                        ? "bg-red-500 border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedItems.includes(item.id) && (
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
                  {/* Badges */}
                  <div className="flex gap-1 mb-1">
                    {item.badges?.newCustomer && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded">
                        <span>👤</span>
                        <span className="font-medium">Ưu đãi khách mới</span>
                      </span>
                    )}
                    {item.badges?.refrigerated && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded">
                        <span>❄️</span>
                        <span className="font-medium">Bảo quản mát</span>
                      </span>
                    )}
                  </div>

                  {/* Product Name */}
                  <h4 className="text-sm text-gray-900 mb-2 line-clamp-2">
                    {item.name}
                  </h4>

                  {/* Price and Quantity */}
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-base font-semibold text-black-600">
                      {formatPrice(item.price)}
                    </span>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-2 ml-20 ">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-gray-200"
                        disabled={item.quantity <= 1}
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
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
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
                  onClick={() => onRemoveItem?.(item.id)}
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

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3 mt-8 pt-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Tạm tính</span>
              <span className="text-xl font-bold text-red-600">
                {formatPrice(total)}
              </span>
            </div>

            <button
              onClick={onCheckout}
              disabled={selectedCount === 0}
              className={`py-3 px-8 rounded-sm font-semibold text-base ${
                selectedCount > 0
                  ? "bg-red-500 text-white active:bg-red-600"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              Đặt mua ({selectedCount})
            </button>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
