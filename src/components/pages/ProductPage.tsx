import { useFetchProduct } from '@/hooks/useFetch';
import { useParams } from 'react-router-dom'
import ImageSelector from '../product-page-components/ImageSelector';
import ProductRightSideBar from '../product-page-components/ProductRightSideBar';
import ProductInfo from '../product-page-components/ProductDetails';

const ProductPage = () => {

    const {pid} = useParams();
    const {product, error} = useFetchProduct(`https://dummyjson.com/products/${pid}`);

    return (
    <>
        {!error && product ? 

            <section className='grid sm:grid-cols-2 grid-cols-1 justify-center-safe gap-10'>

                <section className='relative'>
                    <div className='sticky top-22'>
                        <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
                        <ImageSelector product={product} />
                    </div>
                </section>
                
                <ProductRightSideBar product={product} />

                <ProductInfo product={product} />

            </section>
            
            : <div className='text-2xl'>{error}</div>
        }
    </>
  )
}

export default ProductPage