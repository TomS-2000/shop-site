import { useMemo, useState } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useCartStore } from "@/stores/cartStore"
import { Info } from 'lucide-react';
import MemolyaPoints from "../extra/MemolyaPoints";

const CartInfo = () => {
	
	const cartProducts = useCartStore((state) => state.products);

	const [couponInput, setCouponInput] = useState<string>("");
	const [coupon, setCoupon] = useState<string>("");
	const [isValideCoupon, setIsValidCoupon] = useState<boolean>(false);
	const [isInfoShow, setIsInfoShow] = useState<boolean>(false);

	const checkCoupon = () => {
		if(couponInput) {
			if (couponInput === '10%') {
			setIsValidCoupon(true);
			} else {
				setIsValidCoupon(false);
			}
			setCoupon(couponInput);
		}
	}

	const getSubTotal = useMemo((): number => {
		return cartProducts.reduce((currentTotal, {product, quantity}) => parseFloat((product.price * quantity + currentTotal).toFixed(2)), 0);
	}, [cartProducts]);

	const getCouponTotal = useMemo(() : number => {
		if(isValideCoupon && coupon === '10%') {
			return -parseFloat((getSubTotal * 10 / 100).toFixed(2));
		}
		return 0;
	}, [coupon, isValideCoupon, getSubTotal]);

	const getDeliveryTotal = useMemo((): number => {
		return getSubTotal + getCouponTotal >= 50 ? 0 : 3.99;
	},[getSubTotal, getCouponTotal]);

	const getTotal = useMemo(() : number => {
		return getSubTotal + getDeliveryTotal + getCouponTotal;
	},[getSubTotal, getDeliveryTotal, getCouponTotal]);

	const toggleInfoShow = () => {
		setIsInfoShow(!isInfoShow);
	}

	return (
		<section className="md:sticky md:top-24 flex-1 space-y-5 border-1 dark:bg-neutral-700/90 shadow-sm dark:shadow-neutral-700 rounded-xl p-2 md:p-3 px-3 md:px-5 h-fit">

			<div className="flex justify-center">
				<h2 className="text-3xl font-bold">Overview</h2>
			</div>
			

			<div className="space-y-3 text-lg md:text-2xl border-t-1 pt-4">
				
				<div className="flex justify-between items-center">
					<p className="font-bold">Subtotal</p>
					<p className="font-bold">{getSubTotal.toFixed(2)} €</p>
				</div>

				{getCouponTotal !== 0 && <div className="flex justify-between items-center">
					<p className="">Coupon {coupon}</p>
					<p className="">{getCouponTotal.toFixed(2)} €</p>
				</div>}

				<div className="flex justify-between items-center">
					<p className="">Delivery Cost</p>
					<p className="">{getDeliveryTotal.toFixed(2)} €</p>
				</div>

				<div className="flex justify-between items-center border-t-1 pt-4">
					<div>
						<p className="font-bold">Total</p>
						<p className="text-sm">incl. VAT</p>
					</div>
					<p className="font-bold">{getTotal.toFixed(2)} €</p>
				</div>
				
				<div className="relative grid grid-cols-4 items-center gap-3 mt-10 border-t-1 pt-4">
					<div className="flex gap-2 items-center col-span-4">
						<p className="text-lg font-semibold">Coupon</p>
						<Info className="size-4 cursor-pointer" onClick={toggleInfoShow}></Info>
					</div>
					
					{isInfoShow && <div className="absolute top-13 z-1 bg-neutral-50/90 dark:bg-neutral-800/90 p-2 rounded-lg w-fit">
						<p className="text-base">Info: Redeem code '10%'.</p>
					</div>}

					<Input className="md:col-start-2 col-span-2" value={couponInput} onChange={(e) => setCouponInput(e.target.value)}/>
					<Button className="w-fit cursor-pointer" onClick={checkCoupon}>Redeem</Button>

					{coupon &&
						(isValideCoupon 
							? <p className="col-start-1 col-span-4 md:col-start-2 text-base">Coupon <span className="font-bold">{coupon}</span> redeemed.</p>
							: <p className="col-start-1 col-span-4 md:col-start-2 text-base text-red-500">Invalid code <span className="font-bold">{coupon}</span></p>
						)
					}
				</div>
			</div>
			
			<hr />

			<MemolyaPoints points={(getSubTotal + getCouponTotal)}/>

			<div className="flex justify-center">
				<Button variant='outline' className="text-3xl font-bold p-6 px-10 cursor-pointer ">Check Out</Button>
			</div>
		</section>
	)
}

export default CartInfo