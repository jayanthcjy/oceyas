"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { 
  MessageCircle, 
  Activity, 
  Shield, 
  Target, 
  Users, 
  TrendingUp, 
  Zap,
  CheckCircle,
  Star, 
  Heart 
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function SpineCarePage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  // Custom hook for scroll animations
  const useScrollAnimation = () => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => observer.disconnect()
    }, [])

    return [ref, isVisible]
  }

  const commonConditions = [
    {
      title: "Lower Back Pain",
      description: "Chronic and acute lumbar spine pain relief",
      icon: Activity
    },
    {
      title: "Disc Problems",
      description: "Herniated and bulging disc treatment",
      icon: Shield
    },
    {
      title: "Cervical Spine Issues",
      description: "Neck pain and cervical spine disorders",
      icon: Target
    },
    {
      title: "Sciatica",
      description: "Sciatic nerve pain and leg symptoms",
      icon: TrendingUp
    },
    {
      title: "Spinal Stenosis",
      description: "Narrowing of spinal canal treatment",
      icon: Users
    },
    {
      title: "Post-Surgery Care",
      description: "Rehabilitation after spinal surgery",
      icon: Zap
    }
  ]

  const treatments = [
    "Comprehensive spinal assessment",
    "Manual therapy and spinal mobilization",
    "Core strengthening programs",
    "Postural education and correction",
    "Pain management techniques",
    "Movement re-education and ergonomics"
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-[#C7DDEB] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-left opacity-0">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2B4470] mb-4 leading-tight">
                Spine Care & Treatment
              </h1>
              <p className="text-lg text-[#348AC7] mb-6 leading-relaxed">
                Comprehensive spine care services for back and neck pain relief. 
                Expert treatment for spinal conditions with personalized rehabilitation programs.
              </p>
              <div className="flex justify-center sm:justify-start">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
                >
                  <MessageCircle size={18} />
                  Book Spine Care
                </button>
              </div>
            </div>
            <div className="relative animate-fade-in-right opacity-0">
              <Image
                src={IMAGES.serviceDetails.spinecareDetail || "/placeholder.svg"}
                alt="Spine Care & Treatment Services"
                width={500}
                height={350}
                className="rounded-2xl shadow-xl object-cover w-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Conditions Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up opacity-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B4470] mb-4">
              Spinal Conditions We Treat
            </h2>
            <p className="text-[#348AC7] text-base max-w-2xl mx-auto">
              Expert treatment for various spinal conditions using evidence-based 
              physiotherapy techniques to restore function and reduce pain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {commonConditions.map((condition, index) => {
              const IconComponent = condition.icon
              const [ref, isVisible] = useScrollAnimation()
              
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`bg-[#C7DDEB] p-4 md:p-6 rounded-2xl hover:shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 group cursor-pointer ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent 
                      size={32} 
                      className="text-[#348AC7] group-hover:text-[#2B4470] transition-colors duration-300 group-hover:scale-125" 
                    />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-[#2B4470] mb-2 text-center group-hover:text-[#348AC7] transition-colors duration-300">
                    {condition.title}
                  </h3>
                  <p className="text-[#348AC7] text-xs md:text-sm text-center hidden md:block">
                    {condition.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-12 px-4 bg-[#C7DDEB]">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up opacity-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B4470] mb-4 text-center">
              Our Spine Care Approach
            </h2>
            <p className="text-[#348AC7] text-base mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              Comprehensive spine care combining manual therapy, exercise therapy, 
              and education to achieve lasting pain relief and improved function.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {treatments.map((treatment, index) => {
                const [ref, isVisible] = useScrollAnimation()
                
                return (
                  <div 
                    key={index}
                    ref={ref}
                    className={`flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-500 hover:translate-x-2 group cursor-pointer ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <CheckCircle 
                      size={18} 
                      className="text-green-500 flex-shrink-0 group-hover:text-green-600 group-hover:scale-125 transition-all duration-300" 
                    />
                    <span className="text-[#2B4470] text-sm font-medium group-hover:text-[#348AC7] transition-colors duration-300">
                      {treatment}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B4470] mb-4">
              Why Choose Our Spine Care Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "Expert Assessment", desc: "Comprehensive spinal evaluation and diagnosis" },
              { icon: Heart, title: "Pain Relief Focus", desc: "Targeted treatment for lasting pain relief" },
              { icon: Shield, title: "Prevent Recurrence", desc: "Education and exercises to prevent future issues" }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              const [ref, isVisible] = useScrollAnimation()
              
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`bg-[#C7DDEB] p-6 rounded-2xl hover:shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 group cursor-pointer ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent 
                      className="text-[#348AC7] group-hover:text-[#2B4470] group-hover:scale-125 transition-all duration-300" 
                      size={24} 
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B4470] mb-2 group-hover:text-[#348AC7] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[#348AC7] text-sm group-hover:text-[#2B4470] transition-colors duration-300">
                    {benefit.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-[#C7DDEB]">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up opacity-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B4470] mb-4">
            Ready for Expert Spine Care?
          </h2>
          <p className="text-[#348AC7] text-base mb-6 max-w-2xl mx-auto">
            Don't let back or neck pain limit your life. Get professional spine care 
            treatment and start your journey to pain-free living.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-110 animate-bounce"
          >
            <MessageCircle size={24} />
            Get Spine Treatment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B4470] text-white py-8 px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up opacity-0">
          <h3 className="text-lg font-bold mb-2">Oceyas Physiotherapy & Rehab clinic</h3>
          <p className="text-[#C7DDEB] text-sm mb-4">
            Expert spine care and treatment for lasting pain relief
          </p>
          <p className="text-[#C7DDEB] text-xs">
            © Oceyas Physiotherapy & Rehab clinic. All rights reserved.
          </p>
        </div>
      </footer>

      {/* SINGLE STYLE BLOCK */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out 0.2s forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.4s forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s forwards;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
