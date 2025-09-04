"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, Award, Users, Heart, Target } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function AboutPage() {
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">About Oceyas Physio & Rehab</h1>
            <p className="text-xl text-[#6237A0] max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional physiotherapy and rehabilitation services with personalized care and
              proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={IMAGES.about.clinicInterior || "/placeholder.svg"}
                alt="Oceyas Physio & Rehab Interior"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#28104E] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Oceyas Physio & Rehab was founded with a simple yet powerful vision: to provide world-class physiotherapy
                and rehabilitation services that truly make a difference in people's lives. Under the expert guidance of
                Dr. Sunil, we have been serving the community for over 12 years.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our approach combines traditional physiotherapy techniques with modern treatment methods, ensuring that
                each patient receives personalized care tailored to their specific needs and recovery goals.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
              >
                <MessageCircle size={20} />
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#28104E] mb-4">Our Mission</h3>
              <p className="text-[#6237A0] leading-relaxed">
                To provide comprehensive, evidence-based physiotherapy services that empower individuals to achieve
                optimal physical health and improve their quality of life through personalized treatment plans.
              </p>
            </div>
            <div className="text-center p-8 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#28104E] mb-4">Our Vision</h3>
              <p className="text-[#6237A0] leading-relaxed">
                To be the leading physiotherapy center known for excellence in patient care, innovative treatment
                approaches, and creating a healthier community through preventive care and rehabilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Our Values</h2>
            <p className="text-[#6237A0] text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in everything we do, from treatment quality to patient experience.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-4">Compassion</h3>
              <p className="text-gray-600">
                We treat every patient with empathy, understanding, and genuine care for their well-being.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously adopt new techniques and technologies to provide the most effective treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Meet Our Expert</h2>
            <p className="text-[#6237A0] text-lg">Experienced professional dedicated to your recovery</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Image
                  src={IMAGES.doctor.drSunil || "/placeholder.svg"}
                  alt="Dr. Sunil - Orthopaedic and Sports Physiotherapy"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover w-full max-w-md mx-auto lg:mx-0"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#28104E] mb-2">Dr. Sunil</h3>
                <p className="text-xl text-[#6237A0] mb-6">Orthopaedic and Sports Physiotherapy</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-[#DEACF5] rounded-xl">
                    <Award className="text-[#6237A0] mx-auto mb-2" size={32} />
                    <h4 className="text-2xl font-bold text-[#28104E]">12+</h4>
                    <p className="text-[#6237A0] text-sm">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-[#DEACF5] rounded-xl">
                    <Users className="text-[#6237A0] mx-auto mb-2" size={32} />
                    <h4 className="text-2xl font-bold text-[#28104E]">5K+</h4>
                    <p className="text-[#6237A0] text-sm">Happy Patients</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dr. Sunil brings over 12 years of specialized experience in orthopaedic and sports physiotherapy. He
                  has successfully treated thousands of patients, helping them recover from various conditions and
                  achieve their optimal physical health goals.
                </p>

                <ul className="text-gray-600 mb-8 space-y-2">
                  <li>• Specialized in Orthopaedic Physiotherapy</li>
                  <li>• Expert in Sports Injury Rehabilitation</li>
                  <li>• Advanced Trigger Point Therapy Techniques</li>
                  <li>• Postural Correction Specialist</li>
                </ul>

                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
                >
                  <MessageCircle size={20} />
                  Consult Dr. Sunil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have experienced the difference our expert care makes. Book your
            consultation today and take the first step towards a pain-free life.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
