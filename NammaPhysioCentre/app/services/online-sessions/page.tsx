"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Monitor, Video, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OnlineSessionsPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  const symptoms = [
    "Limited mobility to visit clinic",
    "Busy work schedules",
    "Follow-up care needs",
    "Exercise guidance requirements",
    "Chronic condition management",
    "Post-treatment monitoring",
    "Preventive care consultation",
    "Remote location challenges",
  ]

  const treatments = [
    "Virtual physiotherapy consultations",
    "Guided exercise sessions",
    "Posture assessment via video",
    "Pain management coaching",
    "Movement analysis and correction",
    "Home exercise program design",
    "Progress monitoring and adjustments",
    "Health education and lifestyle advice",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Online Sessions</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Convenient virtual consultations and guided therapy sessions. Get expert physiotherapy care from the
                comfort of your home with our online services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Online Session
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
                src={IMAGES.serviceDetails.onlineSessionsDetail || "/placeholder.svg"}
                alt="Online Physiotherapy Sessions"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What are Online Sessions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">What are Online Sessions?</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Online physiotherapy sessions provide professional care through secure video consultations. Dr. Sunil
              offers personalized treatment plans, exercise guidance, and ongoing support, making quality physiotherapy
              accessible from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Video className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Video Consultations</h3>
              <p className="text-[#6237A0]">
                Face-to-face consultations through secure video calls for personalized care.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Real-time Guidance</h3>
              <p className="text-[#6237A0]">Live exercise demonstrations and movement corrections during sessions.</p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Flexible Scheduling</h3>
              <p className="text-[#6237A0]">Convenient appointment times that fit your schedule and lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Who Benefits from Online Sessions?</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Online physiotherapy sessions are perfect for various situations and needs, providing accessible care
                when in-person visits aren't possible or convenient.
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
                src={IMAGES.services.onlineSessions || "/placeholder.svg"}
                alt="Online Physiotherapy Benefits"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <Image
                src={IMAGES.doctor.genericDoctor || "/placeholder.svg"}
                alt="Dr. Sunil conducting online physiotherapy session"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Online Services</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Dr. Sunil provides comprehensive online physiotherapy services, ensuring you receive the same quality
                care and personalized attention as in-person visits.
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Benefits of Online Sessions</h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Experience professional physiotherapy care with the convenience and comfort of virtual sessions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Convenience</h3>
              <p className="text-[#6237A0]">No travel time or waiting rooms - care from home</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Accessibility</h3>
              <p className="text-[#6237A0]">Access to expert care regardless of location</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Flexible Timing</h3>
              <p className="text-[#6237A0]">Sessions that fit your schedule and lifestyle</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Continuity of Care</h3>
              <p className="text-[#6237A0]">Consistent follow-up and progress monitoring</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Cost-Effective</h3>
              <p className="text-[#6237A0]">Reduced travel costs and time investment</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Personalized Care</h3>
              <p className="text-[#6237A0]">One-on-one attention and customized programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Start Your Online Physiotherapy</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Experience the convenience of professional physiotherapy from home. Book an online consultation with Dr.
            Sunil and get the expert care you need, when and where you need it.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Online Session
          </button>
        </div>
      </section>
    </div>
  )
}
