import axios from 'axios'
import { Blog, Category, Image, Meta } from './types'

type CompleteBlog = Blog & Category & Image

type getBlogs = {
    data:Blog[]
    meta?: Meta
}

type getBlog = {
    data:Blog & Category & Image
}

type getBlogsByCategory = {
    data: Category & Blog
}

export const getBlogs = async(pageSize?:string, page?:string):Promise<getBlogs>=>{

    
    
    const blogs = (await axios.get(`https://cms.bucksbox.in/api/blogs?populate=image,blog_categories&pagination[pageSize]=${pageSize ? pageSize : 25}&pagination[page]=${page ? page : 1}`)).data

    return blogs

} 


export const getBlogsByCategory = async(category_id:string):Promise<{data:Category}>=>{
    const blogs = (await axios.get(`https://cms.bucksbox.in/api/blog-categories/${category_id}?populate=blogs,blogs.image,blogs.blog_categories`)).data
    return blogs
}

export const getBlogById = async(blog_id: string):Promise<getBlog>=>{
    const blog = (await axios.get(`https://cms.bucksbox.in/api/blogs/${blog_id}?populate=blog_categories,image`)).data

    return blog

}