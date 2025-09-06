import { useCartStore } from '@/stores/cartStore'
import { AnimatePresence } from 'motion/react';
import CartProductCard from './CartProductCard';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const CartProductList = () => {
    const cartProducts = useCartStore((state) => state.products);
    const navigate = useNavigate();

    return (
        <section className='flex flex-1 flex-col gap-3'>
            <AnimatePresence>
                {cartProducts.map(({product, quantity}) => (
                    <CartProductCard key={product.id} product={product} quantity={quantity}/>
                ))}
            </AnimatePresence>
            {cartProducts.length === 0 && 
                <div className='flex flex-col items-center text-center space-y-10'>
                    <p className='text-2xl'>No products in the shopping cart.</p>
                    <p className='text-xl'>Add products to your shopping cart.</p>
                    <Button variant='outline' className='text-xl p-5' onClick={() => navigate('/shop-site/search')}>Continue shopping</Button>
                </div>}
        </section>
    )
}

export default CartProductList