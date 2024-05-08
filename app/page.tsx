import BrowseCategory from "@/components/Blog/BlogCategory/BrowseCategory";
import CategoryGrid from "@/components/Blog/BlogCategory/CategoryGrid";
import RecentBlogCarousel from "@/components/Blog/RecentBlogCarousel";
import NewsLetter from "@/components/NewsLetter.tsx/NewsLetter";
import { getBlogs } from "@/lib/blogs";

export default async function Home() {

  const blogs = await getBlogs()

  console.log(blogs);
  

  return (
    <main className="">
      <div className="lg:w-[65%] w-[90%] mx-auto flex flex-col space-y-32">
        
        <BrowseCategory blogs={blogs.data}/>
        <CategoryGrid category_id="2" title="Payments"/>
        <CategoryGrid category_id="1" title="Commerce"/>
        <NewsLetter/>
      </div>
    </main>
  );
}
