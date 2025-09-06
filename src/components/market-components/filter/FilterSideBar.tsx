import AvailableFilter from "./AvailableFilter"
import BrandFilter from "./BrandFilter"
import DeselectFilter from "./DeselectFilter"
import PriceFilter from "./PriceFilter"
import RatingFilter from "./RatingFilter"

const FilterSideBar = () => {
    return (
        <section className="max-md:hidden h-fit">
            <div className="space-y-4">
                <DeselectFilter/>
                <PriceFilter/>
                <RatingFilter/>
                <BrandFilter/>
                <AvailableFilter/>
            </div>
            
        </section>
    )
}

export default FilterSideBar