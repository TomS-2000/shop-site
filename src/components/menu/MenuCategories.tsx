import CategoryButton from './CategoryButton'
import {categories} from '../../stores/categories'

const MenuCategories = () => {
    

    return (
        <div className='flex justify-center flex-wrap'>
            {categories.map(category => (
                <CategoryButton key={category.category} title={category.category} />
            ))}
        </div>
  )
}

export default MenuCategories