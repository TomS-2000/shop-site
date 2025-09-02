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
			<h2 className='text-3xl font-bold'>
				{formattedCat(cat)}  
			</h2>
			<p> {total > 0 && <span>Total: {total}</span>}</p>
			<div className='mb-4'></div>
			<ProductList products={products} error={error} total={total} skip={skip} limit={limit} getNextSite={getNextSite} getPreviousSite={getPreviousSite}/>
		</>
	)
}

export default MarketPage