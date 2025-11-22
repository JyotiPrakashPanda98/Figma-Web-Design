'use client'

import React from 'react'

interface Review {
  name: string
  text: string
  avatarColor: string
}

const reviews: Review[] = [
  {
    name: 'Shelly Russel',
    text: 'Just got my hands on some absolutely awesome plants, and I couldn\'t be happier!',
    avatarColor: 'from-pink-400 to-orange-400'
  },
  {
    name: 'Lula Rolfson',
    text: 'Each one has its own unique charm and personality, and they\'ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.',
    avatarColor: 'from-blue-300 to-purple-300'
  },
  {
    name: 'Carol Huels',
    text: 'It\'s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!',
    avatarColor: 'from-red-400 to-blue-400'
  }
]

export default function CustomerReviews() {
  return (
    <section className="w-full py-20 px-6 bg-dark-green">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Customer Review
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gold shadow-lg shadow-gold/50"></span>
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-dark-green-2/60 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${review.avatarColor}`}></div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white text-center mb-2">{review.name}</h3>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFD700">
                    <path d="M10 1L12.5 7L19 8L14.5 12L15.5 19L10 16L4.5 19L5.5 12L1 8L7.5 7L10 1Z"/>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-sm text-center leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

