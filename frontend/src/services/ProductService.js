import { api } from "./api";

export const getAllProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

