import { Header, Icon } from "zmp-ui";

export default function Headerr() {
  return (
    <Header
      showBackIcon={false}
      className="bg-green-500 shadow-sm"
      style={{ height: "85px" }}
      title={
        (
          <div className="w-full flex flex-col pr-20">
            {" "}
            {/* Giảm padding right */}
            {/* Hàng trên: ô tìm kiếm + đăng nhập */}
            <div className="flex items-center gap-2 w-full">
              {/* Thanh tìm kiếm - chiếm không gian còn lại */}
              <div className="flex-1 bg-white py-1.5 px-3 rounded-md flex items-center shadow-sm min-w-0 max-w-[calc(100%-90px)]">
                {" "}
                {/* Thêm max-width */}
                <Icon
                  icon="zi-search"
                  size={16}
                  className="text-gray-500 mr-2 flex-shrink-0"
                />
                <span className="text-gray-500 text-xs truncate">
                  Tìm sản phẩm
                </span>
              </div>

              {/* Nút đăng nhập - giữ nguyên kích thước */}
              <button className="bg-white text-black border border-green-600 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 ml-2">
                Đăng nhập
              </button>
            </div>
            {/* Hàng dưới: Tên siêu thị */}
            <div className="flex items-center gap-2 mt-1 pl-1">
              <span className="text-white text-xs font-semibold">
                Siêu thị Online Sendo Farm
              </span>
            </div>
          </div>
        ) as unknown as string
      }
    />
  );
}
