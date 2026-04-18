import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FeaturedProjects from './components/FeaturedProjects'
import AllWorks from './components/AllWorks'
import OtherWorks from './components/OtherWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <AllWorks />
      <OtherWorks />
      <CTA />
      <Footer />
    </div>
  )
}
