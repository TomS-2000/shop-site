import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const CategoryButton = ({title, ...props} : {title: string} & React.ComponentProps<"button">) => {
  return (
    <Link to={`/category/${title.toLowerCase()}`}>
      <Button {...props} variant='ghost' className='hover:bg-neutral-200/90 dark:hover:bg-neutral-700/90 cursor-pointer font-bold text-lg'>{title}</Button>
    </Link>
  )
}

export default CategoryButton