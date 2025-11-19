import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hoặc dùng hook navigation của zmp-ui

// Định nghĩa kiểu dữ liệu cho Category
interface CategoryItem {
  id: number;
  title: string;
  image?: string;
  isHighlight?: boolean; // Dùng cho nút "Mua 2 Tặng 1" màu đỏ
}

const Header: React.FC = () => {
  // State quản lý tab lọc đang chọn
  const [activeFilter, setActiveFilter] = useState("recommend");
  const navigate = useNavigate();

  // Dữ liệu mẫu cho thanh cuộn ngang (Categories)
  const categories: CategoryItem[] = [
    { id: 1, title: "Mua 2 Tặng 1", isHighlight: true },
    {
      id: 2,
      title: "Lớp Chuyên Trái Cây",
      image: "https://via.placeholder.com/30",
    },
    { id: 3, title: "Cảng Cá Sớm", image: "https://via.placeholder.com/30" },
    { id: 4, title: "Rau Củ Sạch", image: "https://via.placeholder.com/30" },
  ];

  return (
    <div className="flex flex-col w-full bg-white border-b border-gray-200">
      {/* --- PHẦN 1: TOP SEARCH BAR (Màu xanh lá) --- */}
      {/* Lưu ý: padding-right lớn để tránh nút đóng native của Zalo */}
      <div
        className="flex items-center px-3 py-2 gap-3 text-white"
        style={{ background: "linear-gradient(to right, #4cac23, #1e9600)" }} // Gradient xanh giống hình
      >
        {/* Nút Back */}
        <button onClick={() => navigate(-1)} className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        {/* Ô tìm kiếm */}
        <div className="flex-1 bg-white rounded flex items-center px-3 py-1.5 h-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#9ca3af"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Tìm sản phẩm"
            className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
        </div>

        {/* Nút Share */}
        <button className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 transform -scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
            />
          </svg>
        </button>

        {/* Khoảng trống giữ chỗ cho nút Native của Zalo (3 chấm và đóng) */}
        <div className="w-16"></div>
      </div>

      {/* --- PHẦN 2: CATEGORY SCROLL (Cuộn ngang) --- */}
      <div className="flex overflow-x-auto whitespace-nowrap p-2 gap-2 no-scrollbar bg-white border-b border-gray-100">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`flex items-center px-2 py-1 rounded text-xs font-medium border shadow-sm flex-shrink-0 ${
              cat.isHighlight
                ? "bg-red-800 text-white border-red-800"
                : "bg-white text-gray-800 border-gray-200"
            }`}
          >
            {/* Giả lập hình ảnh bên trái text */}
            {cat.image && !cat.isHighlight && (
              <img
                src={cat.image}
                alt=""
                className="w-6 h-6 mr-1 rounded object-cover"
              />
            )}

            {/* Giả lập icon "2+1=3" của nút highlight */}
            {cat.isHighlight && (
              <div className="w-6 h-5 bg-blue-200 text-[8px] text-blue-800 flex items-center justify-center rounded mr-1 font-bold">
                2+1=3
              </div>
            )}

            {cat.title}
          </div>
        ))}
      </div>

      {/* --- PHẦN 3: FILTER BAR (Bộ lọc dưới cùng) --- */}
      <div className="flex justify-between items-center px-4 py-3 bg-white text-sm text-gray-600">
        <div
          onClick={() => setActiveFilter("recommend")}
          className={`${
            activeFilter === "recommend" ? "text-red-600 font-bold" : ""
          }`}
        >
          Đề xuất
        </div>
        <div className="h-4 border-r border-gray-300"></div>{" "}
        {/* Dấu gạch dọc */}
        <div
          onClick={() => setActiveFilter("best_sell")}
          className={`${
            activeFilter === "best_sell" ? "text-red-600 font-bold" : ""
          }`}
        >
          Bán nhiều
        </div>
        <div className="h-4 border-r border-gray-300"></div>
        <div
          onClick={() => setActiveFilter("sale")}
          className={`${
            activeFilter === "sale" ? "text-red-600 font-bold" : ""
          }`}
        >
          Giảm nhiều
        </div>
        <div className="h-4 border-r border-gray-300"></div>
        <div className="flex items-center gap-1">
          Giá
          {/* Icon mũi tên lên xuống */}
          <div className="flex flex-col -space-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
