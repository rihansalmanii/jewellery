import { api } from "./api";

export const getAllProducts = async () => {
  const { data } = await api.get("/products");

  return data;
};

export const getProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const addProduct = async (formData) => {
  try {
    const res = await api.post("/products/add-product", formData);

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/delete-product/${id}`);

  return data;
};

export const updateProduct = async (id, formData) => {
  const { data } = await api.patch("/products/update-product/:id", formData);

  return data;
};
