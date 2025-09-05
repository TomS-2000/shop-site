import type { Product } from '@/types/product';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { useCartStore } from '@/stores/cartStore'
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type CartProduct = {
    product: Product,
    quantity: number
}

const CartProductCard = ({product, quantity} : CartProduct) => {

    const removeProductFromCart = useCartStore((state) => state.removeProductFromCart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const navigate = useNavigate();
    
    const showProductPage = (productId: number) => {
        navigate(`/product/${productId}`);
    }

    return (
        <motion.div layout className='relative grid grid-cols-3 items-center gap-3 border-1 dark:bg-neutral-700/90 rounded-xl p-3 pr-15 shadow dark:shadow-neutral-700 min-w-60' exit={{ opacity: 0, transition: { duration: 0.15} }}>
            
            <img src={product.thumbnail} className="cursor-pointer" onClick={() => showProductPage(product.id)}></img>
            <div className=' space-y-3 col-span-2'>
                <div className="cursor-pointer w-fit" onClick={() => showProductPage(product.id)}>
                    <p className='text-sm'>{product.sku}</p>
                    <p className='text-lg font-bold'>{product.title}</p>
                </div>
                <p className='text-2xl font-bold'>{(product.price * quantity).toFixed(2)} €</p>
                {quantity >= 2 && <p>Price per product: {product.price} €</p>}
                <p>{product.shippingInformation}</p>
                
                <div className='flex gap-2 items-center border-2 rounded-lg w-fit'>
                    <Button variant='ghost' className='cursor-pointer' onClick={() => decreaseQuantity(product.id)}>-</Button>
                    <p className='text-lg'>{quantity}</p>
                    <Button variant='ghost' className='cursor-pointer' onClick={() => increaseQuantity(product.id)}>+</Button>
                </div>
            </div>
            <Button variant='outline' className='absolute right-3 bottom-3 w-fit cursor-pointer' onClick={() => removeProductFromCart(product.id)}><Trash2 className='size-6'/></Button>
            
		</motion.div>
    )
}

export default CartProductCard