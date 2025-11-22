'use client'

import React from 'react'

export default function TrendyPlants() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-dark-green-2 to-dark-green-3"></div>
      <div className="absolute inset-0 bg-green-900/30 blur-3xl"></div>

      {/* Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Trendy plants</h2>
        <div className="w-24 h-1 bg-light-green mx-auto rounded-full"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-dark-green-2/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left - Plant Image */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-sm">Plant Image</span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 w-full lg:w-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                For Your Desks Decorations
              </h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
              </p>
              <p className="text-4xl font-bold text-white mb-8">Rs. 599/-</p>
              
              <div className="flex gap-4">
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-green transition">
                  Explore
                </button>
                <button className="w-12 h-12 border-2 border-white text-white rounded-lg hover:bg-white hover:text-dark-green transition flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4H6L8 14H16M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H16M16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

