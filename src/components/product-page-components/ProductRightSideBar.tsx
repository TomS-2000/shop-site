import type { Product } from "@/types/product"
import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { useCartStore } from "@/stores/cartStore";
import MemolyaPoints from "../extra-components/MemolyaPoints";
import StarView from "../extra-components/StarView";


const ProductRightSideBar = ({product}: {product: Product}) => {

    const addProductToCart = useCartStore((state) => state.addProductToCart);

    return (
        <section className="pt-5 space-y-5">
            <div className='text-4xl font-bold'>{product.price} €</div>
            <div>
                <div className='flex gap-2 items-center'>
                    <StarView rating={product.rating} size={7} color='fill-yellow-500' strokeColor='stroke-yellow-500'/>
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
            
            <MemolyaPoints points={product.price}/>
            
            <Button className="flex gap-6 text-xl sm:text-2xl p-6 w-full items-center cursor-pointer" onClick={() => addProductToCart(product)}>
                <ShoppingCart className="size-7" />
                <span className="font-bold">Add to Cart</span>
            </Button>

        </section>
    )
}

export default ProductRightSideBar