import { useState, useEffect, useRef } from 'react'
import './App.css'

// Import travel images
import coconutImg from './assets/travel-pik/0001.jpg'
import flightImg from './assets/travel-pik/0100.jpg'
import boatImg from './assets/travel-pik/0200.jpg'
import resortImg from './assets/travel-pik/0300.jpg'
import sunsetImg from './assets/travel-pik/0367.jpg'
import maldivesImg from './assets/travel-pik/0150.jpg'
import boraImg from './assets/travel-pik/0250.jpg'
import seychellesImg from './assets/travel-pik/0350.jpg'

interface Scene {
  name: string
  image: string
}

interface Destination {
  name: string
  price: string
  image: string
}

interface Service {
  icon: string
  name: string
  description: string
}

const NetflixTravelExperience: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [videoScale, setVideoScale] = useState(1)
  const contentRef = useRef<HTMLDivElement>(null)

  const scenes: Scene[] = [
    { name: 'coconut', image: coconutImg },
    { name: 'flight', image: flightImg },
    { name: 'boat', image: boatImg },
    { name: 'resort', image: resortImg },
    { name: 'sunset', image: sunsetImg }
  ]

  const destinations: Destination[] = [
    { name: 'Maldives Paradise', price: 'From $2,499', image: maldivesImg },
    { name: 'Bora Bora Dreams', price: 'From $3,199', image: boraImg },
    { name: 'Seychelles Bliss', price: 'From $2,899', image: seychellesImg }
  ]

  const services: Service[] = [
    { icon: '🏖️', name: 'Private Beach Access', description: 'Exclusive beachfront experiences with personalized service' },
    { icon: '🍾', name: 'Gourmet Dining', description: 'World-class cuisine prepared by renowned chefs' },
    { icon: '🛥️', name: 'Yacht Excursions', description: 'Private yacht tours to hidden tropical gems' },
    { icon: '💆', name: 'Spa Wellness', description: 'Luxurious spa treatments in paradise settings' }
  ]

  // 🌊 Scroll Timeline Illusion - Netflix Secret
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = window.scrollY / scrollHeight
      const sceneIndex = Math.floor(scrollProgress * scenes.length)
      
      // Update video scene based on scroll
      if (sceneIndex !== currentScene && sceneIndex < scenes.length) {
        setCurrentScene(sceneIndex)
      }

      // Subtle video scaling for cinematic effect
      const scale = 1 + (scrollProgress * 0.05) // scale(1) → scale(1.05)
      setVideoScale(scale)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentScene, scenes.length])

  // 👀 Content Visibility Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    )

    const sections = document.querySelectorAll('.content-section')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="netflix-travel-experience">
      {/* 🎥 Layer 1: Cinematic Video Background */}
      <div className="hero-video-container">
        {scenes.map((scene, index) => (
          <div
            key={scene.name}
            className={`video-sequence ${index === currentScene ? 'active' : ''}`}
          >
            <img
              src={scene.image}
              alt={scene.name}
              className="hero-video"
              style={{ transform: `scale(${videoScale})` }}
            />
          </div>
        ))}
      </div>

      {/* 🧊 Layer 2: Dark Gradient Overlay */}
      <div className="gradient-overlay" />

      {/* 👀 Layer 3: Scroll Content */}
      <div className="content-container" ref={contentRef}>
        {/* 🌴 Section 1: Opening (0-20%) */}
        <section
          id="intro"
          className={`content-section ${visibleSections.has('intro') ? 'visible' : ''}`}
        >
          <div className="content-wrapper">
            <h1 className="hero-title">EXPLORE PARADISE</h1>
            <p className="hero-subtitle">Your cinematic journey to tropical bliss begins here</p>
          </div>
        </section>

        {/* ✈️ Section 2: Journey (20-40%) */}
        <section
          id="booking"
          className={`content-section ${visibleSections.has('booking') ? 'visible' : ''}`}
        >
          <div className="content-wrapper">
            <h2 className="hero-title">BOOK YOUR JOURNEY</h2>
            <p className="hero-subtitle">Seamless travel planning meets luxury experience</p>
            
            <div className="booking-panel">
              <input type="text" className="booking-input" placeholder="Where do you want to go?" />
              <input type="date" className="booking-input" placeholder="Departure Date" />
              <input type="date" className="booking-input" placeholder="Return Date" />
              <button 
                className="booking-button"
                onClick={() => scrollToSection('destinations')}
              >
                Discover Your Paradise
              </button>
            </div>
          </div>
        </section>

        {/* 🚤 Section 3: Arrival (40-60%) */}
        <section
          id="destinations"
          className={`content-section ${visibleSections.has('destinations') ? 'visible' : ''}`}
        >
          <div className="content-wrapper">
            <h2 className="hero-title">ARRIVE IN LUXURY</h2>
            <p className="hero-subtitle">Handpicked destinations for the discerning traveler</p>
            
            <div className="destinations-grid">
              {destinations.map((destination, index) => (
                <div key={index} className="destination-card">
                  <img src={destination.image} alt={destination.name} className="destination-image" />
                  <div className="destination-info">
                    <h3 className="destination-name">{destination.name}</h3>
                    <p className="destination-price">{destination.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🏝️ Section 4: Experience (60-80%) */}
        <section
          id="services"
          className={`content-section ${visibleSections.has('services') ? 'visible' : ''}`}
        >
          <div className="content-wrapper">
            <h2 className="hero-title">LUXURY EXPERIENCES</h2>
            <p className="hero-subtitle">Curated services for unforgettable moments</p>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${visibleSections.has('services') ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🌅 Section 5: Ending (80-100%) */}
        <section
          id="cta"
          className={`content-section ${visibleSections.has('cta') ? 'visible' : ''}`}
        >
          <div className="content-wrapper">
            <div className="final-cta">
              <h2 className="cta-title">Your Paradise Awaits</h2>
              <p className="hero-subtitle">Begin your cinematic journey today</p>
              <button 
                className="cta-button"
                onClick={() => alert('Welcome to your paradise! Our travel concierge will contact you soon.')}
              >
                RESERVE YOUR DREAM VACATION
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function App() {
  return <NetflixTravelExperience />
}

export default App
