import { CartIcon, CategoryIcon, PackageIcon } from "./vectors";
import HorizontalDivider from "./horizontal-divider";
import { useAtomValue } from "jotai";
import { cartState } from "@/state";
import Badge from "./badge";
import { Button } from "zmp-ui";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CategorySheet from "./CategorySheet";
import CartSheet from "../modules/cart/component/CartSheet";

// Import dữ liệu categories và cart mock
import categoriesData from "@/mock/categories.json";
import cartMockData from "@/mock/cart.json";
import { useCategories } from "@/modules/home/hooks/use-category";
import { useProducts } from "@/modules/home/hooks/use-product";

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
  const { data: categories, loading, error, refetch } = useCategories();
  const { data: products } = useProducts();

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
              aria-label="Đặt mua"
              className="bg-red-500 text-white rounded-lg px-2 py-1 flex flex-col items-center justify-center active:scale-95 shadow-md min-w-[100px]"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="text-xs font-semibold">Đặt mua</span>
                <span className="text-[10px] font-medium">0đ</span>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Category Sheet */}
      <CategorySheet
        visible={showCategorySheet}
        onClose={() => setShowCategorySheet(false)}
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />

      {/* Cart Sheet */}
      <CartSheet
        visible={showCartSheet}
        onClose={() => setShowCartSheet(false)}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
        cardProducts={products}
      />
    </>
  );
}
