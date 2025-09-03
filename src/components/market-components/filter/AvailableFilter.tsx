import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"
import { FilterContext } from "@/context/filterContext";
import { useContext } from "react";


const AvailableFilter = () => {

    const { available, setAvailable } = useContext(FilterContext);

    return (
        <section className="flex flex-col gap-2">
            <h5 className='text-lg font-bold'>Available</h5>
        
            <div className="flex gap-2 items-center">
                <Checkbox id="in-stock" value="In Stock" className="cursor-pointer" checked={available} onCheckedChange={() => setAvailable(!available)}/>
                <Label htmlFor="in-stock" className="cursor-pointer text-base">In Stock</Label>
            </div>
            
        </section>
    )
}

export default AvailableFilter