import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const CategoryButton = ({title, ...props} : {title: string} & React.ComponentProps<"button">) => {
  	
	return (
		<Link to={`/shop-site/category/${title.toLowerCase()}`}>
			<Button {...props} variant='link' className='hover:bg-neutral-50/90 dark:hover:bg-neutral-800/90 cursor-pointer font-bold text-base'>{title}</Button>
		</Link>
  	)
}

export default CategoryButton