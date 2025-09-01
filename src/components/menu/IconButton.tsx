import type { LucideProps } from 'lucide-react';

type IconProps = {
  	IconComponent: React.ComponentType<LucideProps>,
}

const IconButton = ({ IconComponent, ...props }: IconProps & React.ComponentProps<"button">) => {
  	
	return (
      	<button {...props} className='rounded-full p-2 text-black bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-400 shadow dark:shadow-gray-700 cursor-pointer'>
          	<IconComponent/>
      	</button>
  	)
}

export default IconButton