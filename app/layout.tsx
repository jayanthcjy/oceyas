import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Namma Physio Centre - Expert Physiotherapy & Rehabilitation",
  description:
    "Professional physiotherapy and rehabilitation services with Dr. Sunil. Specializing in spine care, sports injury, posture correction, and more. 12+ years experience, 5K+ happy customers.",
  keywords:
    "physiotherapy, rehabilitation, spine care, sports injury, posture correction, trigger point therapy, acupuncture, bangalore physio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
