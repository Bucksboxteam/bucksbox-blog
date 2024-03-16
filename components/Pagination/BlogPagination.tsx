'use client'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { useState } from "react"

  type Props = {
    blogs_length: number,
    page?: string
  }
   
  export function PaginationDemo({blogs_length, page}:Props) {

    const [pageNumber, setPageNumber] = useState<Number>(1)

    

    const blogs = Array.from({length: blogs_length}, (_, index)=>index + 1)

    
    

    return (
      <Pagination className="my-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/blogs?page=${Number(page)-1}&page_size=3`}/>
          </PaginationItem>
            {
              blogs.map((i)=><PaginationItem onClick={()=>setPageNumber(i)} className={cn(page === i.toString() ? 'bg-gray-100/90' : 'bg-white', 'rounded-md')} key={i}><PaginationLink href={`/blogs/?page=${i}&page_size=3`}>{i}</PaginationLink></PaginationItem>)
            }
            <PaginationItem>
            <PaginationNext href={`/blogs?page=${Number(page)+1}&page_size=3`}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  