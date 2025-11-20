interface FooterCartProps {
  onCheckout?: () => void;
}

const FooterCart = ({ onCheckout }: FooterCartProps) => {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3 mt-8 pt-10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">Tạm tính</span>
          <span className="text-xl font-bold text-red-600">
            {/* {formatPrice(total)} */}
          </span>
        </div>

        <button
          onClick={onCheckout}
          disabled={false}
          className={`py-3 px-8 rounded-sm font-semibold text-base 
          }`}
        >
          Đặt mua (1)
        </button>
      </div>
    </div>
  );
};

export default FooterCart;
