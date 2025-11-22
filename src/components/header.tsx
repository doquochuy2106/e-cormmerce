import { Header, Icon, useNavigate } from "zmp-ui";
import { authorize } from "zmp-sdk";

export default function Headerr() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await authorize({
        scopes: ["scope.userLocation", "scope.userPhonenumber"],
      });
      console.log(data["scope.userLocation"]);
      console.log(data["scope.userPhonenumber"]);
    } catch (error) {
      console.log("Người dùng đã từ chối cấp quyền");
    }
  };

  return (
    <>
      <Header
        showBackIcon={false}
        className="bg-green-600 shadow-md "
        style={{ padding: "8px ", height: "auto" }}
        title={
          (
            <div className="w-full mt-3">
              {/* Hàng 1: Search + Login */}
              <div className="flex items-start justify-between gap-2 mb-1">
                {/* Nhóm trái: Search + Login */}
                <div className="flex items-start gap-2 mt-2">
                  {/* Search Input */}
                  <div className="flex items-center bg-white rounded px-2 py-2 w-[195px]">
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

                  {/* Login + Giao hàng */}
                  <div className="flex flex-col items-start">
                    <button
                      onClick={handleLogin}
                      className="bg-white text-green-600 px-3 py-3 rounded-full text-xs font-semibold whitespace-nowrap hover:bg-gray-100 transition"
                    >
                      Đăng nhập
                    </button>
                    <div className="text-[10px] text-white mt-3">
                      <span className="text-xs font-semibold">
                        Giao hàng miễn phí 0đ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hàng 2: Subtitle */}
              <div className="flex items-center justify-between text-white -mt-6 ">
                <span className="text-xs font-semibold ">
                  Siêu thị Online Sendo Farm
                </span>
              </div>
            </div>
          ) as unknown as string
        }
      />
      <div style={{ height: "55px" }}></div>
    </>
  );
}
