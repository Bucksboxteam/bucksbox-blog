import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  body: string | null
}

const BlogBody = ({body}: Props) => {
  return (
    <div className='prose'>
        <ReactMarkdown children={body}/>
    </div>
  )
}

export default BlogBody