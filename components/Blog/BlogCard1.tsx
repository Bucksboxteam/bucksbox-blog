import React from 'react'
import { Card } from '../ui/card'
import { badgeVariants } from '../ui/badge'
import Link from 'next/link'
import CategoryLink from './BlogCategory/CategoryLink'
import { Category } from '@/lib/types'

type Props = {
    id?: number
    title?: string,
    image?: string,
    // description?:string | null,
    shortdescription?:string
    // createdAt:string
    show_desc: boolean
    categories?: Category[]
}

const BlogCard1 = ({title, shortdescription, image, id, show_desc, categories}: Props) => {
    console.log('Categories', categories);
    
    return (
        <Link href={`/blog/${id}`} className='group border-none flex flex-col space-y-5  w-full'>
            <div className='mb-6 overflow-hidden transition-all group-hover:scale-[101%]'>
                <div >
                    <img src={image} className='w-full h-full object-cover object-center' alt="" />
                </div>
            </div>
            <h3 className='text-xl font-bold'>
                <div >
                    <span className='bg-gradient-to-r from-purple-400/50 to-purple-500/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>{title}</span>
                </div>
            </h3>

            <p>{show_desc && ((shortdescription && shortdescription?.length > 130) ? shortdescription?.substring(0, 130)+'...' : shortdescription)}</p>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2.5'>
                    <p>By, James</p>
                    <span className='flex w-[3px] h-[3px] rounded-full bg-gray-600'></span>
                    <p className='text-sm'>Sep 10, 2025</p>
                </div>
                {/* <Link href={'/'} className={badgeVariants({variant:'light'})}>Travel</Link> */}
                { categories && <CategoryLink title={categories[0].attributes.title}/>}
            </div>
        </Link>

    )
}

export default BlogCard1