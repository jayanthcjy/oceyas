"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, CheckCircle, AlertTriangle, Target, Monitor, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PostureCorrectionPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  const symptoms = [
    "Forward head posture",
    "Rounded shoulders",
    "Upper back pain and stiffness",
    "Neck pain and tension",
    "Headaches from poor posture",
    "Lower back pain from sitting",
    "Muscle imbalances",
    "Fatigue from poor alignment",
  ]

  const treatments = [
    "Ergonomic workspace assessment",
    "Postural correction exercises",
    "Strengthening weak muscles",
    "Stretching tight muscle groups",
    "Movement pattern retraining",
    "Workplace ergonomics education",
    "Daily posture awareness training",
    "Long-term maintenance strategies",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#DEACF5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Posture Correction</h1>
              <p className="text-xl text-[#6237A0] mb-8 leading-relaxed">
                Specialized programs for IT professionals and desk workers to prevent and correct postural issues for
                better health and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <MessageCircle size={20} />
                  Book Posture Assessment
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
                src={IMAGES.serviceDetails.postureCorrectionDetail || "/placeholder.svg"}
                alt="Posture Correction for IT Professionals"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Posture Correction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">What is Posture Correction?</h2>
            <p className="text-[#6237A0] text-lg leading-relaxed">
              Posture correction is a specialized physiotherapy approach designed to address and correct poor postural
              habits, especially common among IT professionals and desk workers. Our program focuses on realigning your
              body to its natural, healthy position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Workspace Analysis</h3>
              <p className="text-[#6237A0]">
                Comprehensive evaluation of your work environment and daily habits that contribute to poor posture.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Targeted Correction</h3>
              <p className="text-[#6237A0]">
                Specific exercises and techniques to address muscle imbalances and restore proper alignment.
              </p>
            </div>
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Lifestyle Integration</h3>
              <p className="text-[#6237A0]">
                Practical strategies to maintain good posture throughout your workday and daily activities.
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Common Postural Problems</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                Modern work environments often lead to these common postural issues. Our specialized program addresses
                each of these problems with targeted interventions.
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
                src={IMAGES.services.postureCorrection || "/placeholder.svg"}
                alt="Common Postural Problems in IT Workers"
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
                alt="Dr. Sunil providing posture correction therapy"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Our Treatment Approach</h2>
              <p className="text-[#6237A0] text-lg mb-8 leading-relaxed">
                We use a specialized approach to posture correction that combines ergonomic assessment, targeted
                exercises, and lifestyle modifications to create lasting improvements in your posture and overall
                well-being.
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Benefits of Posture Correction</h2>
          <p className="text-[#6237A0] text-lg mb-12 leading-relaxed">
            Experience improved health, productivity, and confidence with better posture
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Reduced Pain</h3>
              <p className="text-[#6237A0]">Less neck, shoulder, and back pain from poor posture</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Better Productivity</h3>
              <p className="text-[#6237A0]">Improved focus and energy levels at work</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Enhanced Confidence</h3>
              <p className="text-[#6237A0]">Better appearance and self-confidence</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Improved Breathing</h3>
              <p className="text-[#6237A0]">Better lung capacity and oxygen flow</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Long-term Health</h3>
              <p className="text-[#6237A0]">Prevention of future musculoskeletal problems</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Better Sleep</h3>
              <p className="text-[#6237A0]">Reduced tension leading to improved sleep quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Transform Your Posture Today</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Don't let poor posture affect your health and productivity. Book a consultation with Dr. Sunil and discover
            how our specialized posture correction program can help you achieve better alignment and improved
            well-being.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Posture Assessment
          </button>
        </div>
      </section>
    </div>
  )
}
