import { CartIcon, CategoryIcon, PackageIcon } from "./vectors";
import HorizontalDivider from "./horizontal-divider";
import { useAtomValue } from "jotai";
import { cartState } from "@/state";
import Badge from "./badge";
import { Button } from "zmp-ui";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  {
    name: "Danh mục",
    path: "/categories",
    icon: CategoryIcon,
  },
  {
    name: "Đơn hàng",
    path: "/orders",
    icon: PackageIcon,
  },
  {
    name: "Giỏ hàng",
    path: "/cart",
    icon: (props: any) => {
      const cart = useAtomValue(cartState);

      return (
        <Badge value={cart.length}>
          <CartIcon {...props} />
        </Badge>
      );
    },
  },
];

export default function Footer() {
  const location = useLocation();

  const isPathActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    // treat parent path as active for sub routes: /categories -> /categories/...
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <>
      <HorizontalDivider />

      <nav
        role="navigation"
        aria-label="Bottom navigation"
        className="w-full px-4 pt-2 pb-sb bg-white"
      >
        <div className="flex items-center gap-2">
          {/* left: three nav items (flex-1 each) */}
          <div className="flex flex-1 items-stretch">
            {NAV_ITEMS.map((item) => {
              const active = isPathActive(item.path);

              return (
                <Link
                  to={item.path}
                  key={item.path}
                  className="flex-1 flex flex-col items-center justify-center py-1 px-1 cursor-pointer active:scale-95"
                >
                  <div className="w-6 h-6 flex justify-center items-center">
                    {/* icon is a component or function returning JSX */}
                    <item.icon active={active} />
                  </div>
                  <div
                    className={`text-2xs mt-0.5 ${
                      active ? "text-primary font-semibold" : "text-subtitle"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* right: CTA button */}
          <div className="flex items-center">
            <Button
              aria-label="Đặt mua ngay"
              className="bg-red-500 text-white rounded-lg px-4 py-2 whitespace-nowrap flex items-center justify-center active:scale-95 shadow-md min-w-[96px]"
            >
              Đặt mua ngay
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
