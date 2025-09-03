import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FilterContext } from '@/context/filterContext';
import { useContext } from 'react'

const BrandFilter = () => {

    const { brands, setBrands } = useContext(FilterContext);

    return (
        <section className='flex flex-col gap-2'>
            <h5 className='text-lg font-bold'>Brands</h5>
            
            <ScrollArea viewportClassName="max-h-[270px] h-fit border-1 rounded-lg p-3">
                
                <div className='space-y-1'>
                    {brands.map(({ brand, checked }) => (
                        <div key={brand} className='flex items-center space-x-2'>
                            <Checkbox className='cursor-pointer' id={brand} checked={checked} onCheckedChange={(checked) => {
                                setBrands(brands.map(b => b.brand === brand ? { ...b, checked: checked === true } : b));
                            }}/>
                            <Label className='text-base cursor-pointer' htmlFor={brand}>{brand}</Label>
                        </div>
                    ))}
                </div>

            </ScrollArea>
        </section>
    )
}

export default BrandFilter