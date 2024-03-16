import React from 'react'

type Props = {
    title: string
}

const CategoryHeader = ({title}: Props) => {
  return (
    <div className='w-full py-10 bg-gray-100/70 space-y-4 text-center'>
            <h3 className='text-xl font-bold text-purple-700'>Category</h3>
            <p className='text-2xl font-semibold'>{title}</p>
    </div>
  )
}

export default CategoryHeader