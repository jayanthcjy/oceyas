"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Target, Zap, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TriggerPointTherapyPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  const symptoms = [
    "Muscle knots and tight spots",
    "Referred pain patterns",
    "Chronic muscle tension",
    "Limited range of motion",
    "Muscle stiffness and soreness",
    "Headaches from muscle tension",
    "Sleep disturbances from pain",
    "Reduced athletic performance",
  ]

  const treatments = [
    "Trigger point identification and mapping",
    "Manual pressure point release",
    "Dry needling techniques",
    "Myofascial release therapy",
    "Stretching and mobility exercises",
    "Self-treatment education",
    "Posture and movement correction",
    "Preventive maintenance strategies",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-oceyas">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-oceyas-deepBlue mb-6">Trigger Point Therapy</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Deep tissue work to release muscle knots and restore mobility through targeted pressure point techniques
                and myofascial release.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Trigger Point Session
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
                src={IMAGES.serviceDetails.myofascialDetail || "/placeholder.svg"}
                alt="Trigger Point Therapy Treatment"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Trigger Point Therapy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">What is Trigger Point Therapy?</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Trigger point therapy is a specialized treatment that focuses on identifying and releasing trigger points
              - tight areas within muscle tissue that cause pain in other parts of the body. This therapy combines
              manual techniques with modern approaches to provide effective relief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Precise Identification</h3>
              <p className="text-[#6237A0]">
                Expert identification of trigger points and their referred pain patterns for targeted treatment.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Effective Release</h3>
              <p className="text-[#6237A0]">
                Multiple techniques including manual pressure, dry needling, and myofascial release.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Lasting Results</h3>
              <p className="text-[#6237A0]">
                Long-term relief through comprehensive treatment and self-care education.
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">
                Signs You Need Trigger Point Therapy
              </h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Trigger points can cause a variety of symptoms that may seem unrelated to muscle problems. Our therapy
                addresses these issues at their source.
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
                src={IMAGES.services.myofascial || "/placeholder.svg"}
                alt="Trigger Point Therapy Symptoms"
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
                alt="Dr. Sunil performing trigger point therapy"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Treatment Methods</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                We offer advanced trigger point therapy in Bangalore to relieve muscle knots and chronic pain. Our
                expert physiotherapy techniques ensure lasting relief and improved mobility
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Benefits of Trigger Point Therapy</h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Experience immediate and long-term relief from muscle tension and pain
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Immediate Relief</h3>
              <p className="text-[#6237A0]">Quick reduction in muscle tension and pain</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Improved Mobility</h3>
              <p className="text-[#6237A0]">Enhanced range of motion and flexibility</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Better Sleep</h3>
              <p className="text-[#6237A0]">Reduced pain leading to improved sleep quality</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Enhanced Performance</h3>
              <p className="text-[#6237A0]">Better athletic and daily performance</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Stress Reduction</h3>
              <p className="text-[#6237A0]">Lower stress levels and improved well-being</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Long-term Prevention</h3>
              <p className="text-[#6237A0]">Reduced risk of future muscle problems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Release Your Muscle Tension</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Don't let muscle knots and trigger points limit your daily activities. Book a consultation with Dr. Sunil
            and experience the relief that targeted trigger point therapy can provide.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Trigger Point Session
          </button>
        </div>
      </section>
    </div>
  )
}
