import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AnimatedText } from './components/AnimatedText'
import { Marquee } from './components/Marquee'
import { FeatureCards } from './components/FeatureCards'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'
import { Backdrop } from './components/Backdrop'

export default function App() {
  return (
    <main className="min-h-screen">
      <Backdrop />
      <CustomCursor />
      <Navbar />
      <Hero />
      <AnimatedText />
      <Marquee />
      <FeatureCards />
      <Footer />
    </main>
  )
}
