"use client"

import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG, MAPS_CONFIG } from "@/config/images"
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react"
import { useEffect } from "react"

export default function ContactPage() {
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
      <section className="py-16 px-4 bg-gradient-to-br from-[#C7DDEB] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B4470] mb-6">Contact Us</h1>
            <p className="text-xl text-[#348AC7] max-w-3xl mx-auto leading-relaxed">
              Get in touch with Oceyas Physiotherapy & Rehab clinic. We're here to help you start your journey to better health.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2B4470] mb-6">Let's Start Your Recovery Journey</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our modern facility is equipped with state-of-the-art equipment and designed to provide a comfortable,
              healing environment for all our patients. We're conveniently located and easily accessible in Bengaluru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle size={20} />
                Book Appointment Now
              </button>
              <button
                onClick={() => document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#2B4470] border-2 border-[#2B4470] hover:bg-[#2B4470] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
              >
                <Phone size={20} />
                View Contact Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-info" className="py-16 px-4 bg-[#2B4470]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-[#C7DDEB] text-lg">Reach out to us for any queries or assistance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#348AC7] p-4 rounded-full mb-4 shadow-lg">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-xl">Call Us</h3>
              <p className="text-[#C7DDEB] text-lg">+91 8075554529</p>
              <p className="text-[#C7DDEB] text-sm mt-2">Available 24/7 for emergencies</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#348AC7] p-4 rounded-full mb-4 shadow-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-xl">Visit Us</h3>
              <p className="text-[#C7DDEB] text-center text-lg">
                Oceyas Physiotherapy & Rehab clinic
                <br />
                Near Sunrise Hospital, Ragavedra Circle,
Ramamurthy Nagar, Bangalore
              </p>
              <p className="text-[#C7DDEB] text-sm mt-2">Easy parking available</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="bg-[#348AC7] p-4 rounded-full mb-4 shadow-lg">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-xl">Hours</h3>
              <p className="text-[#C7DDEB] text-center text-lg">
                Mon-Sat: 9AM-7PM
                <br />
                Sun: 10AM-5PM
              </p>
              <p className="text-[#C7DDEB] text-sm mt-2">Extended hours available</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleWhatsApp}
              className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105"
            >
              <MessageCircle size={24} />
              Start Your Recovery Journey
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-[#C7DDEB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4470] mb-4">Find Our Location</h2>
            <p className="text-[#348AC7] text-lg">Easily accessible location in Bengaluru with ample parking</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#2B4470] mb-4">Nearby Landmarks</h3>
              <ul className="space-y-2 text-[#348AC7]">
                <li>• NO 13,Senthuragam</li>
                <li>• Near Sunrise Hospital</li>
                <li>• Ragavedra circle</li>
                <li>• Ramamurthy nagar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B4470] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#348AC7] text-lg">Common questions about our services and appointments</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#C7DDEB] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2B4470] mb-2">What services do you offer?</h3>
              <p className="text-[#348AC7]">We offer comprehensive physiotherapy, rehabilitation, home care physio, home nursing, care taker services, sports injury treatment, and spine care. Our services cover both in-clinic and home-based treatments.</p>
            </div>
            <div className="bg-[#C7DDEB] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2B4470] mb-2">How can I book an appointment?</h3>
              <p className="text-[#348AC7]">You can book an appointment through our website forms or directly via WhatsApp by calling +91 8075554529. We also accept walk-in appointments during clinic hours.</p>
            </div>
            <div className="bg-[#C7DDEB] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2B4470] mb-2">Do you provide home visits?</h3>
              <p className="text-[#348AC7]">Yes, we provide home care physiotherapy, home nursing, and care taker services at your convenience. Home visits are available across Bengaluru with prior appointment.</p>
            </div>
            <div className="bg-[#C7DDEB] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2B4470] mb-2">What should I bring for my first visit?</h3>
              <p className="text-[#348AC7]">Please bring any previous medical reports, X-rays, MRI scans, or doctor's prescriptions related to your condition. Wear comfortable clothing that allows easy movement.</p>
            </div>
            <div className="bg-[#C7DDEB] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2B4470] mb-2">Do you accept insurance?</h3>
              <p className="text-[#348AC7]">We accept most major health insurance plans. Please contact us with your insurance details to verify coverage before your appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-12 px-4 bg-[#D04A6B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-white/90 text-lg mb-6">For urgent physiotherapy needs or emergency consultations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-white text-[#D04A6B] hover:bg-[#2B4470] hover:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 justify-center"
            >
              <MessageCircle size={24} />
              WhatsApp Now
            </button>
            <a
              href="tel:+918075554529"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#D04A6B] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 justify-center"
            >
              <Phone size={24} />
              Call Directly
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#2B4470]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Begin Your Recovery?</h2>
          <p className="text-[#C7DDEB] text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards better health with Dr. Ram Kumar and our expert team. 
            We're here to support your journey to complete recovery.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#D04A6B] hover:bg-[#348AC7] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105"
          >
            <MessageCircle size={24} />
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  )
}
