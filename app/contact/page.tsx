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
      <section className="py-16 px-4 bg-gradient-oceyas">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-oceyas-skyBlue text-lg">Reach out to us for any queries or assistance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-oceyas-brightBlue p-4 rounded-full mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-oceyas-skyBlue">+91 8075554529</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-oceyas-brightBlue p-4 rounded-full mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-oceyas-skyBlue text-center">
                Oceyas Physio & Rehab
                <br />
                Physiotherapy & Rehab Center
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-oceyas-brightBlue p-4 rounded-full mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Hours</h3>
              <p className="text-oceyas-skyBlue text-center">
                Mon-Sat: 9AM-7PM
                <br />
                Sun: 10AM-5PM
              </p>
            </div>
          </div>

          <button
            onClick={handleWhatsApp}
            className="bg-oceyas-brightBlue hover:bg-oceyas-deepBlue text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Start Your Recovery Journey
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-oceyas-skyBlue">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-oceyas-deepBlue mb-4">Map Section</h2>
            <p className="text-oceyas-brightBlue text-lg">Find our location easily</p>
          </div>

          <div className="relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-oceyas-deepBlue mb-4">FAQ Section</h2>
            <p className="text-oceyas-brightBlue text-lg">Answers to common questions</p>
          </div>

          <div className="space-y-6">
            <div className="bg-oceyas-skyBlue p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-oceyas-deepBlue mb-2">What services do you offer?</h3>
              <p className="text-oceyas-brightBlue">We offer physiotherapy, rehabilitation, posture correction, and more.</p>
            </div>
            <div className="bg-oceyas-skyBlue p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-oceyas-deepBlue mb-2">How can I book an appointment?</h3>
              <p className="text-oceyas-brightBlue">You can book an appointment through our website or WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-oceyas">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CTA Section</h2>
            <p className="text-oceyas-skyBlue text-lg">Take the first step towards recovery</p>
          </div>

          <button
            onClick={handleWhatsApp}
            className="bg-oceyas-brightBlue hover:bg-oceyas-deepBlue text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  )
}
