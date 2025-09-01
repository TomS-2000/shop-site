import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import { SidebarProvider } from '../ui/sidebar'

const Layout = () => {
	
	return (
		<SidebarProvider>
			<section className='flex flex-col gap-5 justify-between h-screen w-screen'>
				<div className='flex flex-col gap-3'>
					<Menu/>
					<main className='px-5'>
					<Outlet/>
					</main>
				</div>
				<Footer/>
			</section>
		</SidebarProvider>
	)
}

export default Layout