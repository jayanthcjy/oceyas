"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ErgonomicWorkspaceSetupPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6237A0] hover:text-[#28104E] mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">
              Ergonomic Workspace Setup for IT Professionals
            </h1>
            <p className="text-xl text-[#6237A0] leading-relaxed">
              Learn how to set up your workspace to prevent posture-related issues and maintain optimal spinal health.
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src={IMAGES.blog.blog2 || "/placeholder.svg"}
              alt="Ergonomic Workspace Setup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As an IT professional, you likely spend 8+ hours daily at your workstation. Poor ergonomics can lead to
              chronic pain, reduced productivity, and long-term health issues. This comprehensive guide will help you
              create an ergonomic workspace that supports your health and enhances your performance.
            </p>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">The Cost of Poor Ergonomics</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4">Common Issues from Poor Workspace Setup:</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Forward head posture and neck pain</li>
                <li>• Rounded shoulders and upper back pain</li>
                <li>• Lower back pain and disc problems</li>
                <li>• Carpal tunnel syndrome and wrist pain</li>
                <li>• Eye strain and headaches</li>
                <li>• Reduced productivity and focus</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Essential Components of an Ergonomic Workspace</h2>

            <div className="space-y-8">
              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">1. Monitor Positioning</h3>
                <p className="text-gray-700 mb-4">
                  Proper monitor placement is crucial for preventing neck strain and eye fatigue.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Top of screen at or slightly below eye level</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Monitor 20-26 inches away from your eyes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Screen perpendicular to windows to reduce glare</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Use monitor stand or adjustable arm for proper height</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">2. Chair and Seating Position</h3>
                <p className="text-gray-700 mb-4">Your chair is the foundation of good posture and spinal health.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Feet flat on floor or footrest</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Knees at 90-degree angle</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Lower back supported by chair's lumbar support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Shoulders relaxed, not hunched</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">3. Keyboard and Mouse Setup</h3>
                <p className="text-gray-700 mb-4">Proper input device positioning prevents wrist and arm strain.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Keyboard at elbow height</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Wrists in neutral position, not bent up or down</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Mouse at same level as keyboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Consider ergonomic keyboard and mouse</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">4. Desk Height and Organization</h3>
                <p className="text-gray-700 mb-4">Your desk should accommodate all equipment at proper heights.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Desk height allows 90-degree elbow angle</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Adequate legroom underneath</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Frequently used items within arm's reach</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Consider sit-stand desk for variety</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">5. Lighting and Environment</h3>
                <p className="text-gray-700 mb-4">Proper lighting reduces eye strain and supports good posture.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Adequate ambient lighting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Task lighting for documents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Minimize screen glare and reflections</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Comfortable room temperature</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6 mt-12">Movement and Break Strategies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Even with perfect ergonomics, prolonged sitting is harmful. Incorporate these movement strategies:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">The 20-20-20 Rule:</h3>
              <p className="text-blue-700">Every 20 minutes, look at something 20 feet away for 20 seconds.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#28104E] mb-4">Micro-breaks (Every 30 minutes)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Stand and stretch for 30 seconds</li>
                  <li>• Shoulder rolls and neck stretches</li>
                  <li>• Eye exercises and blinking</li>
                  <li>• Deep breathing exercises</li>
                </ul>
              </div>
              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#28104E] mb-4">Movement Breaks (Every 2 hours)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Walk around the office or home</li>
                  <li>• Do desk exercises</li>
                  <li>• Change working positions</li>
                  <li>• Hydrate and use restroom</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Quick Desk Exercises</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Neck Stretches</h4>
                  <p className="text-gray-700">Gently tilt head side to side, hold 15 seconds each</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Shoulder Blade Squeezes</h4>
                  <p className="text-gray-700">Pull shoulder blades together, hold 5 seconds, repeat 10 times</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Spinal Twists</h4>
                  <p className="text-gray-700">Rotate torso left and right while seated, hold 15 seconds each</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Signs You Need Professional Help</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-yellow-800 font-semibold mb-4">Consult a physiotherapist if you experience:</p>
              <ul className="space-y-2 text-yellow-700">
                <li>• Persistent neck, shoulder, or back pain</li>
                <li>• Numbness or tingling in hands/arms</li>
                <li>• Frequent headaches</li>
                <li>• Difficulty maintaining good posture</li>
                <li>• Pain that worsens throughout the workday</li>
              </ul>
            </div>

            <div className="bg-[#DEACF5] p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-[#28104E] mb-4">Need a Professional Ergonomic Assessment?</h3>
              <p className="text-[#6237A0] mb-6">
                Dr. Sunil specializes in posture correction for IT professionals and can provide personalized ergonomic
                recommendations for your specific workspace and needs.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <MessageCircle size={20} />
                Book Ergonomic Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
