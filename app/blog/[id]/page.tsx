import { getBlogById } from '@/lib/blogs'
import React from 'react'
import { Metadata } from 'next'
import BlogBody from '@/components/Blog/BlogBody'

let metadata: Metadata = {
    title: '',
    description: '',
}

type Props = {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const page = async({params, searchParams}:Props) => {

    const blog = await getBlogById(params.id)

    metadata.title = blog.data.attributes.title

    console.log(blog, 'blog');
    

    return (
        <div className='lg:w-[60%] w-[95%] mx-auto  space-y-7 my-10'>
            <img className='object-cover object-center w-full' src={blog.data.attributes.image?.data[0].attributes.formats?.large?.url} alt="" />
            <h1 className='text-gray-900 font-bold text-4xl'>
                {blog.data.attributes.title}
                
            </h1>
            <p className='text-lg text-gray-700'>{blog.data.attributes.shortdescription}</p>
                    <BlogBody/>
            
        </div>
    )
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const blog = await getBlogById(params.id)

    return {
        title: blog.data.attributes.title,
        description: blog.data.attributes.shortdescription,
    }
}

export default page