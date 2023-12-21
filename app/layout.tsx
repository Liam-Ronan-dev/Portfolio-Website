//Commonly used in Next.js for defining metadata info - eg title & desc
import type { Metadata } from 'next'

//Importing custom font from google
import { Roboto } from 'next/font/google'

//Importing CSS
import './globals.css'
import StarsCanvas from '@/Components/Main/StarBackground'
import Navbar from '@/Components/Main/Navbar'
import Footer from '@/Components/Main/Footer'

//Using subset Latin & weight
const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

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
      <body className={`${roboto.className} bg-[#0d0d0d] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
