import React from 'react'
import BlogCard1 from './BlogCard1'

type Props = {
    children:React.ReactNode
}

const Grid = ({children}: Props) => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 '>
            {children}
    </div>
  )
}

export default Grid