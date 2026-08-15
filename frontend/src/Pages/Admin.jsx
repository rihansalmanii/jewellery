import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService";
import CartItemCard from "../components/cart/CartItemCard";
import AdminProductCard from "../components/admin/AdminProductCard";

import { MdOutlineLogout } from "react-icons/md";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
import EditProductModal from "../components/admin/EditProductModal";

const Admin = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [refetch, setrefetch] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const { products } = await getAllProducts();
      setProducts(products);
    };

    getProducts();
  }, [refetch]);

  console.log(products);

  const handleLogout = async () => {
    try {
      const data = await logout();

      console.log(data);
      navigate("/admin");
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  return (
    <div className="h-[60dvh] w-full px-5 mb-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col pt-10 pb-5 gap-1">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
          <p className="text-sm w-50">Manage your jewellery products</p>
        </div>

        <div className="rounded-md hover:bg-[#f0f0f0] border-2 border-[#e1e1e1] flex items-center px-3 gap-2 font-semibold py-2">
          <span className="text-red-600">
            <MdOutlineLogout />
          </span>
          <button className="text-red-600" onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>
      <div className="text-center bg-black text-white rounded-md font-semibold border w-full mx-auto py-2">
        <button onClick={() => navigate("/admin/products/add")}>Add Product</button>
      </div>
      <div className="w-full h-0.5 bg-[#cbcaca] mt-5"></div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">All Products:</h2>
        <div className="flex flex-col gap-3">
          {products.map((item, idx) => (
            <div key={idx}>
              <AdminProductCard item={item} handleEdit={handleEdit} />
            </div>
          ))}
        </div>
      </div>

      {showEditModal && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default Admin;
