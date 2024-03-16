import { Button } from '@/components/ui/button'
import React from 'react'
import Grid from '../Grid'
import BlogCard1 from '../BlogCard1'
import { Blog } from '@/lib/types'

type Props = {
  blogs: Blog[]
}

const BrowseCategory = ({ blogs }: Props) => {
  return (
    <div className=' flex flex-col items-center space-y-10 mt-20'>
      <div className='space-y-5'>
        <h1 className='text-5xl font-extrabold text-gray-800 text-center'>Bucksbox Blogs</h1>
        <p className='text-gray-500 text-center'>Get the latest update</p>
      </div>

      <div>
        {/* <ul className='flex items-center justify-center gap-5 flex-wrap'>
                    <Button className='rounded-full hover:bg-gray-800/90 hover:text-white focus:bg-black focus:text-white' variant={'secondary'}>Tech</Button>
                    <Button className='rounded-full hover:bg-gray-800/90 hover:text-white focus:bg-black focus:text-white' variant={'secondary'}>Finance</Button>
                    <Button className='rounded-full hover:bg-gray-800/90 hover:text-white focus:bg-black focus:text-white' variant={'secondary'}>Business</Button>
                    <Button className='rounded-full hover:bg-gray-800/90 hover:text-white focus:bg-black focus:text-white' variant={'secondary'}>Bank</Button>
                    <Button className='rounded-full hover:bg-gray-800/90 hover:text-white focus:bg-black focus:text-white' variant={'secondary'}>Payments</Button>
            </ul> */}
      </div>

      <Grid>
        {
          blogs.map(b => <BlogCard1 categories={b.attributes.blog_categories?.data} show_desc={true} key={b.id} id={b.id} title={b.attributes.title} shortdescription={b.attributes.shortdescription} image={b.attributes.image?.data[0].attributes.formats?.large?.url} />)
        }
        {/* <BlogCard1 />
        <BlogCard1 />
        <BlogCard1 />
        <BlogCard1 />
        <BlogCard1 />
        <BlogCard1 /> */}
      </Grid>

      <Button variant={'outline'} className='text-gray-800 border-gray-800' size={'xl'} >Browser All Posts</Button>
    </div>

  )
}

export default BrowseCategory