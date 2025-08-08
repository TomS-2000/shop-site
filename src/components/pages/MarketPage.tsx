import { useParams } from 'react-router-dom'
import { useFetch } from '@/hooks/useFetch';
import useSkip from '@/hooks/useSkip';
import ProductList from '../market-components/ProductList';
import { categories } from '@/stores/categories';

const MarketPage = () => {
  
  const { cat } = useParams<{cat: string}>();
  const url = categories.find(c => c.category.toLowerCase() === cat)?.url;

  const { skip, limit, getNextSite, getPreviousSite} = useSkip(cat ?? '');
  const { products, error, total } = useFetch(`${url}?skip=${skip}&limit=${limit}`);

  const formattedCat = (cat: string | undefined) => cat ? cat[0].toUpperCase() + cat.slice(1) : "No Category";

  return (
    <>
      <div className='text-3xl mb-4'>{formattedCat(cat)} 
        {total > 0 && <span> Total: {total}</span>}
      </div>
      <ProductList products={products} error={error} total={total} skip={skip} limit={limit} getNextSite={getNextSite} getPreviousSite={getPreviousSite}/>
    </>
  )
}

export default MarketPage