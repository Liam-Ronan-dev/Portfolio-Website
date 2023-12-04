import Encryption from "@/Components/Main/Encryption"
import Hero from "@/Components/Main/Hero"
import Projects from "@/Components/Main/Projects"
import Skills from "@/Components/Main/Skills"

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20'>
          <Hero />
          <Skills />
          <Encryption />
          <Projects />
          
      </div>
    </main>
  )
}
