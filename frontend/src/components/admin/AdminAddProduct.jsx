import React, { useEffect, useState } from "react";
import { addProduct } from "../../services/ProductService";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    stock: "",
    originalPrice: "",
    salePrice: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    data.append("originalPrice", formData.originalPrice);
    data.append("salePrice", formData.salePrice);

    images.forEach((image) => {
      data.append("images", image);
    });

    console.log("Product FormData ready");

    try {
      const res = await addProduct(data);
      console.log(res);
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    }
  };

  const onClose = () => {
    navigate("/admin/products");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Add Product</h2>

            <p className="text-sm text-gray-500">
              Enter the details of the new jewellery product.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Gold Bracelet"
              required
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-black"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Elegant gold bracelet..."
              required
              rows={3}
              className="w-full resize-none rounded-md border px-3 py-2 outline-none focus:border-black"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-1 block text-sm font-medium">Category</label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="bracelet"
              required
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-black"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="mb-1 block text-sm font-medium">Quantity</label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              required
              className="w-full rounded-md border px-3 py-2 outline-none focus:border-black"
            />
          </div>

          {/* Prices */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Original Price
              </label>

              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                min="0"
                required
                className="w-full rounded-md border px-3 py-2 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Sale Price
              </label>

              <input
                type="number"
                name="salePrice"
                value={formData.salePrice}
                onChange={handleChange}
                min="0"
                required
                className="w-full rounded-md border px-3 py-2 outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Product Images
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              required
              className="w-full rounded-md border p-2"
            />

            {images.length > 0 && (
              <p className="mt-2 text-sm text-gray-500">
                {images.length} image(s) selected
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-md border py-2 font-medium hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full rounded-md bg-black py-2 font-medium text-white hover:bg-gray-800"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProduct;
