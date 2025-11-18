import { Box, Button, Icon, Sheet, Text } from "zmp-ui";
import { useState } from "react";
import { Product } from "@/types";

interface SheetProductProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const SheetAddProduct = ({ isOpen, onClose, product }: SheetProductProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <Sheet visible={isOpen} onClose={onClose}>
      <Box className="custom-bottom-sheet" flex flexDirection="column" p={4}>
        <Box className="bottom-sheet-cover">
          <img
            alt="Hình ảnh minh họa"
            src={product.image}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
            }}
          />
          <Text className="mt-3 line-clamp-2 font-semibold text-gray-900">
            {product.name}
          </Text>
          <Box className=" flex items-center justify-between">
            <Text size="large" className="font-bold text-primary">
              {product.price}
            </Text>
          </Box>
        </Box>
        {/* Quantity Selector */}
        <Box className="pt-2 space-y-4">
          <Box>
            <Box className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <Text size="small" className="font-medium text-gray-700">
                Số lượng:
              </Text>
              <Box className="flex items-center gap-3">
                <button
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                  className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                    quantity <= 1
                      ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "border-primary bg-white text-primary hover:bg-primary hover:text-white"
                  } transition-colors`}
                >
                  <span className="text-xl font-bold">−</span>
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min={1}
                  className="w-16 h-8 text-center border border-gray-300 rounded-lg font-semibold focus:outline-none focus:border-primary"
                />
                <button
                  onClick={handleIncrease}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-primary bg-white text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="text-xl font-bold">+</span>
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Action Buttons */}
        <Box className="pt-2 flex gap-3 border-t border-gray-100 mb-2">
          <Button
            fullWidth
            variant="secondary"
            onClick={onClose}
            className="flex-1"
          >
            Hủy
          </Button>
          <Button fullWidth className="flex-1">
            Thêm vào giỏ hàng
          </Button>
        </Box>
      </Box>
    </Sheet>
  );
};

export default SheetAddProduct;
