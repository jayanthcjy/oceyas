"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Target, Activity, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RehabilitationPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  const symptoms = [
    "Post-surgery recovery needs",
    "Chronic pain conditions",
    "Mobility limitations",
    "Muscle weakness and atrophy",
    "Balance and coordination issues",
    "Functional movement problems",
    "Neurological conditions",
    "Age-related physical decline",
  ]

  const treatments = [
    "Comprehensive functional assessment",
    "Progressive exercise programs",
    "Manual therapy techniques",
    "Gait and balance training",
    "Strength and conditioning",
    "Neurological rehabilitation",
    "Pain management strategies",
    "Home exercise program design",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Rehabilitation</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Comprehensive rehabilitation programs for complete recovery. Restore function, regain independence, and
                return to your best quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Rehabilitation Session
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
                src={IMAGES.serviceDetails.rehabDetail || "/placeholder.svg"}
                alt="Comprehensive Rehabilitation Programs"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Rehabilitation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">What is Rehabilitation?</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Rehabilitation is a comprehensive approach to helping individuals recover from injury, surgery, or
              illness. Our programs are designed to restore function, improve quality of life, and help you achieve your
              maximum potential for independence and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Goal-Oriented</h3>
              <p className="text-[#6237A0]">
                Personalized rehabilitation goals based on your specific needs and desired outcomes.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Progressive Training</h3>
              <p className="text-[#6237A0]">
                Structured programs that gradually build strength, mobility, and functional capacity.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Measurable Progress</h3>
              <p className="text-[#6237A0]">
                Regular assessment and tracking of your recovery progress with objective measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Rehabilitate */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Conditions We Rehabilitate</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Our comprehensive rehabilitation programs address a wide range of conditions, from post-surgical
                recovery to chronic conditions, helping you regain function and independence.
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
                src={IMAGES.services.rehab || "/placeholder.svg"}
                alt="Rehabilitation Conditions"
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
                alt="Dr. Sunil providing rehabilitation therapy"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Rehabilitation Approach</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                We offer comprehensive rehabilitation in Bangalore, combining evidence-based physiotherapy techniques
                with personalized care to support your full recovery and restore optimal function.
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Benefits of Rehabilitation</h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Experience comprehensive recovery and improved quality of life through our rehabilitation programs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Restored Function</h3>
              <p className="text-[#6237A0]">Regain lost abilities and improve daily functioning</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Pain Reduction</h3>
              <p className="text-[#6237A0]">Significant decrease in pain and discomfort</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Increased Independence</h3>
              <p className="text-[#6237A0]">Greater ability to perform daily activities independently</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Improved Strength</h3>
              <p className="text-[#6237A0]">Enhanced muscle strength and endurance</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Better Balance</h3>
              <p className="text-[#6237A0]">Improved balance and coordination</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Quality of Life</h3>
              <p className="text-[#6237A0]">Enhanced overall quality of life and well-being</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Start Your Recovery Journey</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards complete recovery and improved quality of life. Book a consultation with Dr.
            Sunil and discover how our comprehensive rehabilitation programs can help you achieve your goals.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Rehabilitation Session
          </button>
        </div>
      </section>
    </div>
  )
}
