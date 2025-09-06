import CategoryButton from './CategoryButton'
import {mainCategories} from '../../stores/categories'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const MenuCategories = () => {

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        if (activeCategory === category) {
            setActiveCategory(null);
        } else {
            setActiveCategory(category);
        }
    }

    return (
        <div className='flex justify-center flex-wrap'>
            {mainCategories.map(({category, subCategories}) => (

                <motion.div key={category} onHoverStart={() => setActiveCategory(category)} onHoverEnd={() => setActiveCategory(null)} className='relative' >

                    {subCategories.length >= 2 && (
                        <>
                            <div className={activeCategory === category ? 'bg-neutral-200 dark:bg-neutral-700 rounded-t-lg ring-2' : ''}>
                                <Button variant='ghost' className=' hover:bg-neutral-200/90 dark:hover:bg-neutral-700/90 cursor-pointer font-bold text-lg' 
                                    onClick={() => handleCategoryClick(category)}>{category}
                                </Button>
                            </div>

                            {activeCategory === category && (
                                <div className="absolute top-9 p-2 bg-neutral-200 dark:bg-neutral-700 rounded-b-lg rounded-tr-lg shadow-lg z-10 ring-2">
                                    {subCategories.map((subCategory) => (
                                        <CategoryButton onClick={() => setActiveCategory(null)}
                                            key={subCategory.category}
                                            title={subCategory.category}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {subCategories.length === 1 &&
                        <Link to={`/category/${subCategories[0].category.toLowerCase()}`} onClick={() => setActiveCategory(null)}>
                            <Button variant='ghost' className='hover:bg-neutral-200/90 dark:hover:bg-neutral-700/90 cursor-pointer font-bold text-lg'>{category}</Button>
                        </Link>
                    }
                </motion.div>
            ))}
        </div>
  )
}

export default MenuCategories