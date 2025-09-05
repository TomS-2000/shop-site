import CartInfo from '../cart/CartInfo';
import CartProductList from '../cart/CartProductList';
import { useCartStore } from '@/stores/cartStore';

const Cart = () => {

	const cartProducts = useCartStore((state) => state.products);

	return (
		<>
			<h1 className='text-4xl font-bold mb-6'>Cart</h1>
			<section className='md:flex md:gap-5 lg:gap-8 max-md:space-y-3'>
				<CartProductList/>
				{cartProducts.length > 0 && <CartInfo/>}
			</section>
		</>
	)
}

export default Cart