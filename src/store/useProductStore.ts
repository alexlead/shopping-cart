import { create } from "zustand";
import axios from "axios";
import type { Product } from "../types/products";

interface ProductState {
    products: Product[],
    product: Product | null,
    loading: boolean,
    error: string | null,
    fetchProducts: () => Promise<void>,
    fetchProduct: (id: string | undefined) => Promise<void>
}


const useProductStore = create<ProductState>((set) => ({
    products: [],
    product: null,
    loading: false,
    error: null,
    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
            const data = response.data;
            set({ products: data, loading: false });
        } catch (error: unknown) {
            set({ error: "Failed to fetch products", loading: false });
        }
    },
    fetchProduct: async (id) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
            set({ product: response.data, loading: false })
        } catch (error: unknown) {
            set({ error: "Failed to fetch product", loading: false })
        }
    }
}));

export default useProductStore;