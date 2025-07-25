"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, ArrowLeft, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BackPainReliefExercisesPage() {
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
              5 Essential Exercises for Back Pain Relief
            </h1>
            <p className="text-xl text-[#6237A0] leading-relaxed">
              Discover simple yet effective exercises that can help alleviate chronic back pain and improve your quality
              of life.
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src={IMAGES.blog.blog1 || "/placeholder.svg"}
              alt="Back Pain Relief Exercises"
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
              Back pain affects millions of people worldwide and can significantly impact daily activities and quality
              of life. Whether you're dealing with chronic lower back pain, upper back stiffness, or occasional
              discomfort, the right exercises can provide substantial relief and prevent future episodes.
            </p>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Understanding Back Pain</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Before diving into exercises, it's important to understand that back pain can stem from various causes
              including poor posture, muscle imbalances, herniated discs, or simply the wear and tear of daily life.
              These exercises are designed to address the most common causes of back pain by strengthening supporting
              muscles, improving flexibility, and promoting proper spinal alignment.
            </p>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">The 5 Essential Exercises</h2>

            <div className="space-y-8">
              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">1. Cat-Cow Stretch</h3>
                <p className="text-gray-700 mb-4">
                  This gentle flowing movement helps improve spinal flexibility and relieves tension in the back
                  muscles.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Start on hands and knees in a tabletop position</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Arch your back and look up (Cow position)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Round your spine and tuck chin to chest (Cat position)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Repeat 10-15 times slowly and smoothly</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">2. Child's Pose</h3>
                <p className="text-gray-700 mb-4">
                  A restorative pose that gently stretches the lower back and helps relieve tension.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Kneel on the floor with big toes touching</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Sit back on your heels and separate knees hip-width apart</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Fold forward and extend arms in front of you</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Hold for 30-60 seconds, breathing deeply</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">3. Pelvic Tilts</h3>
                <p className="text-gray-700 mb-4">Strengthens abdominal muscles and improves lower back flexibility.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Lie on your back with knees bent, feet flat on floor</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tighten abdominal muscles and push lower back into floor</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Hold for 5 seconds, then relax</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Repeat 10-15 times</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">4. Knee-to-Chest Stretch</h3>
                <p className="text-gray-700 mb-4">Helps relieve tension in the lower back and hip flexors.</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Lie on your back with both knees bent</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Bring one knee toward your chest</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Hold behind thigh and gently pull closer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Hold 20-30 seconds, repeat with other leg</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">5. Bridge Exercise</h3>
                <p className="text-gray-700 mb-4">
                  Strengthens the glutes and hamstrings while supporting the lower back.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Lie on your back with knees bent, feet hip-width apart</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Squeeze glutes and lift hips off the ground</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Create straight line from knees to shoulders</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Hold 5-10 seconds, repeat 10-15 times</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6 mt-12">Important Safety Tips</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li>• Start slowly and gradually increase intensity</li>
                <li>• Stop immediately if you experience sharp or shooting pain</li>
                <li>• Breathe normally throughout each exercise</li>
                <li>• Consistency is key - perform these exercises daily for best results</li>
                <li>• Consult with a physiotherapist if pain persists or worsens</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">When to Seek Professional Help</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              While these exercises can provide significant relief for many people, it's important to seek professional
              help if you experience persistent pain, numbness, tingling, or if your symptoms worsen. A qualified
              physiotherapist can provide personalized treatment and ensure you're performing exercises correctly.
            </p>

            <div className="bg-[#DEACF5] p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-[#28104E] mb-4">Need Professional Guidance?</h3>
              <p className="text-[#6237A0] mb-6">
                Dr. Sunil at Namma Physio Centre can provide personalized back pain treatment and guide you through the
                most effective exercises for your specific condition.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <MessageCircle size={20} />
                Consult Dr. Sunil
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
