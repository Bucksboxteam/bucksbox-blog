import React from 'react'
import {
    Carousel, CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel'
import RecentBlog from './RecentBlog'

type Props = {}

const RecentBlogCarousel = (props: Props) => {
    return (
        <div className=''>

            <div className='space-y-4 p-3'>
                <h3 className='text-5xl font-extrabold text-gray-800 '>Recent Posts</h3>
                <p className='text-gray-500 '>Explore the latest finance trends and foster growth</p>
            </div>    
            <Carousel opts={{ loop: true }} className='  p-0 '>
                <CarouselContent className='mx-auto flex justify-between  p-0 '>
                    <CarouselItem className='p-3 md:basis-1/2 lg:basis-1/3  '>
                        <RecentBlog />
                    </CarouselItem>
                    <CarouselItem className='p-3 md:basis-1/2 lg:basis-1/3'>
                        <RecentBlog />
                    </CarouselItem>
                    <CarouselItem className='p-3 md:basis-1/2 lg:basis-1/3'>
                        <RecentBlog />
                    </CarouselItem>
                    <CarouselItem className='p-3 md:basis-1/2 lg:basis-1/3'>
                        <RecentBlog />
                    </CarouselItem>
                    <CarouselItem className='p-3 md:basis-1/2 lg:basis-1/3'>
                        <RecentBlog />
                    </CarouselItem>
                    <CarouselItem className='p-3 md:basis-1/2 lg:basis-1/3'>
                        <RecentBlog />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default RecentBlogCarousel