"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Image from "next/image"
import { WHATSAPP_CONFIG } from "@/config/images"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  return (
    <html lang="en">
      <head>
        <title>Oceyas Health Care - Expert Physiotherapy & Rehabilitation</title>
        <meta
          name="description"
          content="Professional physiotherapy and rehabilitation services with Dr. Ram Kumar. Specializing in spine care, sports injury, posture correction, and more. 12+ years experience, 5K+ happy customers."
        />
        <meta
          name="keywords"
          content="physiotherapy, rehabilitation, spine care, sports injury, posture correction, home care physio, home nurse, care taker, bangalore physio"
        />
        <meta name="generator" content="v0.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Global WhatsApp Floating Button with moderate blink/glow */}
        <button
          onClick={handleWhatsApp}
          className="fixed bottom-6 right-6 z-50 rounded-xl overflow-hidden animate-cta-blink hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <Image
            src="/wa.jpg"
            alt="Chat on WhatsApp"
            width={60}
            height={60}
            className="rounded-xl"
            priority
          />
        </button>
      </body>
    </html>
  )
}
