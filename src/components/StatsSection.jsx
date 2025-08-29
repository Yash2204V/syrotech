import React, { useState, useEffect, useRef } from 'react'
import { Package, Calendar, Globe, Users } from 'lucide-react'

const StatsSection = () => {
  const [counters, setCounters] = useState({
    products: 0,
    years: 0,
    countries: 0,
    customers: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    {
      id: 'products',
      icon: <Package className="w-8 h-8" />,
      value: 100,
      suffix: '+',
      label: 'Products',
      description: 'Innovative solutions across various industries'
    },
    {
      id: 'years',
      icon: <Calendar className="w-8 h-8" />,
      value: 20,
      suffix: '+',
      label: 'Years in Industry',
      description: 'Two decades of excellence and innovation'
    },
    {
      id: 'countries',
      icon: <Globe className="w-8 h-8" />,
      value: 50,
      suffix: '+',
      label: 'Countries',
      description: 'Global presence with local expertise'
    },
    {
      id: 'customers',
      icon: <Users className="w-8 h-8" />,
      value: 500,
      suffix: 'K+',
      label: 'Customers',
      description: 'Satisfied clients worldwide'
    }
  ]

  const animateCounter = (targetValue, counterId, duration = 2000) => {
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)

      setCounters(prev => ({
        ...prev,
        [counterId]: currentValue
      }))

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            // Start animations with slight delays for each counter
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateCounter(stat.value, stat.id, 2000 + index * 200)
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Syrotech in Numbers
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our achievements speak for themselves. Here's a glimpse of our impact 
            and the trust our clients place in our solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center p-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full mb-6">
                <div className="text-blue-300">
                  {stat.icon}
                </div>
              </div>

              {/* Counter */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-white">
                  {counters[stat.id]}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-blue-300">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-blue-200 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Growing Every Day
            </h3>
            <p className="text-blue-200 text-lg leading-relaxed max-w-4xl mx-auto">
              These numbers represent more than statistics—they reflect our commitment to excellence, 
              innovation, and the trust our clients place in us. As we continue to grow, we remain 
              dedicated to delivering exceptional solutions that drive real business value.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Learn More About Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
