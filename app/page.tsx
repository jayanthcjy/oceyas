"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, MapPin, Clock, MessageCircle, ChevronRight, Star, Users, Award, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG, MAPS_CONFIG } from "@/config/images"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const heroSlides = [
    {
      title: "Spine Care",
      image: IMAGES.hero.spinecare,
      description: "Expert spinal alignment and back pain relief",
    },
    {
      title: "Posture Correction",
      image: IMAGES.hero.postureCorrection,
      description: "Perfect posture for IT professionals",
    },
    {
      title: "Trigger Point Therapy",
      image: IMAGES.hero.triggerPoint,
      description: "Targeted muscle tension relief",
    },
    {
      title: "Sports Injury",
      image: IMAGES.hero.sportsInjury,
      description: "Athletic recovery and performance",
    },
  ]

  const services = [
    {
      title: "Spine Care",
      image: IMAGES.services.spinecare,
      description: "Comprehensive spinal health and alignment therapy for lasting relief.",
      href: "/services/spine-care",
    },
    {
      title: "Posture Correction for IT Employees",
      image: IMAGES.services.postureCorrection,
      description: "Specialized programs for desk workers to prevent and correct postural issues.",
      href: "/services/posture-correction",
    },
    {
      title: "Myofascial and Trigger Point Therapy",
      image: IMAGES.services.myofascial,
      description: "Deep tissue work to release muscle knots and restore mobility.",
      href: "/services/trigger-point-therapy",
    },
    {
      title: "Sports Injury",
      image: IMAGES.services.sportsInjury,
      description: "Expert care for athletic injuries and performance optimization.",
      href: "/services/sports-injury",
    },
    {
      title: "Acupuncture",
      image: IMAGES.services.acupuncture,
      description: "Traditional acupuncture for pain relief and holistic healing.",
      href: "/services/acupuncture",
    },
    {
      title: "Rehab",
      image: IMAGES.services.rehab,
      description: "Comprehensive rehabilitation programs for complete recovery.",
      href: "/services/rehabilitation",
    },
    {
      title: "Online Sessions",
      image: IMAGES.services.onlineSessions,
      description: "Convenient virtual consultations and guided therapy sessions.",
      href: "/services/online-sessions",
    },
    {
      title: "Preventive Therapy",
      image: IMAGES.services.preventive,
      description: "Proactive care to prevent injuries and maintain optimal health.",
      href: "/services/preventive-therapy",
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
      review: "Online sessions were so convenient and effective. Highly recommend Namma Physio Centre!",
      rating: 5,
      condition: "Online Therapy",
    },
  ]

  const blogs = [
    {
      title: "5 Essential Exercises for Back Pain Relief",
      image: IMAGES.blog.blog1,
      excerpt:
        "Discover simple yet effective exercises that can help alleviate chronic back pain and improve your quality of life.",
      slug: "back-pain-relief-exercises",
    },
    {
      title: "Ergonomic Workspace Setup for IT Professionals",
      image: IMAGES.blog.blog2,
      excerpt:
        "Learn how to set up your workspace to prevent posture-related issues and maintain optimal spinal health.",
      slug: "ergonomic-workspace-setup",
    },
    {
      title: "Sports Injury Prevention: A Complete Guide",
      image: IMAGES.blog.blog3,
      excerpt:
        "Essential tips and techniques to prevent common sports injuries and maintain peak athletic performance.",
      slug: "sports-injury-prevention-guide",
    },
    {
      title: "Understanding Trigger Point Therapy",
      image: IMAGES.blog.blog4,
      excerpt:
        "Everything you need to know about trigger point therapy and how it can help with muscle pain and tension.",
      slug: "understanding-trigger-point-therapy",
    },
  ]

  const whyUsFeatures = [
    {
      icon: IMAGES.whyUs.diagnosis,
      title: "Root Cause Identification",
      description: "We don't just treat pain, we find what's causing it.",
      number: "1",
    },
    {
      icon: IMAGES.whyUs.treatment,
      title: "Precision Treatment",
      description: "Personalized therapy plans tailored to your body and goals.",
      number: "2",
    },
    {
      icon: IMAGES.whyUs.monitoring,
      title: "Progress Monitoring",
      description: "We track your recovery and adjust in real-time for results.",
      number: "3",
    },
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

      {/* Hero Section with Horizontal Slider */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#DEACF5] to-white">
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
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28104E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-4 right-4 text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm md:text-lg text-[#DEACF5] mb-4">{slide.description}</p>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#9754CB]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 bg-gradient-to-r from-[#DEACF5] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-6 py-4 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={20} className="md:hidden" />
            <MessageCircle size={24} className="hidden md:block" />
            <span>Book a Session Now</span>
            <ChevronRight size={18} className="md:hidden" />
            <ChevronRight size={20} className="hidden md:block" />
          </button>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Meet Our Expert</h2>
            <p className="text-[#6237A0] text-lg">Experienced physiotherapist dedicated to your recovery</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.doctor.drSunil || "/placeholder.svg"}
                alt="Dr. Sunil - Orthopaedic and Sports Physiotherapy"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#28104E] mb-2">Dr. Oceyas</h3>
              <p className="text-xl text-[#6237A0] mb-6">Orthopaedic and Sports Physiotherapy</p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 12 years of experience in physiotherapy, Dr. Sunil specializes in orthopaedic and sports
                physiotherapy. He has helped thousands of patients recover from various conditions and achieve optimal
                physical health through personalized treatment plans.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-[#DEACF5] rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="text-[#6237A0]" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#28104E]">12+</h4>
                  <p className="text-[#6237A0] text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-[#DEACF5] rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="text-[#6237A0]" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#28104E]">5K+</h4>
                  <p className="text-[#6237A0] text-sm">Happy Customers</p>
                </div>
              </div>

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
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Why Choose Us</h2>
            <p className="text-[#6237A0] text-lg max-w-2xl mx-auto">
              Our proven methodology ensures the best outcomes for your recovery journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {whyUsFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#6237A0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{feature.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#28104E] mb-3">{feature.title}</h3>
                  <p className="text-[#6237A0] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#28104E] mb-4">Start your recovery today</h3>
            <button
              onClick={handleWhatsApp}
              className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Calendar size={24} />
              Book Your Session
            </button>
          </div>
        </div>
      </section>

     {/* Services Section */}
<section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Our Services</h2>
      <p className="text-[#6237A0] text-lg max-w-2xl mx-auto">
        Comprehensive physiotherapy and rehabilitation services tailored to your needs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <Link key={index} href={service.href}>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28104E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#28104E] mb-3 group-hover:text-[#6237A0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-4 text-right">
                <span className="text-sm text-[#6237A0] font-medium hover:underline">View More →</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">What Our Clients Say</h2>
            <p className="text-[#6237A0] text-lg">Real stories from our satisfied patients</p>
          </div>

          <div className="relative">
            <div
              ref={testimonialRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[300px] md:min-w-[350px] snap-start">
                  <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                    <div className="flex items-center mb-4">
                      <div className="ml-0">
                        <h4 className="font-bold text-[#28104E]">{testimonial.name}</h4>
                        <p className="text-[#6237A0] text-sm">{testimonial.condition}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 italic leading-relaxed">"{testimonial.review}"</p>
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-[#9754CB]" : "bg-[#6237A0]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Health & Wellness Blog</h2>
            <p className="text-[#6237A0] text-lg">Expert tips and insights for better health</p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <Link key={index} href={`/blog/${blog.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#28104E] mb-3 group-hover:text-[#6237A0] transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{blog.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4">
              {blogs.map((blog, index) => (
                <Link key={index} href={`/blog/${blog.slug}`}>
                  <div className="min-w-[280px] snap-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#28104E] mb-3 group-hover:text-[#6237A0] transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{blog.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Visit Our Clinic</h2>
            <p className="text-[#6237A0] text-lg">Conveniently located for easy access</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#28104E] mb-6">Find Us Here</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-[#6237A0] p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#28104E]">Address</h4>
                    <p className="text-[#6237A0]">Namma Physio Centre, Bangalore</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#6237A0] p-3 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#28104E]">Phone</h4>
                    <p className="text-[#6237A0]">+91 9916453616</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#6237A0] p-3 rounded-full">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#28104E]">Hours</h4>
                    <p className="text-[#6237A0]">Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Get Directions
                </button>
                <a
                  href={MAPS_CONFIG.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#6237A0] border-2 border-[#6237A0] hover:bg-[#6237A0] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <MapPin size={20} />
                  Open in Maps
                </a>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={MAPS_CONFIG.iframeUrl}
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

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#6237A0] p-4 rounded-full mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#28104E] mb-2">Call Us</h3>
              <p className="text-[#6237A0]">+91 9916453616</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#6237A0] p-4 rounded-full mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#28104E] mb-2">Visit Us</h3>
              <p className="text-[#6237A0] text-center">
                Namma Physio Centre
                <br />
                Physiotherapy & Rehab Center
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#6237A0] p-4 rounded-full mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#28104E] mb-2">Hours</h3>
              <p className="text-[#6237A0] text-center">
                Mon-Sat: 9AM-7PM
                <br />
                Sun: 10AM-5PM
              </p>
            </div>
          </div>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Start Your Recovery Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#28104E] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Namma Physio Centre</h3>
              <p className="text-[#DEACF5] mb-4">
                Your trusted partner in physiotherapy and rehabilitation. Expert care for lasting recovery and optimal
                health with Dr. Sunil's 12+ years of experience.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#9754CB] hover:bg-[#6237A0] px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </button>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#DEACF5]">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#9754CB] transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#9754CB] transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#9754CB] transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <button onClick={handleWhatsApp} className="hover:text-[#9754CB] transition-colors duration-300">
                    Book Appointment
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#DEACF5]">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#9754CB]" />
                  <span>+91 9916453616</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#9754CB]" />
                  <span>Namma Physio Centre, Bangalore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#9754CB]" />
                  <span>Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#6237A0] pt-8 text-center">
            <p className="text-[#DEACF5]">
              © 2024 Namma Physio Centre. All rights reserved. | Physiotherapy & Rehabilitation Center
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-[#9754CB] hover:bg-[#6237A0] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="hidden group-hover:inline-block text-sm font-medium pr-2 animate-fade-in">Chat with us</span>
      </button>
    </div>
  )
}
