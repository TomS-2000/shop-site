import { useCartStore } from '@/stores/cartStore'
import { AnimatePresence } from 'motion/react';
import CartProductCard from './CartProductCard';

const CartProductList = () => {
    const cartProducts = useCartStore((state) => state.products);

    return (
        <section className='flex flex-1 flex-col gap-3'>
            <AnimatePresence>
                {cartProducts.map(({product, quantity}) => (
                    <CartProductCard key={product.id} product={product} quantity={quantity}/>
                ))}
            </AnimatePresence>
            {cartProducts.length === 0 && <p className='text-lg'>No products in the shopping cart. Add products to your shopping cart.</p>}
        </section>
    )
}

export default CartProductList