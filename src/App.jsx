import { useState, useEffect } from 'react'
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
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function getPage() {
  const hash = window.location.hash
  if (hash === '#privacy-policy') return 'privacy'
  if (hash === '#terms-of-service') return 'terms'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    function onHashChange() {
      setPage(getPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (page === 'privacy') return <PrivacyPolicy />
  if (page === 'terms') return <TermsOfService />

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
