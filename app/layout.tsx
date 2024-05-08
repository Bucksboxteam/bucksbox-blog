import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["900", "700", "500", "100", "300"]});

export const metadata: Metadata = {
  title: "Bucksbox Blogs",
  description: "Read our blogs to get latest updates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>

        <Navbar/>
        <div>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
