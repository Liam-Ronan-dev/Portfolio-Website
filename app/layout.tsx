//Commonly used in Next.js for defining metadata info - eg title & desc
import type { Metadata } from 'next'

//Importing custom font from google
import { Inter } from 'next/font/google'

//Importing CSS
import './globals.css'
import StarsCanvas from '@/Components/Main/StarBackground'
import Navbar from '@/Components/Main/Navbar'



//Using subset Latin
const inter = Inter({ subsets: ['latin'] })

//Likely to be used for SEO
export const metadata: Metadata = {
  title: 'Liam Ronan Portfolio',
  description: 'My Portfolio',
}

/* Basic layout for entire app,
{children} prop is used to render content that will be passed into the this layout component */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
