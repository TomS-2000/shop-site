import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FilterContext } from "@/context/filterContext";
import { useContext } from "react";
import { ArrowDownWideNarrow, ArrowUpNarrowWide} from 'lucide-react';

const PriceFilter = () => {

    const { minPrice, maxPrice, priceOrder, setMinPrice, setMaxPrice, setPriceOrder } = useContext(FilterContext);

    const setOrder = (order: 'asc' | 'desc') => {
        if(priceOrder === order) {
            setPriceOrder(null);
        } else {
            setPriceOrder(order);
        }
    };

    return (
        <section className="grid gap-2">
            
            <h5 className="text-lg font-bold">Price</h5>
            <div className="space-y-2">

                <Label htmlFor="min">min</Label>
                <Input id="min" type="number" placeholder="min" value={minPrice ?? ''} onChange={(e) => setMinPrice(Number(e.target.value) || null)}/>

                <Label htmlFor="max">max</Label>
                <Input id="max" type="number" placeholder="max" value={maxPrice ?? ''} onChange={(e) => setMaxPrice(Number(e.target.value) || null)}/>
 
                <div className="flex items-center gap-4">
                    <p className="text-base font-bold">Order</p>
                    <Button variant="outline" title="Sort Ascending" className={`cursor-pointer ${priceOrder === 'asc' ? 'bg-accent dark:bg-input/50' : ''}`} onClick={() => setOrder('asc')}>
                        <ArrowUpNarrowWide  />
                    </Button>
                    <Button variant="outline" title="Sort Descending" className={`cursor-pointer ${priceOrder === 'desc' ? 'bg-accent dark:bg-input/50' : ''}`} onClick={() => setOrder('desc')}>
                        <ArrowDownWideNarrow />
                    </Button>
                </div>

            </div>
            
        </section>
    )
}

export default PriceFilter