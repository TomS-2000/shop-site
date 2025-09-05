import { useFetch } from '@/hooks/useFetch';
import ProductCarousel from './ProductCarousel';

const SaleTab = () => {
  
    const { products, error } = useFetch(`https://dummyjson.com/products/category/smartphones?limit=0`);

    return (
        <>
            {(!error || products.length >= 1) &&
                <section className='flex flex-col pr-1'>
                    <h2 className="text-3xl font-bold mb-4">Smartphones</h2>
                    <ProductCarousel products={products} />
                </section>
            }
        </>
  )
}

export default SaleTab