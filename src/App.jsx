import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero'
import Nav from './sections/Nav'
import ComingSoon from './sections/ComingSoon'
import FirstVideo from './sections/FirstVideo'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <ComingSoon />
      <FirstVideo />
    </main>
  )
}

export default App