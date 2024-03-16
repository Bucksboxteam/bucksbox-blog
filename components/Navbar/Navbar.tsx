import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"
type Props = {}

const Navbar = (props: Props) => {
  return (
    <section>
            <nav className="border-t-2 border-b-2 flex items-center justify-between p-4  ">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Logo"/>
                        <AvatarFallback>BB</AvatarFallback>
                    </Avatar>

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
                    <ul className="flex items-center space-x-7 mr-7">
                        <Link href={'/blogs'} className="text-sm text-gray-600 cursor-pointer group">
                            <p>Blogs</p>
                            <hr  className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600"/>    
                        </Link>
                        <Link href={'/blogs/category/Policy'} className="text-sm text-gray-600 group cursor-pointer">
                            <p>Policy</p>
                            <hr  className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600"/> 
                        </Link>
                        <Link href={'/blogs/category/Commerce'} className="text-sm text-gray-600 group cursor-pointer">
                            <p>Commerce</p>
                            <hr  className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600"/> 
                        </Link>
                        <Link href={'/blogs/category/Payments'} className="text-sm text-gray-600 group cursor-pointer">
                            <p>Payments</p>
                            <hr  className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600"/> 
                        </Link>
                        <Link href={'/blogs/category/News'} className="text-sm text-gray-600 group cursor-pointer">
                            <p>News</p>
                            <hr  className="block group-hover:scale-x-100 scale-x-0 transition-transform ease-linear w-full border-[1px] border-purple-600"/> 
                        </Link>
                    </ul>
                       
                    </div>
            </nav>
    </section>
  )
}

export default Navbar