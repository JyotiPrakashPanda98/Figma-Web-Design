'use client'

import React from 'react'

export default function BestO2() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-green"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Best O2</h2>
          <div className="w-24 h-1 bg-light-green mx-auto rounded-full"></div>
        </div>

        {/* Main Container */}
        <div className="bg-gray-200/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left - Plant Image */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-yellow-400 rounded-2xl flex items-center justify-center">
                <span className="text-dark-green text-sm font-semibold">O2 Plant Image</span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 w-full lg:w-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We Have Small And Best O2 Plants Collection&apos;s
              </h3>
              <p className="text-white/80 text-lg mb-4 leading-relaxed">
                Oxygen-producing plants, often referred to as &quot;O2 plants,&quot; are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and other harmful substances commonly found in indoor environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

