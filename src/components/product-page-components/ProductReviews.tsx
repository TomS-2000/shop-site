import type { Product } from "@/types/product"
import { Star } from "lucide-react"

const ProductReviews = ({product}: {product: Product}) => {

    const convertToDateString = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleString();
    }
    
    return (
        <section className="space-y-3">
            <h2 className='text-3xl font-bold'>Reviews</h2>
            {product.reviews.map((review, index) => (
                <div key={index} className="space-y-2 dark:bg-neutral-700/90 rounded-xl p-3 shadow dark:shadow-neutral-700">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    className={`stroke-yellow-500 size-5 ${Math.round(product.rating) >= i ? ' fill-yellow-500' : ''}`}
                                />
                            ))}
                        </div>
                        <p className='text-sm'>{convertToDateString(review.date)}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className='text-2xl font-semibold'>{review.reviewerName}</h3>
                        <p>{review.comment}</p>
                    </div>
                    
                </div>
            ))}
        </section>
  )
}

export default ProductReviews