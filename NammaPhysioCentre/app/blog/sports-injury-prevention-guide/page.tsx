"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import { IMAGES, WHATSAPP_CONFIG } from "@/config/images"
import { MessageCircle, ArrowLeft, CheckCircle, AlertTriangle, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SportsInjuryPreventionGuidePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-[#28104E] mb-6">
              Sports Injury Prevention: A Complete Guide
            </h1>
            <p className="text-xl text-[#6237A0] leading-relaxed">
              Essential tips and techniques to prevent common sports injuries and maintain peak athletic performance.
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src={IMAGES.blog.blog3 || "/placeholder.svg"}
              alt="Sports Injury Prevention Guide"
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
              Sports injuries can derail your athletic goals and sideline you for weeks or months. Whether you're a
              weekend warrior or a competitive athlete, understanding how to prevent injuries is crucial for maintaining
              peak performance and enjoying your sport for years to come.
            </p>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Understanding Sports Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sports injuries fall into two main categories: acute injuries that occur suddenly during activity, and
              overuse injuries that develop gradually over time. Both types are largely preventable with the right
              approach to training, preparation, and recovery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4">Acute Injuries</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Sprains and strains</li>
                  <li>• Fractures</li>
                  <li>• Dislocations</li>
                  <li>• Concussions</li>
                  <li>• Cuts and bruises</li>
                </ul>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Overuse Injuries</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Tendinitis</li>
                  <li>• Stress fractures</li>
                  <li>• Runner's knee</li>
                  <li>• Tennis elbow</li>
                  <li>• Shin splints</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">The Foundation of Injury Prevention</h2>

            <div className="space-y-8">
              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">1. Proper Warm-Up and Cool-Down</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive warm-up prepares your body for activity, while cool-down helps with recovery.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-[#28104E] mb-2">Warm-Up (10-15 minutes)</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">5 minutes light cardio</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">Dynamic stretching</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">Sport-specific movements</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#28104E] mb-2">Cool-Down (10-15 minutes)</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">Gradual activity reduction</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">Static stretching</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">Hydration and nutrition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">2. Strength and Conditioning</h3>
                <p className="text-gray-700 mb-4">
                  Building overall strength and addressing muscle imbalances reduces injury risk significantly.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Focus on core stability and strength</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Include functional movement patterns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Address weak links in the kinetic chain</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Progressive overload principles</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">3. Flexibility and Mobility</h3>
                <p className="text-gray-700 mb-4">
                  Maintaining good range of motion helps prevent injuries and improves performance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Daily stretching routine</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Foam rolling and self-massage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Joint mobility exercises</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Regular massage therapy</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">4. Proper Technique and Form</h3>
                <p className="text-gray-700 mb-4">
                  Correct technique is fundamental to injury prevention and performance optimization.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Work with qualified coaches or trainers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Regular technique assessment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Video analysis when possible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Focus on quality over quantity</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#DEACF5] p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#28104E] mb-4">5. Progressive Training Load</h3>
                <p className="text-gray-700 mb-4">
                  Gradually increasing training intensity and volume prevents overuse injuries.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Follow the 10% rule for weekly increases</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Include rest and recovery days</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Periodize training cycles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#6237A0] mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Listen to your body's signals</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6 mt-12">Sport-Specific Prevention Strategies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Running Sports</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Proper footwear and replacement schedule</li>
                  <li>• Gradual mileage increases</li>
                  <li>• Surface variation</li>
                  <li>• Hip and glute strengthening</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">Contact Sports</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Proper protective equipment</li>
                  <li>• Neck and shoulder strengthening</li>
                  <li>• Agility and reaction training</li>
                  <li>• Concussion protocols</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Racquet Sports</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Proper grip size and technique</li>
                  <li>• Shoulder and elbow conditioning</li>
                  <li>• Rotational core strength</li>
                  <li>• Equipment maintenance</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Swimming</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Stroke technique refinement</li>
                  <li>• Shoulder stability exercises</li>
                  <li>• Breathing pattern training</li>
                  <li>• Dry-land conditioning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Recovery and Regeneration</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recovery is when your body adapts and becomes stronger. Neglecting recovery is a major risk factor for
              injury.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">Key Recovery Elements:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-green-700">
                  <li>• 7-9 hours of quality sleep</li>
                  <li>• Proper hydration</li>
                  <li>• Balanced nutrition</li>
                  <li>• Active recovery activities</li>
                </ul>
                <ul className="space-y-2 text-green-700">
                  <li>• Stress management</li>
                  <li>• Regular massage</li>
                  <li>• Ice baths or contrast therapy</li>
                  <li>• Complete rest days</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Warning Signs to Watch For</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold text-yellow-800">Stop Activity and Seek Help If You Experience:</h3>
              </div>
              <ul className="space-y-2 text-yellow-700">
                <li>• Sharp, sudden pain</li>
                <li>• Pain that persists after activity</li>
                <li>• Swelling or visible deformity</li>
                <li>• Inability to bear weight or use the limb</li>
                <li>• Numbness or tingling</li>
                <li>• Decreased range of motion</li>
                <li>• Recurring pain in the same area</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#28104E] mb-6">Creating Your Prevention Plan</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Step 1: Assessment</h4>
                  <p className="text-gray-700">Get a movement screen and identify risk factors</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Step 2: Plan Development</h4>
                  <p className="text-gray-700">Create a comprehensive prevention program</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Step 3: Implementation</h4>
                  <p className="text-gray-700">Consistently follow your prevention routine</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="text-[#9754CB] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-[#28104E]">Step 4: Monitoring</h4>
                  <p className="text-gray-700">Regular reassessment and program adjustments</p>
                </div>
              </div>
            </div>

            <div className="bg-[#DEACF5] p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-[#28104E] mb-4">Need a Sports Injury Prevention Assessment?</h3>
              <p className="text-[#6237A0] mb-6">
                Dr. Sunil specializes in sports injury prevention and can create a personalized prevention program based
                on your sport, goals, and individual risk factors.
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-[#9754CB] hover:bg-[#6237A0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <MessageCircle size={20} />
                Book Prevention Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
