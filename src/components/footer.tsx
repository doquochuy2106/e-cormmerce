import { CartIcon, CategoryIcon, PackageIcon } from "./vectors";
import HorizontalDivider from "./horizontal-divider";
import { useAtomValue } from "jotai";
import { cartState } from "@/state";
import Badge from "./badge";
import { Button } from "zmp-ui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CategorySheet from "./CategorySheet";
import CartSheet from "./CartSheet";

// Import dữ liệu categories và cart mock
import categoriesData from "@/mock/categories.json";
import cartMockData from "@/mock/cart.json";

const NAV_ITEMS = [
  {
    name: "Danh mục",
    path: "/categories",
    icon: CategoryIcon,
    isSheet: true,
    sheetType: "category" as const,
  },
  {
    name: "Đơn hàng",
    path: "/orders",
    icon: PackageIcon,
    isSheet: false,
  },
  {
    name: "Giỏ hàng",
    path: "/cart",
    icon: CartIcon,
    isSheet: true,
    sheetType: "cart" as const,
  },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = useAtomValue(cartState);
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const [showCartSheet, setShowCartSheet] = useState(false);

  // Use mock data if cart is empty (for development)
  const cartItems = cart.length > 0 ? cart : cartMockData;

  const isPathActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const handleNavClick = (
    item: (typeof NAV_ITEMS)[number],
    e: React.MouseEvent
  ) => {
    if (item.isSheet) {
      e.preventDefault();
      if (item.sheetType === "category") {
        setShowCategorySheet(true);
      } else if (item.sheetType === "cart") {
        setShowCartSheet(true);
      }
    }
  };

  const handleCategorySelect = (categoryId: number) => {
    navigate(`/categories/${categoryId}`);
  };

  const handleUpdateCartQuantity = (id: number, quantity: number) => {
    // TODO: Implement update cart quantity logic with your state management
    console.log("Update quantity:", id, quantity);
  };

  const handleRemoveCartItem = (id: number) => {
    // TODO: Implement remove cart item logic with your state management
    console.log("Remove item:", id);
  };

  const handleCheckout = () => {
    setShowCartSheet(false);
    navigate("/checkout");
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
              const IconComponent = item.icon;

              if (item.isSheet) {
                return (
                  <button
                    key={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className="flex-1 flex flex-col items-center justify-center py-1 px-1 cursor-pointer active:scale-95"
                  >
                    <div className="w-6 h-6 flex justify-center items-center">
                      {item.name === "Giỏ hàng" ? (
                        <Badge value={cartItems.length}>
                          <IconComponent active={active} />
                        </Badge>
                      ) : (
                        <IconComponent active={active} />
                      )}
                    </div>
                    <div
                      className={`text-2xs mt-0.5 ${
                        active ? "text-primary font-semibold" : "text-subtitle"
                      }`}
                    >
                      {item.name}
                    </div>
                  </button>
                );
              }

              return (
                <Link
                  to={item.path}
                  key={item.path}
                  className="flex-1 flex flex-col items-center justify-center py-1 px-1 cursor-pointer active:scale-95"
                >
                  <div className="w-6 h-6 flex justify-center items-center">
                    <IconComponent active={active} />
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

      {/* Category Sheet */}
      <CategorySheet
        visible={showCategorySheet}
        onClose={() => setShowCategorySheet(false)}
        categories={categoriesData}
        onSelectCategory={handleCategorySelect}
      />

      {/* Cart Sheet */}
      <CartSheet
        visible={showCartSheet}
        onClose={() => setShowCartSheet(false)}
        items={cartItems.map((item: any) => ({
          id: item.product.id,
          name: item.product.name,
          image: item.product.image,
          price: item.product.price,
          quantity: item.quantity,
          badges: {
            newCustomer: item.product.id === 1, // Khoai lang có badge "Ưu đãi khách mới"
            refrigerated: item.product.category.id === 8, // Thực phẩm đông lạnh có badge "Bảo quản mát"
          },
        }))}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />
    </>
  );
}
