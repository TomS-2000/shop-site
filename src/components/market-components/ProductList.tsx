import ProductCard from './ProductCard'
import { Button } from '../ui/button';
import type { Product } from '@/types/product';
import { useNavigate } from 'react-router-dom';

type ProductListProps = {
    products: Product[],
    error: string | null,
    total: number,
    skip: number,
    limit: number,
    getNextSite: () => void,
    getPreviousSite: () => void
}

const ProductList = ({products, error, total, skip, limit, getNextSite, getPreviousSite} : ProductListProps) => {
    
    const navigate = useNavigate();
    return (
    <>
        <div className='flex flex-wrap gap-5 justify-center-safe'>
            {!error ? products.map(product => (
                <div onClick={() => navigate(`/product/${product.id}`)} key={product.id}>
                    <ProductCard  product={product}/>
                </div>
            )) : <div className='text-2xl'>{error}</div>}
        </div>

        <div className='mt-4'>
            <Button variant='outline' disabled={skip <= 0} onClick={getPreviousSite}>Back</Button>
            <span className='text-lg'> Side: {skip/limit + 1} / {Math.ceil(total/limit)} </span>
            <Button variant='outline' disabled={skip + limit >= total} onClick={getNextSite}>Next</Button>
        </div>
    </>
    )
}

export default ProductList;