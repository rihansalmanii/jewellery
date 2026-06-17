import { getProductById } from "../services/ProductService";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

import ProductImage from "../components/productDetails/ProductImage";
import ProductHeader from "../components/productDetails/ProductHeader";
import ProductPrice from "../components/productDetails/ProductPrice";
import ProductPromises from "../components/productDetails/ProductPromises";
import ProductActions from "../components/productDetails/ProductActions";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data.product);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id]);

  const handleBuyNow = () => {
    navigate(`/checkout/${id}`);
  };

  const handleAddToBag = () => {
    addToCart(product)
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-5">
        
        <ProductImage />

        <div className="md:w-1/2 flex flex-col gap-3">
          <ProductHeader name={product.name} />
          <ProductPrice product={product} />
          <ProductPromises />

          {/* Desktop Buttons */}
          <div className="hidden md:block">
            <ProductActions
              onAddToBag={handleAddToBag}
              onBuyNow={handleBuyNow}
            />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Buttons */}
      <ProductActions
        onAddToBag={handleAddToBag}
        onBuyNow={handleBuyNow}
        mobile
      />
    </div>
  );
};

export default ProductDetails;