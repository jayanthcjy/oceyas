"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, MapPin, Clock, MessageCircle, Star, Users, Award, Calendar, Quote, ChevronRight, ChevronLeft, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"

import { IMAGES, WHATSAPP_CONFIG, MAPS_CONFIG } from "@/config/images"

const useScrollAnimation = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible]
}

const TestimonialGalleryItem = ({ index, onClick }: { index: number; onClick: (index: number) => void }) => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`flex-shrink-0 w-64 h-64 relative group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
      onClick={() => onClick(index)}
    >
      <div className="w-full h-full bg-[#C7DDEB] rounded-2xl overflow-hidden relative animate-floatGentle">
        <Image
          src={(IMAGES.testimonials as any)?.[`testimonial${index + 1}`] || "/placeholder.svg"}
          alt={`Patient Testimonial ${index + 1}`}
          width={256}
          height={256}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />


        
      </div>
    </div>
  )
}

const FullViewModal = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
    <div className="relative max-w-4xl max-h-[90vh] w-full h-full animate-scaleIn">
      <Image
        src={src}
        alt="Enlarged testimonial"
        layout="fill"
        objectFit="contain"
        className="rounded-lg"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/30 transition-all duration-300"
      >
        <X size={24} />
      </button>
    </div>
  </div>
);


export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [userName, setUserName] = useState("")
  const [userProblem, setUserProblem] = useState("")
  const [nameError, setNameError] = useState("")
  const [problemError, setProblemError] = useState("")
  const sliderRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState<number | null>(null);

  const heroSlides = [
    {
      title: "HomeCare Physio",
      image: IMAGES.hero.homecare,
      description: "Physiotherapy care at your home",
    },
    {
      title: "Spine Care",
      image: IMAGES.hero.spinecare,
      description: "Expert spinal alignment and back pain relief",
    },
    {
      title: "Sports Injury",
      image: IMAGES.hero.sportsInjury,
      description: "Athletic recovery and performance",
    },
    {
      title: "Posture Correction",
      image: IMAGES.hero.postureCorrection,
      description: "Perfect posture for IT professionals",
    },
    
    
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      review:
        "Dr. Sunil's treatment completely transformed my chronic back pain. After 12+ years of experience, he knows exactly what works!",
      rating: 5,
      condition: "Back Pain Relief",
    },
    {
      name: "Priya Sharma",
      review: "Amazing posture correction program! As an IT professional, this therapy saved my career and health.",
      rating: 5,
      condition: "Posture Correction",
    },
    {
      name: "Arjun Vanas",
      review: "Sports injury recovery was faster than expected. Professional approach and excellent results!",
      rating: 5,
      condition: "Sports Injury",
    },
    {
      name: "Meera Patel",
      review: "Online sessions were so convenient and effective. Highly recommend Oceyas Physiotherapy & Rehab clinic!",
      rating: 5,
      condition: "Online Therapy",
    },
  ]

  const whyUsFeatures = [
    {
      title: "Root Cause Identification",
      description: "We don't just treat pain, we find what's causing problem.",
      number: "1",
    },
    {
      title: "Precision Treatment",
      description: "Personalized therapy plans tailored to your body and goals.",
      number: "2",
    },
    {
      title: "Progress Monitoring",
      description: "We track your recovery and adjust in real-time for results.",
      number: "3",
    },
  ]

  const services = [
    {
      title: "Physio and Rehab",
      description: "Personalized therapy to restore movement faster",
      href: "/services/physio&rehab",
      image: IMAGES.serviceDetails.rehabDetail,
    },
    {
      title: "Home Care Physio",
      description: "Expert physiotherapy delivered at home",
      href: "/services/home-care-physio",
      image: IMAGES.serviceDetails.homecare,
    },
    {
      title: "Home Nursing",
      description: "Professional nursing support for daily recovery",
      href: "/services/home-nursing",
      image: IMAGES.serviceDetails.myofascialDetail,
    },
    {
      title: "Care Taker",
      description: "Compassionate assistance for comfort and safety",
      href: "/services/care-taker",
      image: IMAGES.serviceDetails.acupunctureDetail,
    },
    {
      title: "Sports Injury",
      description: "Targeted rehab to return to play.",
      href: "/services/sports-injury",
      image: IMAGES.serviceDetails.sportsInjuryDetail,
    },
    {
      title: "Spine Care",
      description: "Evidence‑based treatment for lasting back relief",
      href: "/services/spine-care",
      image: IMAGES.serviceDetails.spinecareDetail,
    },
    // Add more services as needed
      {
      title: "Posture Correction",  

      description: "Improve your posture for better health and confidence",
      href: "/services/posture-correction",
      image: IMAGES.serviceDetails.postureCorrectionDetail,
    },
    {   
      title: "Diabetes Wound Healing",
      description: "Specialized care to promote diabetic wound healing",
      href: "/services/diabetes-wound-healing",
      image: IMAGES.serviceDetails.diabetesWoundHealingDetail,
    },
    {
      title: "Varicose Vein Treatment",
      description: "Effective treatment and relief for varicose veins",
      href: "/services/varicose-vein-treatment",    
      image: IMAGES.serviceDetails.varicoseVeinDetail,
    }
  ]

  // Auto-scroll functionality for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  // Auto-scroll functionality for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Scroll to current slide
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth
      sliderRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentSlide])

  // Scroll to current testimonial
  useEffect(() => {
    if (testimonialRef.current) {
      const slideWidth = testimonialRef.current.offsetWidth
      testimonialRef.current.scrollTo({
        left: currentTestimonial * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentTestimonial])

  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <style jsx>{`
        @keyframes whatsappPulse {
          0% { background-color: #D04A6B; transform: scale(1); }
          50% { background-color: #25D366; transform: scale(1.05); }
          100% { background-color: #D04A6B; transform: scale(1); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(52, 138, 199, 0.4); }
          50% { box-shadow: 0 0 30px rgba(52, 138, 199, 0.8); }
          100% { box-shadow: 0 0 20px rgba(52, 138, 199, 0.4); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .whatsapp-button {
          animation: whatsappPulse 2s infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background: linear-gradient(-45deg, #2B4470, #348AC7, #C7DDEB, #348AC7);
          background-size: 400% 400%;
          animation: gradientShift 4s ease infinite;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        .scroll-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(43, 68, 112, 0.15);
        }
        
        .parallax {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>

      {/* Hero Section with Horizontal Slider */}
      <section className="relative overflow-hidden animate-gradient">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full snap-start relative">
              <div className="relative h-[350px] md:h-[500px]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover parallax transition-transform duration-700 ease-out"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B4470]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-4 right-4 text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 animate-fadeInLeft">{slide.title}</h2>
                  <p className="text-sm md:text-lg text-[#C7DDEB] mb-4 animate-fadeInRight stagger-2">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                index === currentSlide ? "bg-[#348AC7] animate-glow" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Floating elements for premium look */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/5 rounded-full animate-float stagger-3"></div>
      </section>

      {/* Booking Form Section - Compact and Attractive */}
<section className="py-6 bg-gradient-to-br from-[#C7DDEB] to-white">
  <div className="max-w-4xl mx-auto px-4">
    <div className="bg-white/95 rounded-2xl shadow-xl border-2 border-[#348AC7]/20 p-4 md:p-6 hover-lift animate-scaleIn backdrop-blur-sm">
      <div className="grid md:grid-cols-5 gap-4 items-end">
        {/* Left Section - Compact */}
        <div className="md:col-span-2 animate-fadeInLeft">
          <h2 className="text-xl md:text-2xl font-bold text-[#2B4470] mb-1">
            Schedule your session
          </h2>
          <p className="text-[#348AC7] text-sm mb-3 md:mb-0">
            Quick booking form
          </p>
        </div>
        
        {/* Form Fields - More Compact */}
        <div className="md:col-span-3 animate-fadeInRight stagger-2">
          <div className="grid md:grid-cols-3 gap-3">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                id="userName"
                onChange={(e) => {
                  setUserName(e.target.value);
                  setNameError("");
                }}
                value={userName}
                className={`w-full px-3 py-2.5 text-sm rounded-2xl border ${nameError ? 'border-red-500' : 'border-[#348AC7]/40'} focus:outline-none focus:border-[#2B4470] focus:ring-2 focus:ring-[#348AC7]/20 bg-white text-[#2B4470] transition-all duration-300`}
              />
              {nameError && <p className="text-red-500 text-xs mt-1 animate-fadeInUp">{nameError}</p>}
            </div>
            
            {/* Problem Input */}
            <div>
              <input
                type="text"
                placeholder="Brief problem description"
                id="userProblem"
                onChange={(e) => {
                  setUserProblem(e.target.value);
                  setProblemError("");
                }}
                value={userProblem}
                className={`w-full px-3 py-2.5 text-sm rounded-2xl border ${problemError ? 'border-red-500' : 'border-[#348AC7]/40'} focus:outline-none focus:border-[#2B4470] focus:ring-2 focus:ring-[#348AC7]/20 bg-white text-[#2B4470] transition-all duration-300`}
              />
              {problemError && <p className="text-red-500 text-xs mt-1 animate-fadeInUp">{problemError}</p>}
            </div>
            
            {/* Book Now Button */}
            <div>
              <button
                onClick={() => {
                  let isValid = true;
                  if (!userName) {
                    setNameError("Name required");
                    isValid = false;
                  }
                  if (!userProblem) {
                    setProblemError("Problem required");
                    isValid = false;
                  }
                  if (isValid) {
                    window.open(
                      `https://wa.me/918075554529?text=${encodeURIComponent(
                        `Hi, my name is ${userName} and my problem is ${userProblem}`
                      )}`,
                      "_blank"
                    );
                  }
                }}
                className="w-full whatsapp-button text-white px-4 py-2.5 text-sm font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle size={16} className="animate-wiggle" />
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats Row - Added for attractiveness */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-[#348AC7]/10">
        <div className="text-center animate-scaleIn stagger-1">
          <div className="flex items-center justify-center gap-1 text-[#348AC7] mb-1">
            <Clock size={14} />
            <span className="text-xs font-medium">Quick Response</span>
          </div>
          <p className="text-xs text-gray-600">Within 30 mins</p>
        </div>
        <div className="text-center animate-scaleIn stagger-2">
          <div className="flex items-center justify-center gap-1 text-[#348AC7] mb-1">
            <Users size={14} />
            <span className="text-xs font-medium">5000+ Patients</span>
          </div>
          <p className="text-xs text-gray-600">Successfully treated</p>
        </div>
        <div className="text-center animate-scaleIn stagger-3">
          <div className="flex items-center justify-center gap-1 text-[#348AC7] mb-1">
            <Award size={14} />
            <span className="text-xs font-medium">12+ Years</span>
          </div>
          <p className="text-xs text-gray-600">Experience</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why Us Section - Compressed */}
<section className="py-10 px-4 bg-[#C7DDEB] relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#348AC7]/20 to-transparent rounded-full animate-floatSlow"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#2B4470]/10 to-transparent rounded-full animate-floatGentle stagger-4"></div>
  
  <div className="max-w-5xl mx-auto relative z-10">
    <div className="text-center mb-8 animate-slideInDown">
      <h2 className="text-2xl md:text-3xl font-bold text-[#2B4470] mb-2">Why Choose Us</h2>
      <p className="text-[#348AC7] text-sm max-w-xl mx-auto">
        Our proven methodology ensures the best outcomes for your recovery journey
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {whyUsFeatures.map((feature, index) => (
        <div key={index} className={`text-center hover-lift animate-fadeInUp stagger-${index + 1}`}>
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-[#348AC7] rounded-full flex items-center justify-center animate-floatSlow">
                <span className="text-white text-lg font-bold">{feature.number}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#2B4470] mb-2">{feature.title}</h3>
            <p className="text-[#348AC7] text-xs leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center animate-fadeInUp stagger-4">
      <button
        onClick={handleWhatsApp}
        className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-500 flex items-center gap-2 mx-auto hover:scale-110 animate-pulse"
      >
        <Calendar size={18} className="animate-sway" />
        Book Your Session
      </button>
    </div>
  </div>
</section>

{/* Services Section */}
<section className="py-12 px-4 bg-white relative">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 animate-slideInDown">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2B4470]">Our Services</h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Original Services */}
      {services.map((service, index) => (
        <Link key={index} href={service.href}>
          <div className={`relative group h-[200px] md:h-[400px] rounded-xl overflow-hidden hover-lift animate-scaleIn stagger-${index % 3 + 1}`}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B4470]/90 via-[#2B4470]/50 to-transparent transition-all duration-500 group-hover:from-[#348AC7]/90" />
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 text-white transform transition-all duration-500 group-hover:translate-y-[-10px]">
              <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-[#C7DDEB] transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-[#C7DDEB] group-hover:text-white transition-all duration-300 line-clamp-2">
                {service.description}
              </p>
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
          </div>
        </Link>
      ))}
    </div>
      
    {/* Other Services Section */}
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2B4470] mb-2">Other Services</h3>
        <p className="text-[#348AC7] text-lg">Additional healthcare and support services</p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Link href="/services/overseas-medicine-admissions">
            <div className="relative group h-[200px] md:h-[400px] rounded-xl overflow-hidden hover-lift animate-scaleIn">
              <Image
                src={IMAGES.serviceDetails.overseasMedicineDetail || "/placeholder.svg"}
                alt="Overseas Medicine Admissions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B4470]/90 via-[#2B4470]/50 to-transparent transition-all duration-500 group-hover:from-[#348AC7]/90" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 text-white transform transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-[#C7DDEB] transition-all duration-300">
                  Overseas Medicine Admissions
                </h3>
                <p className="text-xs md:text-sm text-[#C7DDEB] group-hover:text-white transition-all duration-300 line-clamp-2">
                  Expert guidance for medical studies abroad
                </p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Testimonial Gallery Section */}
<section className="py-12 px-4 bg-[#C7DDEB] relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 right-1/4 w-20 h-20 bg-white/20 rounded-full animate-floatSlow"></div>
  <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-[#348AC7]/10 rounded-full animate-sway"></div>
  
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 animate-slideInDown">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2B4470]">Testimonial Gallery</h2>
    </div>
    {/* Header */}
    <div className="text-center mb-10 animate-fade-in-up">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Quote className="text-[#348AC7] animate-pulse" size={24} />
        <h2 className="text-2xl md:text-3xl font-bold text-[#2B4470]">
          Patient Testimonials
        </h2>
        <Quote className="text-[#348AC7] animate-pulse transform rotate-180" size={24} />
      </div>
      <p className="text-[#348AC7] text-base max-w-2xl mx-auto">
        Real stories from our patients showcasing their recovery journey 
        and positive experiences with our treatments
      </p>
    </div>

    {/* Testimonial Gallery */}
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => {
          const container = document.getElementById('testimonial-scroll')
          if (container) {
            container.scrollBy({ left: -280, behavior: 'smooth' })
          }
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 text-[#348AC7] hover:bg-[#C7DDEB] cursor-pointer"
        style={{ transform: 'translateY(-50%) translateX(-50%)' }}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => {
          const container = document.getElementById('testimonial-scroll')
          if (container) {
            container.scrollBy({ left: 280, behavior: 'smooth' })
          }
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 text-[#348AC7] hover:bg-[#C7DDEB] cursor-pointer"
        style={{ transform: 'translateY(-50%) translateX(50%)' }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrollable Container */}
      <div
        id="testimonial-scroll"
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Generate 13 testimonial cards */}
        {Array.from({ length: 13 }, (_, index) => (
          <TestimonialGalleryItem key={index} index={index} onClick={setSelectedTestimonialIndex} />
        ))}
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-8 animate-fade-in-up">
      <p className="text-[#348AC7] text-sm mb-4">
        Join hundreds of satisfied patients who have transformed their lives
      </p>
      <button
        onClick={handleWhatsApp}
        className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse flex items-center gap-2 mx-auto"
      >
        <MessageCircle size={18} />
        Share Your Story
      </button>
    </div>
  </div>
</section>


 {/* Testimonials Section - Google Reviews Style */}
<section className="py-16 px-4 animate-gradient relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[#2B4470]/90 to-[#348AC7]/90"></div>
  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center mb-12 animate-slideInDown">
      <div className="flex items-center justify-center gap-3 mb-4">
        {/* Google Logo */}
        <svg width="48" height="48" viewBox="0 0 48 48" className="animate-floatGentle">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Google Reviews</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-[#F4E883] fill-current" />
              ))}
            </div>
            <span className="text-[#C7DDEB] text-sm font-medium">4.9 out of 5</span>
          </div>
        </div>
      </div>
      <p className="text-[#C7DDEB] text-lg">Real stories from our satisfied patients</p>
    </div>

    <div className="relative">
      <div
        ref={testimonialRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`min-w-[300px] md:min-w-[350px] snap-start animate-fadeInUp ${
            index % 2 === 0 ? 'animate-floatGentle' : ''
          } stagger-${index + 1}`}>
            <div className="bg-white rounded-2xl p-6 shadow-xl h-full hover-lift transition-all duration-500 hover:shadow-2xl">
              {/* Google Review Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#348AC7] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2B4470] text-sm">{testimonial.name}</h4>
                    <p className="text-[#348AC7] text-xs">{testimonial.condition}</p>
                  </div>
                </div>
                <div className="text-right">
                  <svg width="16" height="16" viewBox="0 0 48 48" className="mb-1">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                  <p className="text-xs text-gray-500">Posted on Google</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className={`text-[#F4E883] fill-current ${
                    i % 2 === 0 ? 'animate-bounce' : 'animate-wiggle'
                  } stagger-${i + 1}`} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">"{testimonial.review}"</p>
              
              {/* Google Review Footer */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Verified Google Review</span>
                  <span>2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-150 ${
              index === currentTestimonial ? "bg-[#348AC7] animate-pulse" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Doctor Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#C7DDEB]/30 to-transparent rounded-full animate-float"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slideInDown">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4470] mb-4">Meet Our Expert</h2>
            <p className="text-[#348AC7] text-lg">Experienced physiotherapist dedicated to your recovery</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fadeInLeft">
              <div className="relative">
                <Image
                  src={IMAGES.doctor.drSunil || "/placeholder.svg"}
                  alt="Dr. Ram Kumar - Orthopaedic and Sports Physiotherapy"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover w-full max-w-[250px] md:max-w-[300px] mx-auto hover-lift transition-all duration-500"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#348AC7]/20 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#D04A6B]/20 rounded-full animate-float"></div>
              </div>
            </div>

            <div className="animate-fadeInRight stagger-2">
              <h3 className="text-3xl font-bold text-[#2B4470] mb-2">Dr. Ram Kumar</h3>
              <p className="text-xl text-[#348AC7] mb-6">Orthopaedic and Sports Physiotherapy</p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 12 years of experience in physiotherapy, Dr. Ram Kumar specializes in orthopaedic and sports
                physiotherapy. He has helped thousands of patients recover from various conditions and achieve optimal
                physical health through personalized treatment plans.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-[#C7DDEB] rounded-xl hover-lift animate-scaleIn stagger-1">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="text-[#348AC7] animate-bounce" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2B4470]">12+</h4>
                  <p className="text-[#348AC7] text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-[#C7DDEB] rounded-xl hover-lift animate-scaleIn stagger-2">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="text-[#348AC7] animate-bounce" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#2B4470]">5K+</h4>
                  <p className="text-[#348AC7] text-sm">Happy Customers</p>
                </div>
              </div>

              <button
                onClick={handleWhatsApp}
                className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 flex items-center gap-3 hover:scale-110 hover:shadow-xl"
              >
                <MessageCircle size={20} className="animate-bounce" />
                Consult Dr. Ram Kumar
              </button>
            </div>
          </div>
        </div>
      </section>

     {/* Location Map Section - Compressed */}
<section className="py-10 px-4 bg-[#C7DDEB] relative overflow-hidden">
  <div className="absolute top-0 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-floatSlow"></div>
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-8 animate-slideInDown">
      <h2 className="text-xl md:text-2xl font-bold text-[#2B4470] mb-2">Visit Our Clinic</h2>
      <p className="text-[#348AC7] text-sm">Conveniently located for easy access</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="animate-fadeInLeft">
        <h3 className="text-lg md:text-xl font-bold text-[#2B4470] mb-5">Find Us Here</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 hover-lift transition-all duration-300 animate-floatGentle">
            <div className="bg-[#348AC7] p-2.5 rounded-full animate-pulse">
              <MapPin className="text-white" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[#2B4470] text-sm">Address</h4>
              <p className="text-[#348AC7] text-sm">Oceyas Physiotherapy & Rehab clinic, Bangalore</p>
            </div>
          </div>
          <div className="flex items-center gap-3 hover-lift transition-all duration-300 animate-sway">
            <div className="bg-[#348AC7] p-2.5 rounded-full animate-wiggle">
              <Phone className="text-white" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[#2B4470] text-sm">Phone</h4>
              <p className="text-[#348AC7] text-sm">+91 8075554529</p>
            </div>
          </div>
          <div className="flex items-center gap-3 hover-lift transition-all duration-300 animate-floatSlow">
            <div className="bg-[#348AC7] p-2.5 rounded-full animate-pulse">
              <Clock className="text-white" size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[#2B4470] text-sm">Hours</h4>
              <p className="text-[#348AC7] text-sm">Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsApp}
            className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-500 flex items-center justify-center gap-2 hover:scale-110"
          >
            <MessageCircle size={18} className="animate-floatGentle" />
            Get Directions
          </button>
          <a
            href={MAPS_CONFIG.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#348AC7] border-2 border-[#348AC7] hover:bg-[#348AC7] hover:text-white px-5 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-500 flex items-center justify-center gap-2 hover:scale-110"
          >
            <MapPin size={18} />
            Open in Maps
          </a>
        </div>
      </div>

      <div className="relative h-[220px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl hover-lift animate-fadeInRight animate-floatSlow stagger-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939601.6441459893!2d77.83495749256022!3d15.362007070487993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1118a13a0831%3A0xac912a9695733139!2sOCEYAS%20PHYSIOTHERAPY%20%26%20REHAB%20CLINIC!5e0!3m2!1sen!2sin!4v1756984728381!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>

      
      {/* Footer */}
      <footer className="bg-[#2B4470] text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 animate-gradient"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-bold mb-4">Oceyas Physiotherapy & Rehab clinic</h3>
              <p className="text-[#C7DDEB] mb-4">
                Your trusted partner in physiotherapy and rehabilitation. Expert care for lasting recovery and optimal
                health with Dr. Ram Kumar's 12+ years of experience.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#D04A6B] hover:bg-[#348AC7] px-6 py-3 rounded-full font-medium transition-all duration-500 flex items-center gap-2 hover:scale-110"
              >
                <MessageCircle size={20} className="animate-bounce" />
                WhatsApp Us
              </button>
            </div>
            <div className="animate-fadeInUp stagger-2">
              <h4 className="text-lg font-semibold mb-4 text-[#C7DDEB]">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#F4E883] transition-all duration-300 hover:translate-x-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#F4E883] transition-all duration-300 hover:translate-x-2">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#F4E883] transition-all duration-300 hover:translate-x-2">
                    Contact
                  </Link>
                </li>
                <li>
                  <button onClick={handleWhatsApp} className="hover:text-[#F4E883] transition-all duration-300 hover:translate-x-2">
                    Book Appointment
                  </button>
                </li>
              </ul>
            </div>
            <div className="animate-fadeInRight stagger-3">
              <h4 className="text-lg font-semibold mb-4 text-[#C7DDEB]">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Phone size={18} className="text-[#348AC7]" />
                  <span>+91 8075554529</span>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <MapPin size={18} className="text-[#348AC7]" />
                  <span>Oceyas Physiotherapy & Rehab clinic, Bangalore</span>
                </div>
                <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Clock size={18} className="text-[#348AC7]" />
                  <span>Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#348AC7] pt-8 text-center animate-fadeInUp stagger-4">
            <p className="text-[#C7DDEB]">
              © Oceyas Physiotherapy & Rehab clinic. All rights reserved. | Physiotherapy & Rehabilitation Center
            </p>
          </div>
        </div>
      </footer>

     {/* Enhanced Sticky WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-all duration-300 rounded-xl overflow-hidden"
      >
        <Image 
          src="/wa.jpg"
          alt="Chat on WhatsApp"
          width={60}
          height={60}
          className="drop-shadow-lg hover:drop-shadow-2xl rounded-xl"
        />
      </button>
      {selectedTestimonialIndex !== null && (
        <FullViewModal
          src={(IMAGES.testimonials as any)?.[`testimonial${selectedTestimonialIndex + 1}`] || "/placeholder.svg"}
          onClose={() => setSelectedTestimonialIndex(null)}
        />
      )}
    </div>
  )
}
