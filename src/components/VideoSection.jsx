import React, { useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)

  // For demo purposes, using a placeholder video
  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  const thumbnailUrl = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"

  const handlePlayPause = () => {
    const video = document.getElementById('promo-video')
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMuteToggle = () => {
    const video = document.getElementById('promo-video')
    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    const video = document.getElementById('promo-video')
    if (video && video.requestFullscreen) {
      video.requestFullscreen()
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See Syrotech in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our innovative solutions are transforming businesses 
            across industries and driving digital transformation worldwide
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video Element */}
            <video
              id="promo-video"
              className="w-full h-full object-cover"
              poster={thumbnailUrl}
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              {/* Play Button */}
              {!isPlaying && (
                <button
                  onClick={handlePlayPause}
                  className="group relative z-10 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-6 transition-all duration-300 transform hover:scale-110"
                >
                  <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
                </button>
              )}
            </div>

            {/* Video Controls */}
            {showControls && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePlayPause}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    
                    <button
                      onClick={handleMuteToggle}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Video Title Overlay */}
            <div className="absolute top-6 left-6 right-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                Syrotech: Innovating Tomorrow
              </h3>
              <p className="text-gray-300 text-sm">
                A glimpse into our cutting-edge solutions and global impact
              </p>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-lg leading-relaxed">
              Watch how we're revolutionizing industries with our innovative technology solutions. 
              From AI-powered platforms to cloud infrastructure, see the impact we're making 
              for businesses around the world.
            </p>
          </div>
        </div>

        {/* Video Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Innovation Showcase</h3>
            <p className="text-gray-400">
              See our latest technological breakthroughs and innovative solutions in action
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Volume2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Client Success Stories</h3>
            <p className="text-gray-400">
              Hear directly from our satisfied customers about their transformation journey
            </p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Maximize className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-400">
              Explore how we're making a difference across 50+ countries worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
