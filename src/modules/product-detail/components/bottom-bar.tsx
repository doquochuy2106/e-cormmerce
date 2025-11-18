import { CartIcon } from "@/components/vectors";
import { Box, Button, Icon } from "zmp-ui";

const BottomBar = ({ onOpenSheet }: { onOpenSheet: () => void }) => (
  <Box className="fixed bottom-0 left-0 w-full flex justify-between items-center  bg-white border-t border-gray-200 z-50">
    <div className="w-[50%] flex justify-center ms-2 me-2">
      <button
        onClick={onOpenSheet}
        className="p-4 bg-red-100 w-full border border-red-500 rounded-md text-red-600 font-bold hover:bg-red-200 "
      >
        Thêm vào giỏ
      </button>
    </div>
    <div className="flex-1 flex justify-center gap-2 items-center p-2 bg-slate-100">
      <div className="flex flex-col items-center">
        <CartIcon />
        <div className="text-xs text-gray-600">Giỏ hàng</div>
      </div>
      <button
        onClick={onOpenSheet}
        className="p-4 bg-red-500 flex-1 rounded-md text-white font-bold"
      >
        Mua ngay
      </button>
    </div>
  </Box>
);
export default BottomBar;
