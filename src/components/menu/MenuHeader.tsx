import { ShoppingCart, User, Search, SquareX } from 'lucide-react'
import IconButton from './IconButton'
import logo from '../../assets/logo_transparent.png'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../ui/input'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import MenuCategoriesMobil from './MenuCategoriesMobil'
import MenuCategories from './MenuCategories'
import { useCartStore } from '@/stores/cartStore'

const MenuHeader = () => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const searchInputRef = useRef<HTMLInputElement>(null);
    const cartCount = useCartStore(state => state.getCartCount());

    const handleSearch = () => {
        if(showSearch && searchQuery.trim()) {
            navigate(`/shop-site/search/${searchQuery}`);
        }

        setShowSearch(prev => !prev);
    }

    const removeSearch = () => {
        setSearchQuery('');
        setShowSearch(false);
    }

    const submitSearch = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(searchQuery.trim() && e.key === 'Enter') {
            navigate(`/shop-site/search/${searchQuery}`);
        }
    }

    useEffect(() => {
        if(showSearch && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [showSearch]);

    return (
    <div className='flex gap-2 justify-between items-center'>
        <div className='flex gap-3 items-center'>
            <div className='md:hidden'>
                <MenuCategoriesMobil/>
            </div>
            
            <Link to='/'><img src={logo} className='min-w-10 min-h-10 w-10 h-10 scale-150'></img></Link>
            
            <div className='relative flex gap-2 items-center'>
                <Search className='size-9 cursor-pointer rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700/90 p-1' onClick={handleSearch}/>
                <AnimatePresence>
                    {showSearch && 
                        <motion.div className='absolute z-1 top-11 w-50 flex items-center gap-2 bg-neutral-200/90 dark:bg-neutral-700/90 p-1 px-2 rounded-lg' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                            <Input ref={searchInputRef} 
                            value={searchQuery} 
                            type='text' 
                            placeholder='Search Products' 
                            className='bg-white dark:bg-neutral-800' 
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => submitSearch(e)}/>
                            <SquareX className='size-10 cursor-pointer hover:text-neutral-300' onClick={removeSearch}/>
                        </motion.div>}
                </AnimatePresence>
            </div>
        </div>

        <div className='max-md:hidden'>
            <MenuCategories/>
        </div>

        <div className='flex gap-3'>
            <IconButton IconComponent={User}/>
            
            <div className='relative'>
                <div className='absolute -top-1.5 -right-1.5'>
                    {cartCount > 0 && <span className='bg-red-500 text-white text-xs font-bold px-1 rounded-full'>{cartCount}</span>}
                </div>
                <IconButton IconComponent={ShoppingCart} onClick={() => navigate('/cart')}/>
            </div>
        </div>
        
    </div>
    )
}

export default MenuHeader