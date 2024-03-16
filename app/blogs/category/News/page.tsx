
import React from 'react'
import { category_metadata } from '../layout'
import { Metadata } from 'next'
import { getBlogsByCategory } from '@/lib/blogs'
import BlogCard1 from '@/components/Blog/BlogCard1'
import CategoryHeader from '@/components/Blog/BlogCategory/CategoryHeader'
import { PaginationDemo } from '@/components/Pagination/BlogPagination'


export const metadata: Metadata = {
    title: 'News',
    description: 'Payments page description',
}

type Props = {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
const page = async ({ params }: Props) => {
    const category = await getBlogsByCategory('4')

    const blogs = category.data.attributes.blogs?.data

    console.log(blogs, 'news');


    if (blogs && blogs.length < 1) {
        return <>
            <CategoryHeader title='News' />

            <p>No blogs</p>
        </>

    }

    return (
        <div>
            <CategoryHeader title='News' />
            <div className='lg:w-[60%] w-[95%] mx-auto my-10'>
                <section className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='lg:col-span-2 '>
                        {blogs && <BlogCard1 title={blogs[0]?.attributes.title} show_desc={true} image={blogs[0].attributes.image?.data[0].attributes.formats?.large?.url} id={blogs[0].id} key={blogs[0]?.id} shortdescription={blogs[0].attributes.shortdescription} />}
                    </div>
                    {
                        blogs && blogs?.slice(1).map(b => <BlogCard1 key={b.id} show_desc={true} id={b.id} title={b.attributes.title} image={b.attributes.image?.data[0].attributes.formats?.large?.url} shortdescription={b.attributes.shortdescription} />)
                    }

                </section>

                <PaginationDemo blogs_length={ blogs ? blogs?.length : 1} />
            </div>
        </div>
    )
}

export default page