import type { Product } from "@/types/product"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "../ui/button"
import { useCartStore } from "@/stores/cartStore";
import memolyaPoint from '../../assets/mPointBlack.png'


const ProductRightSideBar = ({product}: {product: Product}) => {

    const addProductToCart = useCartStore((state) => state.addProductToCart);

    return (
        <section className="pt-5 space-y-5">
            <div className='text-4xl font-bold'>{product.price} €</div>
            <div>
                <div className='flex gap-2 items-center'>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                                key={i}
                                className={`stroke-yellow-500 size-7 ${Math.round(product.rating) >= i ? ' fill-yellow-500' : ''}`}
                            />
                        ))}
                    </div>
                    <p className='text-2xl font-bold'>{product.rating}</p>
                </div>
            </div>

            <p className="text-sm">{product.sku}</p>

            <p className="sm:text-xl text-justify">{product.description}</p>

            <div className="flex gap-5 items-center">
                <p className={`sm:text-xl font-bold ${product.availabilityStatus === "In Stock" ? "text-green-500" : (product.availabilityStatus === "Low Stock" ? "text-orange-500" : "text-red-500")}`}>
                {product.availabilityStatus}
                </p>
                {product.availabilityStatus === 'Low Stock' && <p className="text-orange-500">Only {product.stock} left in stock!</p>}
                
            </div>
            
            {product.availabilityStatus !== 'Out of Stock' && <p className="sm:text-xl font-bold">{product.shippingInformation}</p>}
            
            <div className="flex justify-between text-xl text-black font-bold bg-purple-100 p-2 px-3 rounded-lg">
                <p className="">Memolya-Points </p>
                <div className="flex gap-1 items-center">
                    <p>+{Math.ceil(product.price)} </p>
                    <img src={memolyaPoint} className="w-8 h-8 inline-block" alt="Points Icon" />
                </div>
                
            </div>
            
            <Button className="flex gap-6 text-xl sm:text-2xl p-6 w-full items-center cursor-pointer" onClick={() => addProductToCart(product)}>
                <ShoppingCart className="size-7" />
                <span className="font-bold">Add to Cart</span>
            </Button>

        </section>
    )
}

export default ProductRightSideBar