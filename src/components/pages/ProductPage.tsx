import { useFetchProduct } from '@/hooks/useFetch';
import { useParams } from 'react-router-dom'

const ProductPage = () => {

  const {pid} = useParams();
  const {product, error} = useFetchProduct(`https://dummyjson.com/products/${pid}`);

  return (
    <>{!error && product ? 
      <div>
        <div>{product.title}</div>
        <img src={product.thumbnail} alt="bild" className='w-90 h-90'/>
      </div>
      : <div className='text-2xl'>{error}</div>
    }
    </>
  )
}

export default ProductPage