import type { Product } from '@/types/product';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import HomeProductCard from './HomeProductCard';

const ProductCarousel = ({ products } : {products: Product[]}) => {
    return (
        <Carousel
                opts={{
                align: "start",
                }}
                className="w-full px-6"
            >
                <CarouselContent>
                {products.map((product) => (
                    <CarouselItem
                    key={product.id}
                    className="basis-1/1 md:basis-1/3 lg:basis-1/5"
                    >
                        <HomeProductCard key={product.id} product={product}></HomeProductCard>
                    </CarouselItem>
                ))}
                </CarouselContent>

                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
            </Carousel>
    )
}

export default ProductCarousel