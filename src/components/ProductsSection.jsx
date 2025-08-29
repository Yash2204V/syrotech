import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Smartphone, Cloud, Shield, Zap, Globe } from 'lucide-react'

const ProductsSection = () => {
  const scrollRef = useRef(null)

  const products = [
    {
      id: 1,
      title: "AI Solutions",
      description: "Advanced artificial intelligence platforms for business automation and data analysis.",
      icon: <Cpu className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with seamless user experience and robust performance.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["iOS & Android", "React Native", "Flutter Development"]
    },
    {
      id: 3,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure solutions for modern businesses and enterprises.",
      icon: <Cloud className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["AWS Integration", "Azure Solutions", "Google Cloud"]
    },
    {
      id: 4,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Threat Detection", "Data Encryption", "Security Audits"]
    },
    {
      id: 5,
      title: "IoT Platforms",
      description: "Internet of Things solutions connecting devices and enabling smart automation.",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Device Management", "Real-time Analytics", "Edge Computing"]
    },
    {
      id: 6,
      title: "Web Solutions",
      description: "Modern web applications with responsive design and optimized performance.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["React Applications", "Progressive Web Apps", "E-commerce Platforms"]
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const scrollWidth = scrollElement.scrollWidth
    const clientWidth = scrollElement.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      scrollElement.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 30) // Smooth scrolling

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of cutting-edge solutions designed to 
            accelerate your digital transformation journey
          </motion.p>
        </div>

        {/* Scrolling Products Container */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Duplicate products for seamless loop */}
            {[...products, ...products].map((product, index) => (
              <motion.div
                key={`${product.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-lg">
                    {product.icon}
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
