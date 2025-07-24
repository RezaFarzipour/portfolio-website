'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";


export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-2xl shadow-xl transition-all duration-300 
      bg-purple-600 hover:bg-purple-700 text-white 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
      backdrop-blur-lg`}
      aria-label="Back to Top"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  )
}
