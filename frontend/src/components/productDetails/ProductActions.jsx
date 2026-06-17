const ProductActions = ({ onAddToBag, onBuyNow, mobile }) => {
  if (mobile) {
    return (
      <div className="fixed gap-2 bottom-0 left-0 px-4 py-3 w-full md:hidden bg-white border-t flex">
        <button
          onClick={onAddToBag}
          className="w-1/2 py-2 border border-[#818181] font-semibold"
        >
          ADD TO BAG
        </button>

        <button
          onClick={onBuyNow}
          className="w-1/2 py-2 bg-black text-white font-semibold"
        >
          BUY NOW
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onAddToBag}
        className="w-full border border-black py-3 font-medium hover:bg-black hover:text-white"
      >
        ADD TO BAG
      </button>

      <button
        onClick={onBuyNow}
        className="w-full bg-black text-white py-3 font-medium"
      >
        BUY NOW
      </button>
    </div>
  );
};

export default ProductActions;