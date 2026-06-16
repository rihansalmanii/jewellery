import { getProductById, getAllProducts } from "../services/ProductService";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  // FETCH PRODUCT FROM BACKEND
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const data = await getProductById(id)
        setProduct(data.product);
      } catch (err) {
        console.error("Error fetching product:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id]);


  // ACTIONS
  const handleBuyNow = () => {
    navigate(`/checkout/${id}`);
  };

  const handleAddToBag = () => {
    alert("Added to Bag (connect cart later)");
  };


  // STATES
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* MAIN PRODUCT SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-10">

        {/* LEFT SIDE - IMAGE */}
        <div className="md:w-1/2">
          <img
            src="https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/697d8feb5f5de502c7201143/cat_img/Golden_Forming_Shine_Earring__1VTH0U80NW_2026-05-02_1.png"
            alt={product.name}
            className="w-full h-100 object-cover rounded-lg border"
          />
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="md:w-1/2 flex flex-col gap-4">

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex gap-2 items-center">
            <p className="text-2xl font-bold text-gray-800">
            ₹{product.originalPrice?.toLocaleString()}
          </p>
          <p className="text-sm line-through font-bold text-[#6f6f6f]">
            ₹{product.salePrice?.toLocaleString()}
          </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>


          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4 mt-6">

            <button
              onClick={handleAddToBag}
              className="w-full border border-black text-black py-3 font-medium hover:bg-black hover:text-white transition"
            >
              ADD TO BAG
            </button>

            <button
              onClick={handleBuyNow}
              className="w-full bg-black text-white py-3 font-medium hover:bg-gray-900 transition"
            >
              BUY NOW
            </button>

          </div>

        </div>
      </div>

      {/* bottom section - Buy Now or Add to Cart */}
      <div className="fixed gap-2 bottom-0 left-0 px-4 py-3 w-full md:hidden bg-white border-t flex">

        <button
          onClick={handleAddToBag}
          className="w-1/2 py-2 border border-[#818181] font-semibold text-black"
        >
          ADD TO BAG
        </button>

        <button
          onClick={handleBuyNow}
          className="w-1/2 py-2 bg-black text-white font-semibold"
        >
          BUY NOW
        </button>

      </div>

    </div>
  );
};

export default ProductDetails;