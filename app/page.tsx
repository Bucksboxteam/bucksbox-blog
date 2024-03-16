import BrowseCategory from "@/components/Blog/BlogCategory/BrowseCategory";
import CategoryGrid from "@/components/Blog/BlogCategory/CategoryGrid";
import BlogCard from "@/components/Blog/BlogSlider/BlogCard";
import BlogGrid from "@/components/Blog/BlogSlider/BlogSlider";
import BlogSlider from "@/components/Blog/BlogSlider/BlogSlider";
import Grid from "@/components/Blog/Grid";
import RecentBlog from "@/components/Blog/RecentBlog";
import RecentBlogCarousel from "@/components/Blog/RecentBlogCarousel";
import NewsLetter from "@/components/NewsLetter.tsx/NewsLetter";
import { getBlogs } from "@/lib/blogs";
import { Blog } from "@/lib/types";

export default async function Home() {

  const blogs = await getBlogs()

  console.log(blogs);
  

  return (
    <main className="">
      <div className="w-[65%] mx-auto flex flex-col space-y-32">
        
        <BrowseCategory blogs={blogs.data}/>
        <CategoryGrid category_id="2" title="Payments"/>
        <CategoryGrid category_id="5" title="Commerce"/>
        <RecentBlogCarousel/>
        <NewsLetter/>
      </div>
    </main>
  );
}
