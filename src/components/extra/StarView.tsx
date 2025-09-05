import { Star } from 'lucide-react'

const StarView = ({rating, size, color, strokeColor}: {rating: number, size: number, color: 'fill-yellow-500' | 'fill-zinc-950', strokeColor: 'stroke-yellow-500' | 'stroke-zinc-950'}) => {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star
                    key={i}
                    className={`size-${size} ${Math.round(rating) >= i ? `${color} ${strokeColor}` : `${strokeColor}`}`}
                />
            ))}
        </div>
    )
}

export default StarView