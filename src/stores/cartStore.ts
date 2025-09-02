import type { Product } from '@/types/product'
import { create } from 'zustand'

type CartState = {
    products: {product: Product, quantity: number}[],
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (productId: number) => void,
    getCartCount: () => number,
    increaseQuantity: (productId: number) => void,
    decreaseQuantity: (productId: number) => void
}

export const useCartStore = create<CartState>()((set) => ({
    products: [],
    addProductToCart: (product) => 
        set((state) => {
            const existsProductInCart = state.products.find(({product: p}) => p.id === product.id);
            if(existsProductInCart) {
                return { products: state.products.map(({product: p, quantity}) => p.id === product.id ? {product: p, quantity: quantity + 1} : {product: p, quantity}) }
            } else {
                return { products: [...state.products, {product: product, quantity: 1}] }
            }
        }),
    removeProductFromCart: (productId) => 
        set((state) => (
            {products: state.products.filter(({product}) => product.id !== productId)}
        )),
    getCartCount: (): number => {
        return useCartStore.getState().products.length;
    },
    increaseQuantity: (productId) =>
        set((state) => (
            {products: state.products.map(({product,quantity}) => product.id === productId ? {product: product, quantity: quantity + 1} : {product: product, quantity})}
        )),
    decreaseQuantity: (productId) => {
        set((state) => {
            const product = state.products.find(({product}) => product.id === productId);
            if (product && product.quantity > 1) {
                return {
                    products: state.products.map(({product, quantity}) => product.id === productId ? {product: product, quantity: Math.max(quantity - 1, 0)} : {product, quantity})
                };
            } else {
                return {
                    products: state.products.filter(({product}) => product.id !== productId)
                }
            }
            return state;
        });
    },
}));