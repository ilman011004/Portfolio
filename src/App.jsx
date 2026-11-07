import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Designs from './components/Designs'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
      </main>
      <Contact />
    </>
  )
}