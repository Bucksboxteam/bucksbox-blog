import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, Carousel } from '@/components/ui/carousel'

import React from 'react'
import BlogHeaderCard from './BlogHeaderCard'
import BlogCard from './BlogCard'
import BlogCard2 from '../BlogCard2'

type Props = {}

const BlogGrid = (props: Props) => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1  gap-5'>
            <div className='md:col-span-2 col-span-1'>
                <BlogCard2 />
            </div>
            <div className=''>
                <BlogCard2 />
            </div>
            <div>
                <BlogCard2 />
            </div>
        </div>
    )
}

export default BlogGrid