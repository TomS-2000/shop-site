import type { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import ProductInfo from "./ProductInfo";

const ProductDetails = ({product} : {product: Product}) => {

    const [selectedTab, setSelectedTab] = useState<"description" | "info" | "reviews">("description");
    
    return (
        <section className='sm:col-span-2 space-y-3'>
            <section className="sm:space-x-3 pb-1 border-b-2">
                <Button variant="ghost" className={`sm:text-xl cursor-pointer ${selectedTab === "description" ? "bg-accent dark:bg-accent/50" : ""}`} onClick={() => setSelectedTab("description")}>Description</Button>
                <Button variant="ghost" className={`sm:text-xl cursor-pointer ${selectedTab === "info" ? "bg-accent dark:bg-accent/50" : ""}`} onClick={() => setSelectedTab("info")}>More Info</Button>
                <Button variant="ghost" className={`sm:text-xl cursor-pointer ${selectedTab === "reviews" ? "bg-accent dark:bg-accent/50" : ""}`} onClick={() => setSelectedTab("reviews")}>Reviews</Button> 
            </section>

            {selectedTab === "description" && <ProductDescription product={product} />} 
            {selectedTab === "info" && <ProductInfo product={product} />} 
            {selectedTab === "reviews" && <ProductReviews product={product} />}
        </section>
    )
}

export default ProductDetails