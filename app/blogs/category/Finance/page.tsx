import React from 'react'
import { Metadata } from 'next'
import { getBlogsByCategory } from '@/lib/blogs'

export const metadata: Metadata = {
    title: 'Finance',
    description: 'Payments page description',
}

type Props = {
    params: { [key: string]: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


const page = async({ params, searchParams }: Props) => {

    const category = await getBlogsByCategory('5')

    const blogs = category.data.attributes.blogs?.data

    if(!blogs){
        return <p>No blogs</p> 
    }

    return (
        <div>Finance</div>
    )
}

export default page