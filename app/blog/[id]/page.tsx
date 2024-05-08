import { getBlogById } from '@/lib/blogs'
import React from 'react'
import { Metadata } from 'next'
import BlogBody from '@/components/Blog/BlogBody'
import ReactMarkdown from 'react-markdown'
import sanitizeHtml from 'isomorphic-dompurify';
import ReactHtmlParser from 'react-html-parser'

type Props = {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const page = async ({ params, searchParams }: Props) => {

    const blog = await getBlogById(params.id)

    

    if (blog) {
        blog.data.attributes.blog_body = blog.data.attributes.blog_body!.replace(/<figure class="media"><oembed url="([^"]+)"><\/oembed><\/figure>/g, function (match, url) {
            // Extract video ID from the oEmbed URL
            var videoId = url.match(/(?:\?|&)v=([^&]+)/)[1];
            // Construct the <iframe> code for embedding the video
            return `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        </div>`;
        });
    }


    return (
        <div className=' md:prose-xl prose-lg  xl:w-[50%] lg:w-[85%] w-[95%] mx-auto  space-y-7 my-10 flex flex-col '>
            <img className='object-cover object-center w-full' src={blog.data.attributes.image?.data[0].attributes.formats?.large?.url} alt="" />
            <h1 className='text-gray-900 font-bold text-4xl'>
                {blog.data.attributes.title}
            </h1>
            <p className='text-xl text-gray-700'>{blog.data.attributes.shortdescription}</p>

            {/* <ReactMarkdown className={'prose'}  children={blog.data.attributes.blog_body}/> */}

            <div className=''>
                {ReactHtmlParser(blog.data.attributes.blog_body!)}
            </div>
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