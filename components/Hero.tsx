'use client'

import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-dark-green-2 to-dark-green-3 opacity-90"></div>
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-green-900 opacity-20 blur-3xl"></div>

      {/* Left Content */}
      <div className="relative z-10 flex-1 max-w-2xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
          Earth&apos;s Exhale
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
          &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role in sustaining life.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-green transition">
            Buy Now
          </button>
          <button className="px-8 py-3 flex items-center gap-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-green transition">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2 2L10 6L2 10V2Z"/>
              </svg>
            </div>
            Live Demo...
          </button>
        </div>
      </div>

      {/* Right Product Card */}
      <div className="relative z-10 w-full lg:w-96">
        <div className="bg-dark-green-2/80 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl">
          {/* Product Image Placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mb-4 flex items-center justify-center">
            <span className="text-white text-sm">Aglaonema Plant Image</span>
          </div>
          
          <p className="text-white/70 text-sm mb-2">Indoor Plant</p>
          <h3 className="text-2xl font-bold text-white mb-6">Aglaonema plant</h3>
          
          <button className="w-full px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-green transition">
            Buy Now
          </button>

          {/* Navigation Arrow */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-light-green transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="absolute bottom-8 left-6 z-10 hidden xl:block">
        <div className="bg-dark-green-2/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-orange-400"></div>
            <div>
              <p className="text-white font-semibold">Ronnie Hamill</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < 4 ? "#FFD700" : "none"} stroke="#FFD700">
                    <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-white/80 text-sm">
            I can&apos;t express how thrilled I am with my new natural plants! They bring such a...
          </p>
        </div>
      </div>
    </section>
  )
}

