"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG, MAPS_CONFIG } from "@/config/images"
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"
// Add useEffect import at the top
import { useEffect } from "react"

export default function ContactPage() {
  const handleWhatsApp = () => {
    window.open(WHATSAPP_CONFIG.getWhatsAppUrl(), "_blank")
  }

  // Add this useEffect after the handleWhatsApp function
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Contact Us</h1>
            <p className="text-xl text-[#6237A0] max-w-3xl mx-auto leading-relaxed">
              Get in touch with Oceyas Physio & Rehab. We're here to help you start your journey to better health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={IMAGES.contact.clinicExterior || "/placeholder.svg"}
                alt="Oceyas Physio & Rehab Exterior"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#28104E] mb-6">Visit Our Clinic</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our modern facility is equipped with state-of-the-art equipment and designed to provide a comfortable,
                healing environment for all our patients. We're conveniently located and easily accessible.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
              >
                <MessageCircle size={20} />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Get in Touch</h2>
            <p className="text-[#6237A0] text-lg">Multiple ways to reach us for your convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#28104E] mb-2">Call Us</h3>
              <p className="text-[#6237A0] font-medium">+91 9916453616</p>
              <p className="text-[#6237A0] text-sm mt-2">Available 9AM-7PM</p>
            </div>

            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#28104E] mb-2">WhatsApp</h3>
              <p className="text-[#6237A0] font-medium">+91 9916453616</p>
              <p className="text-[#6237A0] text-sm mt-2">Quick responses</p>
            </div>

            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#28104E] mb-2">Location</h3>
              <p className="text-[#6237A0] text-center">
                Oceyas Physio & Rehab
                <br />
                Bangalore
              </p>
            </div>

            <div className="text-center p-6 bg-[#DEACF5] rounded-2xl">
              <div className="bg-[#6237A0] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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

          <div className="text-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <MessageCircle size={24} />
              Start Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Find Our Clinic</h2>
            <p className="text-[#6237A0] text-lg">Conveniently located for easy access</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#28104E] mb-6">Directions</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-[#28104E] mb-2">By Car</h4>
                  <p className="text-[#6237A0]">
                    Ample parking available. Easy access from main roads with clear signage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#28104E] mb-2">By Public Transport</h4>
                  <p className="text-[#6237A0]">
                    Well connected by bus routes. Nearest metro station is within walking distance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#28104E] mb-2">Accessibility</h4>
                  <p className="text-[#6237A0]">
                    Wheelchair accessible entrance and facilities available for all patients.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={20} />
                  Get Directions
                </button>
                <a
                  href={MAPS_CONFIG.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#6237A0] border-2 border-[#6237A0] hover:bg-[#6237A0] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center"
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#6237A0] text-lg">Common questions about our services and appointments</p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#DEACF5] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">How do I book an appointment?</h3>
              <p className="text-[#6237A0]">
                You can easily book an appointment by clicking the WhatsApp button or calling us directly at +91
                9916453616. We'll help you schedule a convenient time for your consultation.
              </p>
            </div>

            <div className="bg-[#DEACF5] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">Do you offer online consultations?</h3>
              <p className="text-[#6237A0]">
                Yes, we provide online physiotherapy sessions for follow-up treatments, exercise guidance, and
                consultations. This is especially convenient for patients who cannot visit the clinic regularly.
              </p>
            </div>

            <div className="bg-[#DEACF5] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">What should I bring for my first visit?</h3>
              <p className="text-[#6237A0]">
                Please bring any medical reports, X-rays, or previous treatment records related to your condition. Wear
                comfortable clothing that allows easy movement for physical examination.
              </p>
            </div>

            <div className="bg-[#DEACF5] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#28104E] mb-3">How long does each session last?</h3>
              <p className="text-[#6237A0]">
                Initial consultations typically last 45-60 minutes, while follow-up sessions are usually 30-45 minutes.
                The duration may vary based on your specific treatment needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#DEACF5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28104E] mb-6">Ready to Get Started?</h2>
          <p className="text-[#6237A0] text-lg mb-8 max-w-2xl mx-auto">
            Don't let pain hold you back. Contact Oceyas Physio & Rehab today and take the first step towards a healthier,
            pain-free life with Dr. Sunil's expert care.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  )
}
