import type { Product } from '@/types/product';
import { useNavigate } from 'react-router-dom';

const HomeProductCard = ({ product }: {product: Product}) => {
    
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-1 justify-between border-1 dark:bg-neutral-700/90 rounded-xl min-w-20 min-h-20 max-h-90 px-3 pb-3 pt-1 shadow-sm dark:shadow-neutral-700 hover:shadow-md cursor-pointer'
            onClick={() => navigate(`/shop-site/product/${product.id}`)}>
            <div className='flex justify-center'>
                <img src={product.thumbnail} className='min-w-20 min-h-20 max-h-70 max-w-70'></img>
            </div>

            <p className='text-lg font-bold mb-2'>{product.title}</p>
        </div>
    )
}

export default HomeProductCard