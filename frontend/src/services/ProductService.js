import { api } from "./api";

export const getAllProducts = async () => {
  const { data } = await api.get("/products");

  return data;
};

export const getProductById = async (id) => {
    const { data } = await api.get(`/products/${id}`)
    return data;
};

export const addProduct = async (formData) => {
  const { data } = await api.post("/products/add-product")

  return data;
}

export const deleteProduct = async (id) => {
  const { data } = await api.delete("/products/delete-product/:id")

  return data;
}

