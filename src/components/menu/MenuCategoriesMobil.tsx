import { Menu } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarHeader, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import {categories} from '../../stores/categories'

const MenuCategoriesMobil = () => {

    const { toggleSidebar } = useSidebar();

    return (
    <>
        <Menu className='size-7 cursor-pointer' onClick={toggleSidebar}/>
        
        <Sidebar className="h-full flex flex-col w-40">
            <SidebarHeader className="px-4 py-2 border-b">
            Categories
            </SidebarHeader>

            <SidebarContent className="flex-1 overflow-hidden">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {categories.map((category) => (
                            <SidebarMenuItem key={category.category}>
                            <SidebarMenuButton asChild>
                                <Link to={`/category/${category.category.toLowerCase()}`} onClick={toggleSidebar}>
                                <span>{category.category}</span>
                                </Link>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    </>
    )
}

export default MenuCategoriesMobil