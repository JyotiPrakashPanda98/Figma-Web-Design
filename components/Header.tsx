'use client'

import React from 'react'

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#90EE90" stroke="#90EE90" strokeWidth="1"/>
            <path d="M12 8L8 10V14L12 16L16 14V10L12 8Z" fill="#FFA500"/>
          </svg>
        </div>
        <span className="text-white text-xl font-bold">FloraVision.</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-white hover:text-light-green transition">Home</a>
        <a href="#" className="text-white hover:text-light-green transition flex items-center gap-1">
          Plants Type
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4L6 7L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-light-green transition flex items-center gap-1">
          More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4L6 7L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-light-green transition">Contact</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <button className="text-white hover:text-light-green transition">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M15 15L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="text-white hover:text-light-green transition">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4H6L8 14H16M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H16M16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="text-white hover:text-light-green transition md:hidden">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

