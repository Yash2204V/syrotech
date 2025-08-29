import React from 'react'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, Rocket } from 'lucide-react'

const VisionSection = () => {
  const visionItems = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To revolutionize industries through innovative technology solutions that drive sustainable growth and digital transformation."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the global leader in cutting-edge technology solutions, empowering businesses to achieve their fullest potential."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Values",
      description: "Innovation, integrity, excellence, and customer-centricity guide everything we do as we build lasting partnerships."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Our Future",
      description: "Continuously evolving and adapting to emerging technologies to stay ahead of tomorrow's challenges and opportunities."
    }
  ]

  return (
    <section id="vision" className="py-20 bg-white">
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
            Our Vision & Mission
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Driven by innovation and guided by purpose, we shape the future of technology 
            to create meaningful impact for businesses worldwide
          </motion.p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="text-blue-600">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <blockquote className="text-2xl md:text-3xl font-medium mb-6">
              "Technology is best when it brings people together and creates 
              opportunities for growth, innovation, and positive change."
            </blockquote>
            <cite className="text-lg font-semibold text-blue-200">
              — Syrotech Leadership Team
            </cite>
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-2">20+</h3>
            <p className="text-gray-700 font-medium">Years of Excellence</p>
            <p className="text-gray-600 text-sm mt-2">
              Two decades of continuous innovation and growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl"
          >
            <h3 className="text-3xl font-bold text-green-600 mb-2">50+</h3>
            <p className="text-gray-700 font-medium">Countries Served</p>
            <p className="text-gray-600 text-sm mt-2">
              Global reach with local impact and understanding
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl"
          >
            <h3 className="text-3xl font-bold text-purple-600 mb-2">100+</h3>
            <p className="text-gray-700 font-medium">Innovative Products</p>
            <p className="text-gray-600 text-sm mt-2">
              Comprehensive solutions for every business need
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
