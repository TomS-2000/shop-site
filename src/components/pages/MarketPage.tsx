import { useParams } from 'react-router-dom'
import { useFetch } from '@/hooks/useFetch';
import useSkip from '@/hooks/useSkip';
import ProductList from '../market-components/ProductList';
import { categories } from '@/stores/categories';
import FilterSideBar from '../market-components/filter/FilterSideBar';
import FilterMobile from '../market-components/filter/FilterMobile';
import { useEffect, useMemo, useState } from 'react';
import { FilterContext } from '@/context/FilterContext';

const MarketPage = () => {

	const { cat, query } = useParams<{cat: string | undefined, query: string | undefined}>();

	let url: string | undefined = "";

	if(cat) {
		url = categories.find(c => c.category.toLowerCase() === cat)?.url;
	} else {
		url = `https://dummyjson.com/products/search?q=${query ? query : ''}`;
	}

	const { skip, limit, getNextSite, getPreviousSite, getFirstSite} = useSkip(cat ?? '');
	const { products, error } = useFetch(cat ? `${url}?limit=0` : `${url}&limit=0`);

	const formattedCat = (cat: string | undefined) => cat ? cat[0].toUpperCase() + cat.slice(1) : "No Category";
	const formattedQuery = (query: string | undefined) => query ? query[0].toUpperCase() + query.slice(1) : "<all>";

	// FilterContext
	const [minPrice, setMinPrice] = useState<number | null>(null);
	const [maxPrice, setMaxPrice] = useState<number | null>(null);
	const [priceOrder, setPriceOrder] = useState<'asc' | 'desc' | null>(null);
	const [brands, setBrands] = useState<{ brand: string, checked: boolean }[]>([]);
	const [rating, setRatings] = useState<number | null>(null);
	const [available, setAvailable] = useState<boolean>(false);
	
	const value = {
		minPrice,
		maxPrice,
		priceOrder,
		brands,
		rating,
		available,
		products,
		setMinPrice,
		setMaxPrice,
		setPriceOrder,
		setBrands,
		setRatings,
		setAvailable
	};

	const getFilteredProducts = useMemo(() => {
		let filtered = products;

		if (minPrice !== null) {
			filtered = filtered.filter(p => p.price >= minPrice);
		}
		if (maxPrice !== null) {
			filtered = filtered.filter(p => p.price <= maxPrice);
		}
		if (rating !== null) {
			filtered = filtered.filter(p => p.rating >= rating);
		}
		if (available) {
			filtered = filtered.filter(p => p.stock > 0);
		}
		if (brands.some(b => b.checked)) {
			filtered = filtered.filter(p => brands.some(b => b.checked && (b.brand === p.brand || (b.brand === 'No Brand' && !p.brand))));
		}
		if (priceOrder) {
			filtered = [...filtered].sort((a, b) => priceOrder === 'asc' ? a.price - b.price : b.price - a.price);
		}

		return filtered;
	}, [products, minPrice, maxPrice, rating, available, brands, priceOrder]);

	const totalFiltered = useMemo(() => getFilteredProducts.length, [getFilteredProducts]);

	const getCurrentProducts = useMemo(() => {
		return getFilteredProducts.filter((_, index) => index < skip + limit && index >= skip);
	}, [skip, limit, getFilteredProducts]);

	useEffect(() => {
		setBrands(Array.from(new Set(products.map(p => p.brand))).map(brand => ({ brand: brand ?? 'No Brand', checked: false })).sort((a, b) => a.brand.localeCompare(b.brand)));
	}, [products]);

	useEffect(() => {
		getFirstSite();
	}, [totalFiltered, getFirstSite]);

	return (
		<section className='md:grid md:grid-cols-[1fr_7fr] md:gap-5'>
			<FilterContext value={value}>
				<FilterSideBar/>
				<FilterMobile/>
			</FilterContext>
			
			<section>
				{cat ? (
					<h2 className='text-3xl font-bold'>
						{formattedCat(cat)}  
					</h2>
				) : (
					<h2 className='text-3xl font-bold'>
						Search: '{formattedQuery(query)}'
					</h2>
				)}
				<p> {totalFiltered > 0 && <span>Total: {totalFiltered}</span>}</p>
				<div className='mb-4'></div>
				<ProductList products={getCurrentProducts} error={error} total={totalFiltered} skip={skip} limit={limit} getNextSite={getNextSite} getPreviousSite={getPreviousSite}/>
			</section>
		</section>
	)
}

export default MarketPage