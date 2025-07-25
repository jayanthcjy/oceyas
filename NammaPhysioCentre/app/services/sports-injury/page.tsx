"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Target, Trophy, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SportsInjuryPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  const symptoms = [
    "Acute sports injuries",
    "Chronic overuse injuries",
    "Joint pain and swelling",
    "Muscle strains and sprains",
    "Ligament and tendon injuries",
    "Reduced athletic performance",
    "Recurring injury patterns",
    "Post-injury stiffness",
  ]

  const treatments = [
    "Comprehensive injury assessment",
    "Acute injury management",
    "Progressive rehabilitation programs",
    "Strength and conditioning",
    "Movement pattern analysis",
    "Sport-specific training",
    "Injury prevention strategies",
    "Return-to-sport protocols",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Sports Injury Recovery</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Expert care for athletic injuries and performance optimization. Get back to your sport stronger and
                safer with our specialized rehabilitation programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Sports Rehab Session
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
                src={IMAGES.serviceDetails.sportsInjuryDetail || "/placeholder.svg"}
                alt="Sports Injury Rehabilitation"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Sports Injury Rehabilitation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Sports Injury Rehabilitation</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Sports injury rehabilitation is a specialized field of physiotherapy that focuses on helping athletes and
              active individuals recover from injuries, prevent future injuries, and optimize their performance. Our
              approach combines evidence-based treatment with sport-specific training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Injury Assessment</h3>
              <p className="text-[#6237A0]">
                Thorough evaluation of injury mechanism, severity, and impact on athletic performance.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Progressive Rehab</h3>
              <p className="text-[#6237A0]">
                Structured rehabilitation programs that gradually restore function and performance.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Performance Optimization</h3>
              <p className="text-[#6237A0]">
                Return to sport stronger with enhanced performance and injury prevention strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Sports Injuries */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Common Sports Injuries We Treat</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                From acute injuries to chronic overuse conditions, our specialized sports injury program addresses a
                wide range of athletic injuries with expert care and proven techniques.
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
                src={IMAGES.services.sportsInjury || "/placeholder.svg"}
                alt="Common Sports Injuries"
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
                alt="Dr. Sunil providing sports injury treatment"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Sports Rehab Approach</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                We specialize in sports physiotherapy in Bangalore, providing comprehensive care from injury assessment
                to return-to-sport. Our expert treatment focuses on injury prevention and performance optimization for
                athletes.
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">
            Benefits of Sports Injury Rehabilitation
          </h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Return to your sport stronger, faster, and with reduced risk of re-injury
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Faster Recovery</h3>
              <p className="text-[#6237A0]">Accelerated healing through targeted rehabilitation</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Enhanced Performance</h3>
              <p className="text-[#6237A0]">Return to sport with improved strength and skills</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Injury Prevention</h3>
              <p className="text-[#6237A0]">Reduced risk of future injuries and re-injury</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Confidence Building</h3>
              <p className="text-[#6237A0]">Mental confidence to return to competitive sport</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Optimal Function</h3>
              <p className="text-[#6237A0]">Restored and enhanced physical function</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Long-term Health</h3>
              <p className="text-[#6237A0]">Sustainable athletic career and joint health</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Get Back in the Game</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Don't let a sports injury sideline your passion. Book a consultation with Dr. Sunil and start your journey
            back to peak athletic performance with our specialized sports injury rehabilitation program.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Sports Rehab Session
          </button>
        </div>
      </section>
    </div>
  )
}
