import { Button } from '@/components/ui/button'
import { FilterContext } from '@/context/FilterContext';
import { FunnelX } from 'lucide-react';
import { useContext } from 'react';

const DeselectFilter = () => {

    const {setPriceOrder, setBrands, brands, setMinPrice, setMaxPrice, setRatings, setAvailable} = useContext(FilterContext);

    const handleDeselect = () => {
        setPriceOrder(null);
        setBrands(brands.map(b => ({...b, checked: false})));
        setMinPrice(null);
        setMaxPrice(null);
        setRatings(null);
        setAvailable(false);
    };

    return (
        <Button variant="outline" title='Deselect All Filters' className='w-fit' onClick={handleDeselect}>
            <FunnelX className='size-5' />
        </Button>
    )
}

export default DeselectFilter