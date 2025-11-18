import { Sheet } from "zmp-ui";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Promotion {
  id: number;
  name: string;
  image: string;
  badge?: string;
}

interface CategorySheetProps {
  visible: boolean;
  onClose: () => void;
  categories: Category[];
  onSelectCategory?: (categoryId: number) => void;
}

export default function CategorySheet({
  visible,
  onClose,
  categories,
  onSelectCategory,
}: CategorySheetProps) {
  const handleCategoryClick = (categoryId: number) => {
    onSelectCategory?.(categoryId);
    onClose();
  };

  return (
    <Sheet
      visible={visible}
      onClose={onClose}
      height="95vh"
      mask
      maskClosable
      swipeToClose
    >
      <div className="bg-white rounded-t-2xl h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-lg font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
              Tất cả danh mục
            </h3>
            <div className="w-10"></div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1 pb-20">
          {/* Categories Section */}
          <div className="px-4 pt-6 pb-4">
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Ngành hàng
            </h4>
            <div className="grid grid-cols-4 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="flex flex-col items-center gap-2 active:opacity-70 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-center text-gray-900 leading-tight line-clamp-2 px-1">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-4 py-3">
          <button
            onClick={onClose}
            className="w-full bg-red-500 text-white font-semibold text-base py-3.5 rounded-lg active:bg-red-600 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </Sheet>
  );
}
