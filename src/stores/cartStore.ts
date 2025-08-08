import type { Product } from '@/types/product'
import { create } from 'zustand'

type CartState = {
    products: Product[],
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (productId: number) => void,
    getCartCount: () => number
}

export const useCartStore = create<CartState>()((set) => ({
    products: [],
    addProductToCart: (product) => 
        set((state) => (
            { products: [...state.products, product] }
        )),
    removeProductFromCart: (productId) => 
        set((state) => (
            {products: state.products.filter(product => product.id !== productId)}
        )),
    getCartCount: (): number => {
        return useCartStore.getState().products.length;
    }
}));