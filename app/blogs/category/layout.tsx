import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const category_metadata: Metadata = {
  title: "Blogs",
  description: "Generated by create next app",
};

export default async function CategoryLayout({
  children, params, searchParams
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}>) {
  return (
    <>
    
    
    {children}
    </>
  );
}
