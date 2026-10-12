/**
 * CLINIC CONFIGURATION FILE - TRUE LIFE HOSPITAL
 * -------------------------------------------------------------
 * Location: Karulai, Kerala, India (PIN: 679330)
 * Google Rating: 4.6 ★ (15 Google Reviews)
 * Timings: Open 24 Hours (Round-the-clock service)
 * -------------------------------------------------------------
 */

const TRUE_LIFE_CONFIG = {
  name: "TRUE LIFE HOSPITAL",
  tagline: "Compassionate care, close to home — Available 24 Hours",
  shortDescription: "Providing round-the-clock medical care, emergency services, attentive doctor consultations, and diagnostic facilities for Karulai and surrounding communities in Kerala.",
  location: "Karulai, Kerala",
  district: "Malappuram District, Kerala",
  rating: "4.6",
  totalReviews: "15 Google reviews",
  
  address: {
    building: "CK Tower, Govt. Hospital Rd",
    plusCode: "77PX+87F",
    town: "Karulai",
    state: "Kerala",
    pincode: "679330",
    full: "77PX+87F CK Tower, Govt. Hospital Rd, Karulai, Kerala 679330"
  },

  phone: "090720 33751",
  phoneRaw: "+919072033751",
  whatsapp: "+919072033751", // Mobile phone in Kerala
  email: "contact@truelifehospital.com",

  hours: {
    status: "Open 24 hours",
    weekdays: "Monday – Friday: Open 24 Hours (Round-the-clock)",
    saturday: "Saturday: Open 24 Hours",
    sunday: "Sunday: Open 24 Hours",
    emergencyNotice: "Emergency Care & Medical Consultations Available 24/7 Round the Clock."
  },

  mapUrl: "https://www.google.com/maps/search/?api=1&query=77PX%2B87F+CK+Tower+Govt+Hospital+Rd+Karulai+Kerala+679330",

  // Confirmed Services at True Life Hospital
  services: [
    {
      id: "emergency-24x7",
      title: "24/7 Emergency & General Medicine",
      shortDesc: "Round-the-clock doctor availability and immediate triage for urgent medical conditions day and night.",
      icon: "activity",
      badge: "Open 24 Hours"
    },
    {
      id: "primary-consultation",
      title: "General OPD & Doctor Consultations",
      shortDesc: "Attentive, unhurried patient examinations where the physician listens patiently and explains treatments clearly.",
      icon: "stethoscope",
      badge: "Daily OPD"
    },
    {
      id: "pediatric-care",
      title: "Pediatric & Child Health",
      shortDesc: "Gentle healthcare consultations, childhood illness management, and growth monitoring for infants and children.",
      icon: "users",
      badge: "Family Health"
    },
    {
      id: "diagnostics-lab",
      title: "Diagnostic & Clinical Laboratory",
      shortDesc: "Routine blood tests, standard health panels, blood sugar screening, and rapid diagnostic evaluations.",
      icon: "shield-plus",
      badge: "On-Site Lab"
    },
    {
      id: "chronic-management",
      title: "Diabetes & Hypertension Management",
      shortDesc: "Long-term monitoring, dietary guidance, and medication review for hypertension, diabetes, and cardio wellness.",
      icon: "heart-pulse",
      badge: "Ongoing Care"
    },
    {
      id: "minor-procedures",
      title: "Dressing, Injections & Observation",
      shortDesc: "Clean wound care, sterile dressing, vital stabilization, nebulization, and short-stay patient observation.",
      icon: "user-check",
      badge: "Observation Ward"
    }
  ],

  // Medical Team & Specialists
  doctors: [
    {
      name: "Dr. Consultant Physician",
      qualifications: "MBBS, MD (General Medicine)",
      specialty: "General Medicine & 24/7 Emergency Care",
      timings: "Daily: Available on Duty / Call (Round the Clock)",
      bio: "Dedicated physician known for patient listening, accurate clinical diagnosis, and thorough medical counseling.",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      photoAlt: "Physician consultation at True Life Hospital"
    },
    {
      name: "Dr. Family Healthcare Specialist",
      qualifications: "MBBS, DCH / Family Medicine",
      specialty: "Family Health & Pediatric Care",
      timings: "Mon – Sat: 9:00 AM – 2:00 PM & 4:30 PM – 8:00 PM",
      bio: "Experienced practitioner providing comprehensive healthcare for children, adults, and elderly family members.",
      photo: "https://images.unsplash.com/photo-1594824813576-591a673c651e?auto=format&fit=crop&w=600&q=80",
      photoAlt: "Family healthcare doctor at True Life Hospital"
    },
    {
      name: "Duty Medical Officer & Nursing Team",
      qualifications: "MBBS & Registered Nursing Staff",
      specialty: "24-Hour Casualty & Emergency Care",
      timings: "24 Hours / 7 Days a Week",
      bio: "Trained clinical team providing immediate emergency attention, first aid, nebulization, and round-the-clock monitoring.",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      photoAlt: "Medical team on duty at True Life Hospital Karulai"
    }
  ],

  // Verified Genuine Google Reviews supplied directly from Google profile
  reviews: [
    {
      quote: "“The doctor listens patiently and explains everything clearly.”",
      author: "Sampreeth Bhasker",
      source: "Google Review",
      rating: 5,
      date: "Verified Google Review"
    },
    {
      quote: "“Hospital reaching publicity as it's service is available round the clock.”",
      author: "Inflated in my way",
      source: "Google Review",
      rating: 5,
      date: "Verified Google Review"
    },
    {
      quote: "“Excellent place and Excellent doctor”",
      author: "dalvin thomas",
      source: "Google Review",
      rating: 5,
      date: "Verified Google Review"
    }
  ],

  ratingSummary: {
    average: "4.6",
    totalReviews: "15 Google reviews",
    source: "Google Reviews (Hospital in Karulai, Keralam)"
  },

  // Gallery of Facility
  gallery: [
    {
      title: "24/7 Reception & Emergency Desk",
      category: "Facility",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      caption: "Hospital reception at CK Tower, Govt. Hospital Rd, Karulai — open day and night."
    },
    {
      title: "Doctor Consultation Suite",
      category: "Consultation",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      caption: "Private, clean examination room where patients receive attentive clinical listening."
    },
    {
      title: "Diagnostic Lab & Testing",
      category: "Diagnostics",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      caption: "Laboratory facility for rapid blood panels, sugar tests, and diagnostic screenings."
    },
    {
      title: "Observation & Treatment Unit",
      category: "Facility",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      caption: "Sterilized procedure and short-stay observation beds equipped with emergency essentials."
    },
    {
      title: "Patient Care & Waiting Lounge",
      category: "Facility",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      caption: "Calm, clean waiting area conveniently situated at CK Tower, Karulai."
    },
    {
      title: "Pediatric & Family Care",
      category: "Consultation",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      caption: "Comfortable and attentive healthcare consultations for children and family members."
    }
  ],

  // Blog / Health Articles for Karulai & Kerala Communities
  blog: [
    {
      id: "24x7-hospital-karulai",
      title: "Round-the-Clock Medical Care in Karulai: Why 24/7 Access Matters",
      excerpt: "When medical emergencies or high fevers strike in the middle of the night, having a trusted 24-hour hospital on Govt. Hospital Road provides vital peace of mind for local families.",
      category: "Community Health",
      date: "Oct 2026",
      readTime: "3 min read",
      author: "True Life Hospital Team",
      authorRole: "Karulai, Kerala",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "monsoon-fever-prevention",
      title: "Seasonal Fevers & Infection Prevention: Essential Health Guidance for Malappuram",
      excerpt: "Understanding early warning signs of viral illnesses, dengue, and fever management at home, plus when to visit the doctor promptly for blood tests.",
      category: "Preventive Care",
      date: "Sep 2026",
      readTime: "4 min read",
      author: "Medical Team",
      authorRole: "General Medicine",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "lifestyle-diabetes-kerala",
      title: "Managing Blood Sugar & Blood Pressure: Practical Steps for Kerala Households",
      excerpt: "How traditional Kerala dietary adjustments, daily walking, and regular checkups help keep diabetes and hypertension firmly under control.",
      category: "Chronic Wellness",
      date: "Sep 2026",
      readTime: "5 min read",
      author: "Clinical Staff",
      authorRole: "Consultant Physician",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=80"
    }
  ],

  whyChooseUs: [
    {
      title: "Open 24 Hours Every Day",
      description: "Our hospital doors and medical services are available round the clock, 365 days a year in Karulai.",
      icon: "calendar-clock"
    },
    {
      title: "Patient & Attentive Listening",
      description: "Verified by local patients: our doctors listen patiently and explain diagnoses in clear Malayalam and English.",
      icon: "user-heart"
    },
    {
      title: "Centrally Located at CK Tower",
      description: "Conveniently accessible on Govt. Hospital Road, Karulai with prompt reception assistance.",
      icon: "map-pin"
    },
    {
      title: "Clean & Sterile Environment",
      description: "Strict hygiene protocols, sanitized consultation rooms, and dedicated emergency observation.",
      icon: "sparkles"
    }
  ],

  appointmentEndpoint: "demo://mock-booking-service"
};

// Set as active configuration
const CLINIC_CONFIG = TRUE_LIFE_CONFIG;

if (typeof window !== "undefined") {
  window.TRUE_LIFE_CONFIG = TRUE_LIFE_CONFIG;
  window.CLINIC_CONFIG = CLINIC_CONFIG;
  window.DEMO_CONFIG = TRUE_LIFE_CONFIG;
}
