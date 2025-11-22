'use client'

import React from 'react'

interface Product {
  name: string
  description: string
  price: string
  imageColor: string
}

const products: Product[] = [
  {
    name: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: 'Rs. 400/-',
    imageColor: 'from-green-500 to-green-700'
  },
  {
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    imageColor: 'from-green-400 to-yellow-300'
  },
  {
    name: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 'Rs. 359/-',
    imageColor: 'from-green-300 to-green-500'
  }
]

export default function ProductCards() {
  return (
    <section className="w-full py-20 px-6 bg-dark-green-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-dark-green-2/60 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition"
            >
              {/* Product Image */}
              <div className={`w-full h-64 bg-gradient-to-br ${product.imageColor} rounded-2xl mb-4 flex items-center justify-center`}>
                <span className="text-white text-sm">{product.name}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-white/70 text-sm mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-white mb-4">{product.price}</p>

              {/* Shopping Bag Icon */}
              <div className="flex justify-end">
                <button className="w-10 h-10 bg-transparent border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/10 transition">
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

