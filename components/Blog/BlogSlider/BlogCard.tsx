import { Badge, badgeVariants } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'
import { Card } from '@/components/ui/card'

type Props = {}

const BlogCard = (props: Props) => {
    return (
        <Card className=''>
            <div className="lg:p-12 p-4 md:w-full flex flex-col items-start">
                <Link href={'/'} className={badgeVariants({ variant: "green" })}>
                    CATEGORY
                </Link>
                <div className='flex flex-row  gap-5'>
                    <div className='flex flex-col lg:w-5/6 w-4/6 '>
                        <h2 className="lg:text-3xl text-lg title-font font-medium text-gray-900 mt-4 mb-4">
                            Roof party normcore before they sold out, cornhole vape
                        </h2>
                        <p className="leading-relaxed mb-8 max-md:text-sm md:block hidden">
                            Live-edge letterpress cliche, salvia fanny pack  humblebrag narwhal portland.
                            VHS man braid palo santo hoodie brunch trust fund. <span className='xl:inline hidden'>Bitters hashtag waistcoatfashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.
                            Cray pug you probably haven't heard of them hexagon kickstarter craft beer 
                            pork chic.</span> <span className='lg:hidden inline'>...</span>
                        </p>
                    </div>
                    <img src="https://images.pexels.com/photos/905248/pexels-photo-905248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='lg:w-1/6 w-2/6  rounded-md object-cover object-center' />
                </div>

                <div className="flex items-center flex-wrap lg:pb-4 pb-2 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    <a className="text-purple-500 inline-flex items-center">
                        Learn More
                        <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx={12} cy={12} r={3} />
                        </svg>
                        1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                    </span>
                </div>
                <a className="inline-flex items-center">
                    <img
                        alt="blog"
                        src="https://dummyimage.com/104x104"
                        className="lg:w-12 lg:h-12 h-6 w-6 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font max-md:text-sm font-medium text-gray-900">
                            Holden Caulfield
                        </span>
                        <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                            UI DEVELOPER
                        </span>
                    </span>
                </a>
            </div>

        </Card>
    )
}

export default BlogCard