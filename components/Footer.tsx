'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-dark-green-3 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#90EE90" stroke="#90EE90" strokeWidth="1"/>
                  <path d="M12 8L8 10V14L12 16L16 14V10L12 8Z" fill="#FFA500"/>
                </svg>
              </div>
              <span className="text-white text-xl font-bold">FloraVision.</span>
            </div>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white font-bold hover:text-light-green transition">FB</a>
              <a href="#" className="text-white font-bold hover:text-light-green transition">TW</a>
              <a href="#" className="text-white font-bold hover:text-light-green transition">LI</a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Link&apos;s</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white underline hover:text-light-green transition">Home</a>
              </li>
              <li>
                <a href="#" className="text-white underline hover:text-light-green transition">Type&apos;s Of plant&apos;s</a>
              </li>
              <li>
                <a href="#" className="text-white underline hover:text-light-green transition">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white underline hover:text-light-green transition">Privacy</a>
              </li>
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">For Every Update.</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-4 py-3 bg-dark-green-2 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-dark-green transition whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/80 text-sm">FloraVision © all right reserve</p>
        </div>
      </div>
    </footer>
  )
}

