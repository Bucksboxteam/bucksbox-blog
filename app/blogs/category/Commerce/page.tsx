import React from 'react'
import { Metadata } from 'next'
import BlogCard1 from '@/components/Blog/BlogCard1'
import { PaginationDemo } from '@/components/Pagination/BlogPagination'
import { getBlogsByCategory } from '@/lib/blogs'
import CategoryHeader from '@/components/Blog/BlogCategory/CategoryHeader'

export const metadata: Metadata = {
    title: 'Commerce',
    description: 'Payments page description',
}

type Props = {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const page = async ({ params, searchParams }: Props) => {

    const category = await getBlogsByCategory('5')
    console.log(category, 'commerce');

    const blogs = category.data.attributes.blogs?.data

    console.log(blogs, 'Category Blogs');

    if(blogs && blogs.length < 1){
        return <p>No Blogs</p>
    }


    return (
        <div>
            <CategoryHeader title='Commerce' />
            <div className='w-[65%] mx-auto my-10'>
                <section className='grid grid-cols-2 gap-10'>
                    <div className='col-span-2'>
                        {blogs && <BlogCard1 categories={blogs[0].attributes.blog_categories?.data} show_desc={true} title={blogs[0]?.attributes.title} image={blogs[0].attributes.image?.data[0].attributes.formats?.large?.url} id={blogs[0].id} key={blogs[0]?.id} shortdescription={blogs[0].attributes.shortdescription} />}
                    </div>
                    {
                        blogs && blogs?.slice(1).map(b => <BlogCard1 categories={b.attributes.blog_categories?.data} show_desc={true} key={b.id} id={b.id} title={b.attributes.title} image={b.attributes.image?.data[0].attributes.formats?.large?.url} shortdescription={b.attributes.shortdescription} />)
                    }

                </section>

                <PaginationDemo blogs_length={blogs ? Math.floor((blogs.length-1)/2) : 1}/>
            </div>
        </div>
    )
}

export default page