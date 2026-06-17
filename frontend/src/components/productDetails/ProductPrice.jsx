import { getDiscountPercentage } from "../../utils/priceUtils";

const ProductPrice = ({ product }) => {
  const discount = getDiscountPercentage(
    product.originalPrice,
    product.salePrice
  );

  return (
    <div className="flex gap-1.5 items-center">
      <p className="text-3xl font-semibold text-gray-800">
        ₹{product.salePrice?.toLocaleString()}
      </p>

      <p className="text-sm line-through font-semibold text-[#6f6f6f]">
        ₹{product.originalPrice?.toLocaleString()}
      </p>

      <p className="text-sm font-semibold text-[#e0462e]">
        {discount}% OFF
      </p>
    </div>
  );
};

export default ProductPrice;

