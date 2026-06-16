import { Link } from "react-router-dom"


const ProductCard = ({ product }) => {
  return (
    <>
    <Link to={`/products/${product._id}`}>
        <div className="bg-white flex flex-col ">

      {/* Image */}
      <div className="w-full h-58 bg-black">
        <img
          src="https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-300,fo-auto/697d8feb5f5de502c7201143/cat_img/Golden_Forming__Shine_Bangle_95DCX8XL7V_2026-05-02_1.png"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="pt-2">
        <h2 className="text-sm font-semibold truncate text-[#5e5e5e]">
          {product.name.toUpperCase()}
        </h2>

        <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold">
          ₹{product.salePrice.toLocaleString("en-IN")}
        </p>
        <p className="text-[#636363] line-through text-[12px] font-semibold">
            ₹{product.originalPrice.toLocaleString("en-IN")}
        </p>
        </div>
      </div>
    </div>
    </Link>

    {/* Button */}
      <button className="bg-black w-full text-white py-2 mt-2 font-semibold">
        ADD TO BAG
      </button>
    </>
  );
};

export default ProductCard