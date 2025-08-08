import { useFetch } from '@/hooks/useFetch';
import { useParams } from 'react-router-dom';
import useSkip from '@/hooks/useSkip';
import ProductList from '../market-components/ProductList';

const SearchPage = () => {
  
  const { query } = useParams();
  const { skip, limit, getNextSite, getPreviousSite} = useSkip(query ?? '');
  const {products, error, total} = useFetch(`https://dummyjson.com/products/search?q=${query}&skip=${skip}&limit=${limit}`);

  const formattedQuery = (query: string | undefined) => query ? query[0].toUpperCase() + query.slice(1) : "No Category";
  
  return (
    <>
      <div className='text-3xl mb-4'>Search: {formattedQuery(query)} 
        {total > 0 && <span> Total: {total}</span>}
      </div>
      <ProductList products={products} error={error} total={total} skip={skip} limit={limit} getNextSite={getNextSite} getPreviousSite={getPreviousSite}/>
    </>
  )
}

export default SearchPage