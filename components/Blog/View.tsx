import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

type Props = {
    category_name: string,
    url: string
}

const View = ({url, category_name}: Props) => {
  return (
    <div className='flex justify-between items-center  w-full text-gray-800'>
        <p className='text-4xl font-bold '>{category_name}</p>
        <Link  className='text-purple-400 text-xl flex group' href={url}>View All <span className='group-hover:scale-125 transition-transform ease-out'><ArrowUpRight/></span></Link>
    </div>
  )
}

export default View