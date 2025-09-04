"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function SpineCarePage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const symptoms = [
    "Chronic lower back pain",
    "Upper back and neck stiffness",
    "Radiating pain to legs or arms",
    "Muscle spasms and tension",
    "Limited range of motion",
    "Postural problems",
    "Disc-related issues",
    "Sciatica symptoms",
  ]

  const treatments = [
    "Manual therapy and spinal mobilization",
    "Targeted strengthening exercises",
    "Postural correction techniques",
    "Pain management strategies",
    "Core stability training",
    "Ergonomic education",
    "Movement pattern correction",
    "Preventive care planning",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Spine Care</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Comprehensive spinal health and alignment therapy for lasting relief from back pain and improved
                mobility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Spine Care Session
                </button>
                <Link
                  href="/contact"
                  className="bg-white text-[#6237A0] border-2 border-[#6237A0] hover:bg-[#6237A0] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.serviceDetails.spinecareDetail || "/placeholder.svg"}
                alt="Spine Care Treatment at Oceyas Physio & Rehab"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Spine Care */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">What is Spine Care?</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Spine care is a specialized branch of physiotherapy focused on diagnosing, treating, and preventing spinal
              disorders and related musculoskeletal conditions. Our comprehensive approach addresses the root causes of
              spinal problems to provide long-lasting relief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Assessment</h3>
              <p className="text-[#6237A0]">
                Thorough evaluation of spinal alignment, mobility, and muscle function to identify problem areas.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Treatment</h3>
              <p className="text-[#6237A0]">
                Personalized therapy combining manual techniques, exercises, and modern treatment methods.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Prevention</h3>
              <p className="text-[#6237A0]">
                Education and strategies to prevent future spinal problems and maintain optimal spinal health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Common Symptoms</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Spinal problems can manifest in various ways. If you're experiencing any of these symptoms, our spine
                care program can help provide relief and prevent further complications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <AlertTriangle className="text-[#9754CB] flex-shrink-0" size={20} />
                    <span className="text-[#28104E]">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={IMAGES.services.spinecare || "/placeholder.svg"}
                alt="Spine Care Symptoms"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <Image
                src={IMAGES.doctor.genericDoctor || "/placeholder.svg"}
                alt="Dr. Sunil providing spine care treatment"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Treatment Approach</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                With over 12 years of experience in spine care, you receive effective, evidence-based treatments
                tailored to your specific condition and recovery goals.
              </p>
              <div className="space-y-4">
                {treatments.map((treatment, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-[#DEACF5] rounded-lg">
                    <CheckCircle className="text-[#6237A0] flex-shrink-0" size={20} />
                    <span className="text-[#28104E] font-medium">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Benefits of Our Spine Care</h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Experience the difference our comprehensive spine care program can make in your life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Pain Relief</h3>
              <p className="text-[#6237A0]">Significant reduction in back pain and discomfort</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Improved Mobility</h3>
              <p className="text-[#6237A0]">Enhanced range of motion and flexibility</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Better Posture</h3>
              <p className="text-[#6237A0]">Corrected spinal alignment and posture</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Stronger Core</h3>
              <p className="text-[#6237A0]">Improved core stability and strength</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Prevention</h3>
              <p className="text-[#6237A0]">Reduced risk of future spinal problems</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Quality of Life</h3>
              <p className="text-[#6237A0]">Return to daily activities without pain</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Start Your Spine Care Journey</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Don't let back pain control your life. Book a consultation with Dr. Sunil today and discover how our
            specialized spine care can help you achieve lasting relief and improved quality of life.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Spine Care Session
          </button>
        </div>
      </section>
    </div>
  )
}
