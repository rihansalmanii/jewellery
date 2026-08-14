import { api } from "./api";


export const login = async (formData) => {
    const response = await api.post("/auth/login", formData);

    return response.data
}

export const logout = async () => {
    const response = await api.post("/auth/logout");

    return response.data
}