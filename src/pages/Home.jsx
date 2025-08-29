import React from 'react'
import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'
import VisionSection from '../components/VisionSection'
import VideoSection from '../components/VideoSection'
import StatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <VisionSection />
      <VideoSection />
      <StatsSection />
    </div>
  )
}

export default Home
