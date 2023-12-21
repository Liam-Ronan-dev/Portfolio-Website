import About from "@/Components/Main/About"
import Footer from "@/Components/Main/Footer"
import Hero from "@/Components/Main/Hero"
import Navbar from "@/Components/Main/Navbar"
import Projects from "@/Components/Main/Projects"
import Skills from "@/Components/Main/Skills"
import StarsCanvas from "@/Components/Main/StarBackground"

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
      <StarsCanvas />
        <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
        <Footer />
      </div>
    </main>
  )
}
