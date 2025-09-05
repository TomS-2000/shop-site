import { useFetch } from '@/hooks/useFetch';
import ProductCarousel from './ProductCarousel';

const RecommendationTab = () => {
    
    const { products, error } = useFetch(`https://dummyjson.com/products/category/mobile-accessories?limit=0`);

    return (
        <>
            {(!error || products.length >= 1) &&
                <section className='flex flex-col pr-1'>
                    <h2 className="text-3xl font-bold mb-4">Recommended</h2>
                    <ProductCarousel products={products} />
                </section>
            }
        </>
    )
}

export default RecommendationTab