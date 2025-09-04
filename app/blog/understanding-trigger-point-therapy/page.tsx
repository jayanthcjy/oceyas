"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, ArrowLeft, CheckCircle, AlertTriangle, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UnderstandingTriggerPointTherapyPage() {
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
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6237A0] hover:text-[#28104E] mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">Understanding Trigger Point Therapy</h1>
            <p className="text-xl text-[#6237A0] leading-relaxed">
              Everything you need to know about trigger point therapy and how it can help with muscle pain and tension.
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src={IMAGES.blog.blog4 || "/placeholder.svg"}
              alt="Understanding Trigger Point Therapy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Trigger point therapy is a specialized treatment technique that targets specific areas of muscle tension
              known as trigger points. These "knots" in your muscles can cause significant pain and discomfort, often
              referring pain to other areas of your body. Understanding how trigger points work and how therapy can help
              is key to finding relief from chronic muscle pain.
            </p>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">What Are Trigger Points?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Trigger points are hyper-irritable spots in skeletal muscle that are associated with palpable nodules in
              taut bands of muscle fibers. These points are painful on compression and can give rise to characteristic
              referred pain, tenderness, and autonomic phenomena.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Key Characteristics of Trigger Points:</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Tender spots in muscle tissue</li>
                <li>• Palpable nodules or "knots"</li>
                <li>• Refer pain to distant areas</li>
                <li>• Cause muscle weakness and stiffness</li>
                <li>• Can be active (painful at rest) or latent (painful when pressed)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Types of Trigger Points</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-red-800 mb-4">Active Trigger Points</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Cause spontaneous pain</li>
                  <li>• Painful at rest</li>
                  <li>• Refer pain to other areas</li>
                  <li>• Limit range of motion</li>
                  <li>• Cause muscle weakness</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Latent Trigger Points</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Only painful when pressed</li>
                  <li>• May cause stiffness</li>
                  <li>• Restrict range of motion</li>
                  <li>• Can become active under stress</li>
                  <li>• Often go unnoticed</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Common Causes of Trigger Points</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">Physical Factors</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Muscle overuse or repetitive strain</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Poor posture and ergonomics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Acute muscle injury or trauma</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Muscle imbalances and weakness</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">Lifestyle Factors</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Chronic stress and tension</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Poor sleep quality</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Nutritional deficiencies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Dehydration</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Trigger Point Therapy Techniques</h2>

            <div className="space-y-8">
              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">1. Manual Pressure Release</h3>
                <p className="text-gray-700 mb-4">
                  Direct pressure applied to trigger points to release tension and restore normal muscle function.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Sustained pressure for 30-90 seconds</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Gradual increase in pressure intensity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Release when tension decreases</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">2. Dry Needling</h3>
                <p className="text-gray-700 mb-4">
                  Insertion of thin needles directly into trigger points to stimulate healing response.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Precise needle placement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Elicits local twitch response</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Promotes blood flow and healing</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">3. Spray and Stretch</h3>
                <p className="text-gray-700 mb-4">
                  Combination of vapocoolant spray and passive stretching to inactivate trigger points.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Cooling spray application</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Immediate passive stretching</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Muscle length restoration</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">4. Myofascial Release</h3>
                <p className="text-gray-700 mb-4">
                  Sustained pressure and movement to release fascial restrictions around trigger points.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Addresses fascial restrictions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Improves tissue mobility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Enhances circulation</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6 mt-12">Self-Treatment Techniques</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While professional treatment is most effective, there are several self-treatment methods you can use
              between sessions to maintain progress and prevent trigger point formation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">Self-Massage Tools</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Tennis balls for targeted pressure</li>
                  <li>• Foam rollers for larger muscle groups</li>
                  <li>• Massage sticks for hard-to-reach areas</li>
                  <li>• Theracane for upper back and shoulders</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Heat and Cold Therapy</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Heat before self-massage</li>
                  <li>• Cold after intense treatment</li>
                  <li>• Contrast therapy for circulation</li>
                  <li>• Warm baths with Epsom salts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">What to Expect During Treatment</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Target className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Initial Assessment</h4>
                  <p className="text-gray-700">Comprehensive evaluation to identify trigger points and pain patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Target className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Treatment Session</h4>
                  <p className="text-gray-700">Targeted therapy using various techniques based on your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Target className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Post-Treatment Care</h4>
                  <p className="text-gray-700">Stretching, movement, and self-care instructions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Target className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Follow-up</h4>
                  <p className="text-gray-700">Progress monitoring and treatment plan adjustments</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Benefits of Trigger Point Therapy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#DEACF5] p-4 rounded-xl text-center">
                <h4 className="font-bold text-[#28104E] mb-2">Pain Relief</h4>
                <p className="text-[#6237A0] text-sm">Immediate and lasting pain reduction</p>
              </div>
              <div className="bg-[#DEACF5] p-4 rounded-xl text-center">
                <h4 className="font-bold text-[#28104E] mb-2">Improved Mobility</h4>
                <p className="text-[#6237A0] text-sm">Enhanced range of motion and flexibility</p>
              </div>
              <div className="bg-[#DEACF5] p-4 rounded-xl text-center">
                <h4 className="font-bold text-[#28104E] mb-2">Better Sleep</h4>
                <p className="text-[#6237A0] text-sm">Reduced pain leading to improved sleep</p>
              </div>
              <div className="bg-[#DEACF5] p-4 rounded-xl text-center">
                <h4 className="font-bold text-[#28104E] mb-2">Stress Reduction</h4>
                <p className="text-[#6237A0] text-sm">Lower muscle tension and stress levels</p>
              </div>
              <div className="bg-[#DEACF5] p-4 rounded-xl text-center">
                <h4 className="font-bold text-[#28104E] mb-2">Enhanced Performance</h4>
                <p className="text-[#6237A0] text-sm">Better athletic and daily performance</p>
              </div>
              <div className="bg-[#DEACF5] p-4 rounded-xl text-center">
                <h4 className="font-bold text-[#28104E] mb-2">Prevention</h4>
                <p className="text-[#6237A0] text-sm">Reduced risk of future muscle problems</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">When to Seek Professional Help</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <p className="text-yellow-800 font-semibold mb-4">
                Consider professional trigger point therapy if you have:
              </p>
              <ul className="space-y-2 text-yellow-700">
                <li>• Chronic muscle pain lasting more than a few days</li>
                <li>• Pain that refers to other areas of your body</li>
                <li>• Muscle stiffness that limits daily activities</li>
                <li>• Recurring pain in the same muscle groups</li>
                <li>• Pain that doesn't respond to rest and self-care</li>
                <li>• Sleep disturbances due to muscle pain</li>
              </ul>
            </div>

            <div className="bg-[#DEACF5] p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-[#28104E] mb-4">Ready to Experience Trigger Point Therapy?</h3>
              <p className="text-[#6237A0] mb-6">
                Dr. Sunil specializes in trigger point therapy and myofascial release techniques. Get personalized
                treatment to address your specific muscle tension and pain patterns.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <MessageCircle size={20} />
                Book Trigger Point Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
