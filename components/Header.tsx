"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/config/images"

const services = [
  { name: "Spine Care", href: "/services/spine-care" },
  { name: "Posture Correction", href: "/services/posture-correction" },
  { name: "Trigger Point Therapy", href: "/services/trigger-point-therapy" },
  { name: "Sports Injury", href: "/services/sports-injury" },
  { name: "Acupuncture", href: "/services/acupuncture" },
  { name: "Rehabilitation", href: "/services/rehabilitation" },
  { name: "Online Sessions", href: "/services/online-sessions" },
  { name: "Preventive Therapy", href: "/services/preventive-therapy" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  return (
    <header className="bg-oceyas-deepBlue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Oceyas</h1>
              <p className="text-xs text-oceyas-skyBlue hidden md:block">Physiotherapy & Rehab</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-oceyas-brightBlue transition-colors duration-300">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-oceyas-brightBlue transition-colors duration-300">
                Services
                <ChevronDown size={16} />
              </button>

              <div className="absolute top-full left-0 w-64 bg-white text-oceyas-deepBlue rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 hover:bg-oceyas-skyBlue transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="hover:text-oceyas-brightBlue transition-colors duration-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-oceyas-brightBlue transition-colors duration-300">
              Contact Us
            </Link>

            <button
              onClick={handleWhatsApp}
              className="bg-oceyas-brightBlue hover:bg-oceyas-deepBlue px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-oceyas-brightBlue">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-oceyas-brightBlue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 hover:text-oceyas-brightBlue transition-colors duration-300 w-full text-left"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-oceyas-skyBlue hover:text-oceyas-brightBlue transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="hover:text-oceyas-brightBlue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-oceyas-brightBlue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              <button
                onClick={() => {
                  handleWhatsApp()
                  setIsMenuOpen(false)
                }}
                className="bg-oceyas-brightBlue hover:bg-oceyas-deepBlue px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 w-fit"
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
