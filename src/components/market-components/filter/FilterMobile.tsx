import { Funnel } from 'lucide-react';
import { useState } from 'react';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import AvailableFilter from './AvailableFilter';
import BrandFilter from './BrandFilter';
import { ScrollArea } from '@/components/ui/scroll-area';

const FilterMobile = () => {
    
    const [isFilterShow, setIsFilterShow] = useState<boolean>(false);

    return (
        <div className="md:hidden">
            <div className='fixed top-16 right-1 z-10 cursor-pointer rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700/90 w-fit p-2'>
                <Funnel className='size-7' onClick={() => setIsFilterShow(!isFilterShow)}/>
            </div>
            
            {isFilterShow && 
                <section className='fixed z-9 top-16 right-1 grid gap-5 bg-neutral-50/90 dark:bg-neutral-700/90 border-1 rounded-lg mb-4'>
                    <ScrollArea className='h-[70vh] w-[70vw] grid gap-5'>
                        <div className='grid gap-5 p-4'>
                            <PriceFilter/>
                            <RatingFilter/>
                            <BrandFilter/>
                            <AvailableFilter/>
                        </div>
                    </ScrollArea>
                </section>
            } 
        </div>
    )
}

export default FilterMobile