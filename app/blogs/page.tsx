import BlogCard1 from '@/components/Blog/BlogCard1'
import CategoryHeader from '@/components/Blog/BlogCategory/CategoryHeader'
import { PaginationDemo } from '@/components/Pagination/BlogPagination'
import { getBlogs } from '@/lib/blogs'
import React from 'react'


const arr = Array(9)

type Props = {
  params: { [key: string]: string }
  searchParams: { page:string, page_size: string }
}

const page = async({params, searchParams}: Props) => {

  console.log(params, 'params');
  console.log(searchParams, 'searchParams');
  

  const data =  (await getBlogs(searchParams.page_size || '3', searchParams.page || '1'))
console.log(data) ;

  const blogs = data.data



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

            <PaginationDemo blogs_length={blogs ? Math.floor((data?.meta?.pagination.total!)/3) : 1} page={searchParams.page}/>
        </div>
    </div>
)
}

export default page