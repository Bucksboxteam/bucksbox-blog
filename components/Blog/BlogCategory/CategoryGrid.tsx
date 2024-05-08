import React from 'react'
import BlogCard1 from '../BlogCard1'
import Link from 'next/link'
import { getBlogsByCategory } from '@/lib/blogs'
import View from '../View'

type Props = {
  category_id: string
  title: string
}

const CategoryGrid = async({category_id, title}: Props) => {

  const blogs = (await getBlogsByCategory(category_id)).data.attributes.blogs?.data

  return (
    <section className='space-y-7'>
      <View category_name={title} url={`/blogs/category/${title}`}/>
      <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7'>
        <div className='xl:col-span-2 col-span-1 xl:row-span-2 row-span-1 '>
          {(blogs && blogs.length > 0) && <BlogCard1 categories={blogs[0].attributes.blog_categories?.data} key={blogs[0].id} id={blogs[0].id} title={blogs[0].attributes.title} shortdescription={blogs[0].attributes.shortdescription} image={blogs[0].attributes.image?.data?.[0].attributes.formats?.large?.url} show_desc={true}/>}
        </div>
        {
          blogs && blogs.slice(1, 5).map(b=><BlogCard1 key={b.id} id={b.id} categories={b.attributes.blog_categories?.data} title={b.attributes.title} shortdescription={b.attributes.shortdescription} image={b.attributes.image?.data[0].attributes.formats?.large?.url} show_desc={false}/>)
        }
      </div>
    </section>
  )
}

export default CategoryGrid