"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Target, Zap, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AcupuncturePage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  const symptoms = [
    "Chronic pain conditions",
    "Stress and anxiety",
    "Headaches and migraines",
    "Arthritis and joint pain",
    "Muscle tension and spasms",
    "Sleep disorders",
    "Digestive issues",
    "Fatigue and low energy",
  ]

  const treatments = [
    "Traditional acupuncture techniques",
    "Electroacupuncture therapy",
    "Cupping therapy",
    "Moxibustion treatment",
    "Auricular (ear) acupuncture",
    "Trigger point acupuncture",
    "Holistic health assessment",
    "Lifestyle and dietary guidance",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Acupuncture Therapy</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Traditional acupuncture for pain relief and holistic healing. Experience the ancient art of healing
                combined with modern physiotherapy techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Acupuncture Session
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
                src={IMAGES.serviceDetails.acupunctureDetail || "/placeholder.svg"}
                alt="Acupuncture Treatment at Oceyas Physio & Rehab"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Acupuncture */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">What is Acupuncture?</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Acupuncture is an ancient Chinese healing practice that involves inserting thin needles into specific
              points on the body to stimulate natural healing processes. Combined with modern physiotherapy, it provides
              effective relief for various conditions while promoting overall wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Precise Point Selection</h3>
              <p className="text-[#6237A0]">
                Expert identification of acupuncture points based on your specific condition and symptoms.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Energy Balance</h3>
              <p className="text-[#6237A0]">
                Restoration of natural energy flow and balance within the body's systems.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Holistic Healing</h3>
              <p className="text-[#6237A0]">
                Comprehensive approach addressing physical, mental, and emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Conditions We Treat</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Acupuncture is effective for a wide range of conditions, from pain management to stress relief. Our
                integrated approach combines traditional techniques with modern understanding.
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
                src={IMAGES.services.acupuncture || "/placeholder.svg"}
                alt="Acupuncture Treatment Benefits"
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
                alt="Dr. Sunil providing acupuncture treatment"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Acupuncture Methods</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                We combine traditional acupuncture techniques with modern physiotherapy in Bangalore to deliver safe,
                effective treatments tailored to your health goals. Our personalized approach promotes pain relief,
                healing, and overall well-being.pain relief, healing, and overall well-being"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Benefits of Acupuncture</h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Experience natural healing and improved well-being through traditional acupuncture
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Natural Pain Relief</h3>
              <p className="text-[#6237A0]">Drug-free pain management and healing</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Stress Reduction</h3>
              <p className="text-[#6237A0]">Deep relaxation and stress relief</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Improved Sleep</h3>
              <p className="text-[#6237A0]">Better sleep quality and patterns</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Enhanced Energy</h3>
              <p className="text-[#6237A0]">Increased vitality and energy levels</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Immune Support</h3>
              <p className="text-[#6237A0]">Strengthened immune system function</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Overall Wellness</h3>
              <p className="text-[#6237A0]">Improved general health and well-being</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Experience Natural Healing</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Discover the benefits of traditional acupuncture combined with modern physiotherapy. Book a consultation
            with Dr. Sunil and start your journey to natural healing and improved wellness.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Acupuncture Session
          </button>
        </div>
      </section>
    </div>
  )
}
