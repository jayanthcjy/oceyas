// Image Configuration File
// Replace these placeholder URLs with your actual image URLs

export const IMAGES = {
  // Hero Section Images
  hero: {
    physioAndRehab:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757243751/physio_hero_gyhezy.jpg?height=300&width=400",
    spinecare:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757238898/spine_care_k9bsmc.jpg?height=300&width=400",
    postureCorrection:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757238896/Posture_hero_hl7xxi.jpg?height=300&width=400",
    
    sportsInjury:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757238896/sports_hero_ueygbe.jpg?height=300&width=400",
  },

  // Testimonials
  testimonials: {
    testimonial1: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226825/t1_xsgrdt.jpg",
    testimonial2: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226826/t2_zus1r3.jpg",
    testimonial3: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226826/t6_eplwml.jpg",
    testimonial4: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226826/t7_evorp3.jpg",
    testimonial5: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226826/t5_duvsby.jpg",
    testimonial6: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226825/t3_dbqeqa.jpg",
    testimonial7: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226826/t4_zwph2h.jpg",
    testimonial8: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226823/t8_qf9e6k.jpg",
    testimonial9: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226824/t9_svcdfl.jpg",
    testimonial10: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226824/t10_zwnwbt.jpg",
    testimonial11: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226824/t11_klcxd1.jpg",
    testimonial12: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226824/t12_in0pfm.jpg",
    testimonial13: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226825/t14_ehbiud.jpg",
  },

  // Doctor Section
  doctor: {
    drRamKumar: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226823/DrRam_lbxxr1.jpg?height=400&width=300",
    genericDoctor: "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226823/DrRam_lbxxr1.jpg.jpg?height=400&width=500", // New image for service pages
  },

  

 

  // Service Detail Pages
  serviceDetails: {
    homecare:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226823/home_care_ealm1p.jpg?height=300&width=400",
    spinecareDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757244719/spine_care_2_z7wgkx.jpg?height=400&width=600",
    postureCorrectionDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226825/Posture_qf8gqw.jpg?height=400&width=600",
    homeNurseDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226823/Home_Nurse_vxnzqi.jpg?height=400&width=600",
    sportsInjuryDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757244848/sports_htzgvb.jpg?height=400&width=600",
    careTakerDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226823/Care_Taker_otr3kw.jpg?height=400&width=600",
    rehabDetail: 
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226825/physio_ggr4ee.jpg?height=400&width=600",
    panchakarmaDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757243751/Pancha_aae5ab.jpg?height=400&width=600",
  
    overseasMedicineDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226824/Overseas_vcsyiu.jpg?height=400&width=600",
    diabetesWoundHealingDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226827/Dieabetic_nawegl.jpg?height=400&width=600",
    varicoseVeinDetail:
      "https://res.cloudinary.com/dcztmndcd/image/upload/v1757226825/Vein_tjpsao.jpg?height=400&width=600",  
    },



  // Why Us Section
  whyUs: {
    recovery: "/placeholder.svg?height=100&width=100",
    diagnosis: "/placeholder.svg?height=100&width=100",
    treatment: "/placeholder.svg?height=100&width=100",
    monitoring: "/placeholder.svg?height=100&width=100",
  },


  // Header and Navigation
  navigation: {
    logo: "/placeholder.svg?height=60&width=200",
  },

  // Footer
  footer: {
    background: "/placeholder.svg?height=200&width=1200",
  },

  // General/Miscellaneous
  general: {
    placeholder: "/placeholder.svg?height=300&width=400",
    heroBackground: "/placeholder.svg?height=500&width=1200",
    testimonialBackground: "/placeholder.svg?height=400&width=800",
  },
}

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  number: "918075554529",
  message: "Hi! I would like to book a physiotherapy session at Oceyas Physiotherapy & Rehab clinic.",
  getWhatsAppUrl: () => `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`,
}

// Google Maps Configuration
export const MAPS_CONFIG = {
  embedUrl: "https://goo.gl/maps/QX9Z9Z9Z9Z9Z9Z9Z9",
  iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939601.6441459893!2d77.83495749256022!3d15.362007070487993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1118a13a0831%3A0xac912a9695733139!2sOCEYAS%20PHYSIOTHERAPY%20%26%20REHAB%20CLINIC!5e0!3m2!1sen!2sin!4v1756984728381!5m2!1sen!2sin",
}
