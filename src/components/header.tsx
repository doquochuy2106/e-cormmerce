import { Box, Header, Icon, Input, useNavigate } from "zmp-ui";

export default function Headerr() {
  const navigate = useNavigate();
  return (
    <Header
      showBackIcon={false}
      className="bg-green-500 shadow-sm fixed z-50"
      style={{ height: "100px" }}
      title={
        (
          <div className="w-[75%] flex flex-col">
            {/* Hàng 1: Search + Login */}
            <div className="flex items-center gap-2 w-full">
              <Input.Search
                placeholder="Tìm kiếm..."
                // onFocus={() => navigate("/search")}
              />

              {/* Nút đăng nhập */}
              <button className="bg-white text-black border border-green-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                Đăng nhập
              </button>
            </div>

            {/* Hàng 2: Subtitle */}
            <div>
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
