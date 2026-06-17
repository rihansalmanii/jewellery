const ProductPromises = () => {
  return (
    <div className="bg-[#F7F7F7] font-semibold flex flex-col gap-10">
      <div className="flex items-top justify-between text-xs gap-3 pt-15 px-2">

        <div className="flex flex-col items-center w-1/3 gap-2">
          <span>💰</span>
          <p>Cash on Delivery</p>
        </div>

        <div className="flex flex-col items-center w-1/3 gap-2">
          <span>🔁</span>
          <p>3 days Return</p>
        </div>

        <div className="flex flex-col items-center w-1/3 gap-2">
          <span>🚚</span>
          <p>Free Delivery</p>
        </div>

      </div>

      <div className="bg-[#d3d3d3] text-center text-sm">
        Get it delivered in 3-7 days
      </div>
    </div>
  );
};

export default ProductPromises;