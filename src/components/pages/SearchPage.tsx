import { useFetch } from '@/hooks/useFetch';
import { useParams } from 'react-router-dom';
import useSkip from '@/hooks/useSkip';
import ProductList from '../market-components/ProductList';
import FilterSideBar from '../market-components/filter/FilterSideBar';
import FilterMobile from '../market-components/filter/FilterMobile';

const SearchPage = () => {
  
	const { query } = useParams();
	const { skip, limit, getNextSite, getPreviousSite} = useSkip(query ?? '');
	const {products, error, total} = useFetch(`https://dummyjson.com/products/search?q=${query ? query : ''}&skip=${skip}&limit=${limit}`);

	const formattedQuery = (query: string | undefined) => query ? query[0].toUpperCase() + query.slice(1) : "<all>";
	
	return (
		<section className='md:grid md:grid-cols-[1fr_7fr] md:gap-5'>
			<FilterSideBar/>
			<FilterMobile/>
			<section>
				<h2 className='text-3xl font-bold'>
					Search: '{formattedQuery(query)}'
				</h2>
				<p> {total > 0 && <span>Total: {total}</span>}</p>
				<div className='mb-4'></div>
				<ProductList products={products} error={error} total={total} skip={skip} limit={limit} getNextSite={getNextSite} getPreviousSite={getPreviousSite}/>
			</section>
		</section>
	)
}

export default SearchPage