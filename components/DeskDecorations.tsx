'use client'

import React from 'react'

export default function DeskDecorations() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-green"></div>
      <div className="absolute inset-0 bg-green-900/20 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-dark-green-2/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left - Content */}
            <div className="flex-1 w-full">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                For Your Desks Decorations
              </h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
              </p>
              <p className="text-4xl font-bold text-white mb-8">Rs. 399/-</p>
              
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

            {/* Right - Plant Image */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="w-full h-80 lg:h-96 bg-gradient-to-br from-blue-300 to-green-300 rounded-2xl flex items-center justify-center">
                <span className="text-dark-green text-sm font-semibold">Succulent Plant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

