import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Footer = () => {
	return (
		<footer className='bg-stone-200 dark:bg-stone-800 px-3'>
			<Link to="/about"><Button variant='link'>About</Button></Link>
			<Link to="/contact"><Button variant='link'>Contact</Button></Link>
		</footer>
	)
}

export default Footer