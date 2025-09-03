import { Star } from 'lucide-react'

const StarView = ({rating, size, color}: {rating: number, size: number, color: 'yellow-500' | 'zinc-950'}) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star
                    key={i}
                    className={`stroke-${color} size-${size} ${Math.round(rating) >= i ? `fill-${color}` : ''}`}
                />
            ))}
        </div>
    )
}

export default StarView