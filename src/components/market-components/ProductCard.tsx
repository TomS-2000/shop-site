import { type Product } from '@/types/product'
import { Button } from '../ui/button'
import { ShoppingCart, Star } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';

const ProductCard = ({ product }: {product: Product}) => {
    
    const addProductToCart = useCartStore((state) => state.addProductToCart);

    const handleAddToCart = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        addProductToCart(product);
    }

    return (
    <div key={product.id} className='flex flex-col justify-between dark:bg-neutral-700/90 rounded-xl w-76 h-76 px-3 pb-3 pt-1 shadow-sm dark:shadow-neutral-700 hover:shadow-md cursor-pointer'>
        <div className='flex justify-center'>
            <img src={product.thumbnail} className='w-42 h-42'></img>
        </div>

        <p className='text-lg font-bold mb-2'>{product.title}</p>
        
        <div className='flex justify-between items-end'>
            <div className='flex flex-col'>
                <div className='font-bold'>{product.price} €</div>
                <div className='flex items-center gap-1.5'>
                    <div className='flex'>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                                key={i}
                                className={`stroke-zinc-950 size-5 ${Math.round(product.rating) >= i ? ' fill-zinc-950' : ''}`}
                            />
                        ))}
                    </div>
                    <p className='font-bold'>{product.rating}</p>
                </div>
            </div>
            
            <Button variant='outline' className='cursor-pointer w-fit' onClick={(e) => handleAddToCart(e)}><ShoppingCart></ShoppingCart></Button>
        </div>
    </div>
    )
}

export default ProductCard