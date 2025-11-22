'use client'

import React from 'react'

interface Plant {
  name: string
  description: string
  price: string
  imageColor: string
}

const plants: Plant[] = [
  {
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    price: 'Rs 300/-',
    imageColor: 'from-green-400 to-yellow-400'
  },
  {
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: 'Rs 380/-',
    imageColor: 'from-green-300 to-green-500'
  },
  {
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: 'Rs 259/-',
    imageColor: 'from-blue-400 to-green-400'
  }
]

export default function TopSellingPlants() {
  return (
    <section className="w-full py-20 px-6 bg-dark-green-3">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Top Selling Plants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant, index) => (
            <div
              key={index}
              className="bg-dark-green-2/60 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition"
            >
              {/* Plant Image */}
              <div className={`w-full h-64 bg-gradient-to-br ${plant.imageColor} rounded-2xl mb-4 flex items-center justify-center`}>
                <span className="text-white text-sm">{plant.name}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{plant.name}</h3>
              <p className="text-white/70 text-sm mb-4 line-clamp-2">{plant.description}</p>
              <p className="text-2xl font-bold text-white mb-4">{plant.price}</p>

              {/* Shopping Bag Icon */}
              <div className="flex justify-end">
                <button className="w-10 h-10 bg-dark-green-2/80 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4H6L8 14H16M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H16M16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

