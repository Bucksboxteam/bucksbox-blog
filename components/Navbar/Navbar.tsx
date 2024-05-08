"use client"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useRouter } from "next/router"
import { cn } from "@/lib/utils"
import MobileDrawer from "./MobileDrawer"
type Props = {}

const Navbar = (props: Props) => {

    const url = useParams()
    const path_arr = usePathname().split('/')
    const path_name = path_arr[path_arr.length - 1]


    return (
        <section>
            <nav className="border-t-2 border-b-2 flex items-center justify-around px-4 py-4  ">
                <Link href={'/'} className="flex items-center ">
                    <img src="./b.png" alt="Logo" className="w-8 space-x-5" />
                    <p className="uppercase text-2xl font-bold mt-1">Bucksbox</p>
                    <p className="text-[10px] p-[2px] uppercase bg-purple-500 text-white ml-2 mt-5 px-5 ">BLOG</p>
                </Link>

                {/* <Menubar className="py-4">
                        <MenubarMenu>
                            <MenubarTrigger>Home</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Blogs</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>Finance</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem>Business</MenubarItem>
                                <MenubarSeparator/>
                                <MenubarItem>Commerce</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>Categories</MenubarTrigger>
                        </MenubarMenu>
                    </Menubar> */}



                <div className="space-x-5 flex ">
                    <ul className="md:flex hidden items-center space-x-7 mr-7 ">
                        <Link href={'/blogs'} className="text-md text-gray-700 font-semibold cursor-pointer group">
                            <p className={cn(path_name === "blogs"  && 'text-purple-500')}>Blogs</p>
                            <hr className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600" />
                        </Link>
                        <Link href={'/blogs/category/Policy'} className="text-md text-gray-700 font-semibold group cursor-pointer">
                            <p className={cn(path_name === "Policy" && 'text-purple-500')}>Policy</p>
                            <hr className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600" />
                        </Link>
                        <Link href={'/blogs/category/Commerce'} className="text-md text-gray-700 font-semibold group cursor-pointer">
                            <p className={cn(path_name === "Commerce" && 'text-purple-500')}>Commerce</p>
                            <hr className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600" />
                        </Link>
                        <Link href={'/blogs/category/Payments'} className="text-md text-gray-700 font-semibold group cursor-pointer">
                            <p className={cn(path_name === "Payments" && 'text-purple-500')}>Payments</p>
                            <hr className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600" />
                        </Link>
                        <Link href={'/blogs/category/News'} className="text-md text-gray-700 font-semibold group cursor-pointer">
                            <p className={cn(path_name === "News" && 'text-purple-500')}>News</p>
                            <hr className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600" />
                        </Link>
                        
                    </ul>
                    <div className="md:hidden block">
                        <MobileDrawer path_name={path_name}/>
                    </div>

                </div>
            </nav>
        </section>
    )
}

export default Navbar