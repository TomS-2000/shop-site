import { useCartStore } from '@/stores/cartStore'
import { Button } from '../ui/button'
import { AnimatePresence, motion } from 'motion/react';


const Cart = () => {
    const cartProducts = useCartStore((state) => state.products);
    const removeProductFromCart = useCartStore((state) => state.removeProductFromCart);

  return (
    <>
      <div className='text-4xl font-bold mb-4'>Cart</div>
      <div className='flex flex-col gap-3'>
        <AnimatePresence>
        {cartProducts.map(product => (
            <motion.div layout key={product.id} className='dark:bg-neutral-700/90 rounded-xl p-3 shadow dark:shadow-neutral-700' exit={{ opacity: 0, transition: { duration: 0.15} }}>
                <div>{product.id}</div>
                <div>{product.title}</div>
                <img src={product.thumbnail} className='w-45 h-45'></img>
                <div>{product.price} $</div>
                <Button variant='outline' className='w-fit' onClick={() => removeProductFromCart(product.id)}>Remove</Button>
            </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Cart