import { Menu } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarHeader, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import {mainCategories} from '../../stores/categories'
import { ScrollArea } from '../ui/scroll-area';

const MenuCategoriesMobil = () => {

    const { toggleSidebar } = useSidebar();

    return (
    <>
        <Menu className='size-7 cursor-pointer' onClick={toggleSidebar}/>
        
        <Sidebar className="h-full flex flex-col w-40">
            <ScrollArea className="h-screen">
            <SidebarHeader className="px-4 py-3 border-b">
                <span className='font-bold text-2xl'>Categories</span>
            </SidebarHeader>
            {mainCategories.map(({category, subCategories}) => (
            <div key={category}>
            <SidebarHeader className="px-4 py-1 border-b border-t">
                <span className='text-lg font-bold'>{category}</span>
            </SidebarHeader>

            <SidebarContent className="flex-1 overflow-hidden">
                <SidebarGroup>
                    <SidebarGroupContent> 
                        <SidebarMenu>

                        {subCategories.map((subCategory) => (
                            <SidebarMenuItem key={subCategory.category}>
                            <SidebarMenuButton asChild>
                                <Link to={`/shop-site/category/${subCategory.category.toLowerCase()}`} onClick={toggleSidebar}>
                                <span>{subCategory.category}</span>
                                </Link>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            </div>
            ))}
            </ScrollArea>
        </Sidebar>
    </>
    )
}

export default MenuCategoriesMobil