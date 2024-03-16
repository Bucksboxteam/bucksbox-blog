"use client"
import { badgeVariants } from '@/components/ui/badge'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
    title: string
}

const CategoryLink = ({ title }: Props) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

    }, [])

    if (!mounted) {
        return
    }

    return (
        <Link href={`/blogs/category/${title}`} className={badgeVariants({ variant: 'light' })}>{title}</Link>
    )
}

export default CategoryLink