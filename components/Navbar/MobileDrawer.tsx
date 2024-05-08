import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, BookOpenIcon, CreditCardIcon, ShieldCheckIcon, ShoppingCartIcon, NewspaperIcon  } from 'lucide-react'

type Props = {
    path_name: string
}

const MobileDrawer = ({ path_name }: Props) => {
    return (
        <Drawer direction='left' >
            <DrawerTrigger>
                <Menu />
            </DrawerTrigger>
            <DrawerContent className='h-full md:w-[80%] w-[90%] rounded-none '>
                <ul className="w-full flex flex-col mx-5 gap-7 mt-20">
                    <Link href={'/blogs'} className="text-md  text-gray-700 font-semibold cursor-pointer group">
                        <DrawerClose className={cn(path_name === "blogs" && 'text-purple-500', 'flex gap-5')}><span><BookOpenIcon/></span>Blogs</DrawerClose>

                    </Link>
                    <Link href={'/blogs/category/Policy'} className="text-md w-full text-gray-700 font-semibold group cursor-pointer">
                        <DrawerClose className={cn(path_name === "Policy" && 'text-purple-500', 'flex gap-5')}><span><ShieldCheckIcon/></span>Policy</DrawerClose>

                    </Link>
                    <Link href={'/blogs/category/Commerce'} className="text-md text-gray-700 font-semibold group cursor-pointer">
                        <DrawerClose className={cn(path_name === "Commerce" && 'text-purple-500', 'flex gap-5')}><span><ShoppingCartIcon/></span>Commerce</DrawerClose>

                    </Link>
                    <Link href={'/blogs/category/Payments'} className="text-md text-gray-700 font-semibold group cursor-pointer">
                        <DrawerClose className={cn(path_name === "Payments" && 'text-purple-500', 'flex gap-5')}><span><CreditCardIcon/></span>Payments</DrawerClose>

                    </Link>
                    <Link href={'/blogs/category/News'} className="text-md text-gray-700 font-semibold group cursor-pointer">
                        <DrawerClose className={cn(path_name === "News" && 'text-purple-500', 'flex gap-5')}><span><NewspaperIcon/></span>News</DrawerClose>

                    </Link>

                </ul>
               
                <DrawerFooter>
                    
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileDrawer