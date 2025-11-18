import { CartIcon } from "@/components/vectors";
import { Box, Button, Icon, Text } from "zmp-ui";

const BottomBar = () => (
  <Box className="fixed bottom-0 left-0 w-full flex justify-between items-center  bg-white border-t border-gray-200 z-50">
    <div className="w-[50%] flex ms-2 me-2 justify-between">
      <div className="flex flex-col items-center">
        <CartIcon />
        <div className="text-xs text-gray-600">Giỏ hàng</div>
      </div>
      <div className="flex flex-col items-end justify-end">
        <div className="text-xl text-gray-600">Tạm tính</div>
        <Text className="font-bold text-red-500">0đ</Text>
      </div>
    </div>
    <div className="flex-1 flex justify-center gap-2 items-center p-2">
      <button
        onClick={() => {}}
        className="p-4 bg-red-500 flex-1 rounded-md text-white font-bold"
      >
        Mua ngay
      </button>
    </div>
  </Box>
);
export default BottomBar;
