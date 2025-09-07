"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/config/images"

const services = [
  { name: "Physio and Rehab", href: "/services/physio&rehab" },
  { name: "Home Care Physio", href: "/services/home-care-physio" },
  { name: "Home Nursing", href: "/services/home-nursing" },
  { name: "Care Taker", href: "/services/care-taker" },
  { name: "Sports Injury", href: "/services/sports-injury" },
  { name: "Spine Care", href: "/services/spine-care" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  return (
    <header className="bg-gradient-to-r from-[#2B4470] to-[#7AAED4] text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar - center brand on mobile, space-between on md+ */}
        <div className="relative flex items-center h-16 justify-center md:justify-between">
          {/* Logo block */}
          <Link href="/" className="flex items-center">
            <div className="leading-tight text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold">Oceyas</h1>
              <p className="text-xs text-white/80">Healthe Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-white/80 transition-colors duration-300 font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white/80 transition-colors duration-300 font-medium">
                Services
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180 duration-300" />
              </button>

              <div className="absolute top-full left-0 w-64 bg-white text-[#2B4470] rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#C7DDEB]">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 hover:bg-[#C7DDEB] transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="hover:text-white/80 transition-colors duration-300 font-medium">
              Contact Us
            </Link>

            <button
              onClick={handleWhatsApp}
              className="bg-[#D04A6B] hover:bg-[#348AC7] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle size={16} />
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button pinned right so brand stays centered */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/30">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-white/80 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 hover:text-white/80 transition-colors duration-300 w-full text-left font-medium"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 bg-white/10 rounded-lg p-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-white/80 hover:text-white transition-colors duration-300 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="hover:text-white/80 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              <button
                onClick={() => {
                  handleWhatsApp()
                  setIsMenuOpen(false)
                }}
                className="bg-[#D04A6B] hover:bg-[#348AC7] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 w-fit shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={16} />
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
