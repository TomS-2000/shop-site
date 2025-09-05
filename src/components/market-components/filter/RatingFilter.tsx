import StarView from '@/components/extra-components/StarView'
import { Button } from '@/components/ui/button';
import { FilterContext } from '@/context/FilterContext';
import { useContext } from 'react';

const RatingFilter = () => {

    const { rating, setRatings } = useContext(FilterContext);

    return (
        <section className='grid gap-2'>
            <h5 className='text-lg font-bold'>Rating over</h5>
            
            <div className='grid gap-1'>
                <Button variant="ghost" className={`cursor-pointer w-fit p-1 rounded-lg ${rating === 1 ? 'bg-neutral-100/90 dark:bg-neutral-900/90' : ''}`} onClick={() => setRatings(1)}>
                    <StarView rating={1} size={5} color='fill-yellow-500' strokeColor='stroke-yellow-500'/>
                </Button>
                <Button variant="ghost" className={`cursor-pointer w-fit p-1 rounded-lg ${rating === 2 ? 'bg-neutral-100/90 dark:bg-neutral-900/90' : ''}`} onClick={() => setRatings(2)}>
                    <StarView rating={2} size={5} color='fill-yellow-500' strokeColor='stroke-yellow-500'/>
                </Button>
                <Button variant="ghost" className={`cursor-pointer w-fit p-1 rounded-lg ${rating === 3 ? 'bg-neutral-100/90 dark:bg-neutral-900/90' : ''}`} onClick={() => setRatings(3)}>
                    <StarView rating={3} size={5} color='fill-yellow-500' strokeColor='stroke-yellow-500'/>
                </Button>
                <Button variant="ghost" className={`cursor-pointer w-fit p-1 rounded-lg ${rating === 4 ? 'bg-neutral-100/90 dark:bg-neutral-900/90' : ''}`} onClick={() => setRatings(4)}>
                    <StarView rating={4} size={5} color='fill-yellow-500' strokeColor='stroke-yellow-500'/>
                </Button>
                {rating && <Button variant="ghost" className='cursor-pointer w-fit p-1 rounded-lg text-base' onClick={() => setRatings(null)}>
                    Deselect Rating
                </Button>}
            </div>
        </section>
    )
}

export default RatingFilter