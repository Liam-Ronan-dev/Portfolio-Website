import About from "@/Components/Main/About"

import Hero from "@/Components/Main/Hero"

import Projects from "@/Components/Main/Projects"
import Skills from "@/Components/Main/Skills"

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
          <Hero />
          <About />
          <Skills />
          <Projects />
      </div>
    </main>
  )
}
