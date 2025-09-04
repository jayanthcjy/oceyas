"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Shield, Heart, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PreventiveTherapyPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  const symptoms = [
    "Risk of future injuries",
    "Sedentary lifestyle effects",
    "Age-related physical decline",
    "Work-related strain patterns",
    "Family history of conditions",
    "Previous injury concerns",
    "Athletic performance goals",
    "General wellness maintenance",
  ]

  const treatments = [
    "Comprehensive health screening",
    "Risk factor assessment",
    "Personalized exercise programs",
    "Ergonomic workplace evaluation",
    "Lifestyle modification guidance",
    "Strength and flexibility training",
    "Balance and coordination exercises",
    "Long-term wellness planning",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Preventive Therapy</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Proactive care to prevent injuries and maintain optimal health. Stay ahead of problems with our
                comprehensive preventive therapy programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Preventive Assessment
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
                src={IMAGES.serviceDetails.preventiveDetail || "/placeholder.svg"}
                alt="Preventive Therapy Programs"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Preventive Therapy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">What is Preventive Therapy?</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Preventive therapy focuses on identifying and addressing potential health issues before they become
              problems. Our proactive approach helps you maintain optimal physical health, prevent injuries, and enhance
              your quality of life through targeted interventions and lifestyle modifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Injury Prevention</h3>
              <p className="text-[#6237A0]">Identify and address risk factors before they lead to injuries or pain.</p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Wellness Optimization</h3>
              <p className="text-[#6237A0]">
                Enhance overall health and physical performance through targeted interventions.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Long-term Health</h3>
              <p className="text-[#6237A0]">
                Sustainable strategies for maintaining health and mobility throughout life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Preventive Therapy */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Who Needs Preventive Therapy?</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Preventive therapy benefits everyone, from active individuals looking to maintain peak performance to
                those wanting to age gracefully and avoid common health issues.
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
                src={IMAGES.services.preventive || "/placeholder.svg"}
                alt="Preventive Therapy Benefits"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Preventive Approach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <Image
                src={IMAGES.doctor.genericDoctor || "/placeholder.svg"}
                alt="Dr. Sunil providing preventive therapy consultation"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Preventive Approach</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                We offer preventive physiotherapy programs in Bangalore designed to keep you healthy and active for
                life. Our holistic approach addresses current health conditions and future risk factors to enhance
                long-term wellness.
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Benefits of Preventive Therapy</h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Invest in your future health and well-being with proactive preventive care
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Injury Prevention</h3>
              <p className="text-[#6237A0]">Significantly reduced risk of future injuries</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Cost Savings</h3>
              <p className="text-[#6237A0]">Lower healthcare costs through prevention</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Enhanced Performance</h3>
              <p className="text-[#6237A0]">Improved physical performance and endurance</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Better Quality of Life</h3>
              <p className="text-[#6237A0]">Maintained independence and activity levels</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Healthy Aging</h3>
              <p className="text-[#6237A0]">Graceful aging with maintained mobility</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Peace of Mind</h3>
              <p className="text-[#6237A0]">Confidence in your long-term health</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Invest in Your Future Health</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Don't wait for problems to develop. Take a proactive approach to your health with our preventive therapy
            programs. Book a consultation with Dr. Sunil and start your journey to lifelong wellness.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Preventive Assessment
          </button>
        </div>
      </section>
    </div>
  )
}
