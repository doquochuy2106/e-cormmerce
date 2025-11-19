import { Header, Icon, useNavigate } from "zmp-ui";
import { useState } from "react";

export default function Headerr() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Add login logic
  };

  return (
    <>
      <Header
        showBackIcon={false}
        className="bg-green-600 shadow-md"
        style={{ padding: "4px 8px", height: "auto" }}
        title={
          (
            <div className="w-full mt-7">
              {/* Hàng 1: Search + Login + More + Close */}
              <div className="flex items-center justify-between gap-2 mb-1">
                {/* Nhóm trái: Search + Login */}
                <div className="flex items-center gap-2">
                  {/* Search Input */}
                  <div className="flex items-center bg-white rounded px-2 py-1 w-[180px]">
                    <Icon
                      icon="zi-search"
                      size={25}
                      className="text-gray-400"
                    />
                    <input
                      onFocus={() => navigate("/search")}
                      type="text"
                      placeholder="Tìm sản phẩm"
                      className="border-none outline-none ml-1 text-xs bg-white w-full"
                    />
                  </div>

                  {/* Login Button */}
                  <button
                    onClick={handleLogin}
                    className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap hover:bg-gray-100 transition"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>

              {/* Hàng 2: Subtitle + Quality Badge */}
              <div className="flex items-center justify-between text-white">
                <span className="text-xs font-semibold">
                  Siêu thị Online Sendo Farm
                </span>
                {/* <div className="flex items-center gap- text-xs">
                  <span>Chất lượng đảm bảo bởi</span>
                </div> */}
              </div>
            </div>
          ) as unknown as string
        }
      />
      <div style={{ height: "55px" }}></div>
    </>
  );
}
