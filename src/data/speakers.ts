// ============================================================
// ICRACS 2026 — Speakers Data
// Source: https://icracs.poornima.org/speakers
// ============================================================

export interface KeynoteSpeaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  country: string;
  speakingDate: string;
  expertiseTags: string[];
  biography: string;
  /** Initials used for avatar fallback */
  initials: string;
  /** Local image path (relative to /public) — null if not available */
  image: string | null;
  altText: string;
}

export interface PastSpeaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  conferenceEdition: string;
  expertiseTags: string[];
  biography: string;
  initials: string;
  image: string | null;
  altText: string;
}

export interface KeynoteSessionInfo {
  duration: string;
  format: string;
  focus: string;
  interaction: string;
}

export interface TopicCoverage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SpeakingOpportunity {
  heading: string;
  description: string;
  contactEmail: string;
  contactSubject: string;
}

// ============================================================
// KEYNOTE SPEAKERS — ICRACS 2026
// ============================================================

export const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    id: "atulya-k-nagar",
    name: "Prof. Atulya K. Nagar",
    designation: "Pro Vice-Chancellor (Research)",
    institution: "Liverpool Hope University",
    country: "United Kingdom",
    speakingDate: "April 17, 2026",
    expertiseTags: ["Computing", "Research Leadership", "Advanced Computing"],
    biography:
      "Prof. Atulya K. Nagar is the Pro Vice-Chancellor (Research) at Liverpool Hope University, providing strategic leadership for research and innovation across the institution. He is a distinguished academic with extensive experience in mathematical computing, bio-mathematics, and computational sciences. His research spans non-linear mathematics, computational biology, and natural computing paradigms, with numerous high-impact publications to his credit.",
    initials: "AN",
    image: null,
    altText: "Prof. Atulya K. Nagar — Pro Vice-Chancellor (Research), Liverpool Hope University",
  },
  {
    id: "rajnish-sharma",
    name: "Dr. Rajnish Sharma",
    designation: "Vice-Chancellor",
    institution: "Chitkara University Himachal Pradesh",
    country: "India",
    speakingDate: "April 17, 2026",
    expertiseTags: ["Higher Education", "Technology", "Academic Leadership"],
    biography:
      "Dr. Rajnish Sharma is the Vice-Chancellor of Chitkara University Himachal Pradesh, driving academic excellence and research innovation in the Himalayan region. He brings decades of experience in higher education administration, academic policy, and technology-driven learning. Under his leadership, the university has achieved significant milestones in research output and industry collaborations.",
    initials: "RS",
    image: null,
    altText: "Dr. Rajnish Sharma — Vice-Chancellor, Chitkara University Himachal Pradesh",
  },
  {
    id: "marcin-paprzycki",
    name: "Dr. Marcin Paprzycki",
    designation: "Associate Professor",
    institution: "Polish Academy of Sciences",
    country: "Poland",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Artificial Intelligence", "Multi-Agent Systems", "Computer Science"],
    biography:
      "Dr. Marcin Paprzycki is an Associate Professor at the Systems Research Institute of the Polish Academy of Sciences. He has extensive research contributions in artificial intelligence, distributed computing, and agent-based systems. He is widely recognized for his work on semantic web technologies, software agents, and parallel computing. He has authored numerous publications in leading international journals and conferences.",
    initials: "MP",
    image: null,
    altText: "Dr. Marcin Paprzycki — Associate Professor, Polish Academy of Sciences, Poland",
  },
  {
    id: "ghanshyam-singh",
    name: "Prof. Ghanshyam Singh",
    designation: "Professor & Director",
    institution: "University of Johannesburg",
    country: "South Africa",
    speakingDate: "April 17, 2026",
    expertiseTags: ["Electronics", "Photonics", "Communication Systems"],
    biography:
      "Prof. Ghanshyam Singh is a Professor and Director at the University of Johannesburg, South Africa, leading cutting-edge research in electronics and photonic systems. He has made seminal contributions to the fields of optical fiber communications, metamaterials, and photonic crystal fibers. His research work has been widely cited and he has collaborated with leading institutions worldwide.",
    initials: "GS",
    image: null,
    altText: "Prof. Ghanshyam Singh — Professor & Director, University of Johannesburg, South Africa",
  },
  {
    id: "jagdish-chand-bansal",
    name: "Dr. Jagdish Chand Bansal",
    designation: "Professor",
    institution: "South Asian University",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Swarm Intelligence", "Optimization", "Machine Learning"],
    biography:
      "Dr. Jagdish Chand Bansal is a Professor at South Asian University with pioneering contributions to swarm intelligence, nature-inspired computing, and optimization algorithms. He is widely recognized for developing novel bio-inspired algorithms and their applications in engineering and science. He has edited and authored several books on nature-inspired computing and has mentored numerous doctoral researchers in this field.",
    initials: "JB",
    image: null,
    altText: "Dr. Jagdish Chand Bansal — Professor, South Asian University, India",
  },
  {
    id: "jai-gopal-pandey",
    name: "Dr. Jai Gopal Pandey",
    designation: "Scientist-F",
    institution: "CSIR-Central Electronics Engineering Research Institute (CEERI), Pilani",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["VLSI Design", "Embedded Systems", "Electronic Circuits"],
    biography:
      "Dr. Jai Gopal Pandey is a Scientist-F at CSIR-CEERI Pilani, one of India's premier research institutions in the field of electronics. He specializes in VLSI design, embedded systems, and advanced electronic circuit research. His work encompasses low-power circuit design, hardware security, and reconfigurable computing, with significant contributions to national research programmes.",
    initials: "JP",
    image: null,
    altText: "Dr. Jai Gopal Pandey — Scientist-F, CSIR-CEERI Pilani, India",
  },
  {
    id: "m-santosh-kumar",
    name: "M. Santosh Kumar",
    designation: "Scientist-F",
    institution: "CSIR-Central Electronics Engineering Research Institute (CEERI), Pilani",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Micro-electronics", "Sensors", "MEMS"],
    biography:
      "M. Santosh Kumar is a Scientist-F at CSIR-CEERI Pilani, contributing to cutting-edge research in micro-electronics, sensors, and MEMS (Micro-Electro-Mechanical Systems) technology. His work focuses on the development of advanced sensor technologies and miniaturized electronic systems with applications in healthcare, defence, and industrial monitoring systems.",
    initials: "SK",
    image: null,
    altText: "M. Santosh Kumar — Scientist-F, CSIR-CEERI Pilani, India",
  },
  {
    id: "ashwin-c-gowda",
    name: "Dr. Ashwin C Gowda",
    designation: "Assistant Professor",
    institution: "Visvesvaraya Technological University, Bengaluru Region",
    country: "India",
    speakingDate: "April 18, 2026",
    expertiseTags: ["Signal Processing", "Communication", "VLSI"],
    biography:
      "Dr. Ashwin C Gowda is an Assistant Professor at Visvesvaraya Technological University, Bengaluru Region, with active research in signal processing and communication systems. His research contributions include work on wireless communications, digital signal processing, and VLSI-based implementation of communication algorithms. He has published extensively in reputed international journals and conferences.",
    initials: "AG",
    image: null,
    altText: "Dr. Ashwin C Gowda — Assistant Professor, Visvesvaraya Technological University, India",
  },
];

// ============================================================
// PAST SPEAKERS — Previous ICRACS Editions
// ============================================================

export const pastSpeakers: PastSpeaker[] = [
  {
    id: "brij-gupta",
    name: "Prof. Brij Gupta",
    designation: "Distinguished Professor",
    institution: "Director, Center for AI and Cyber Security | Board of Governors, IEEE CT Society",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Cybersecurity", "AI Security", "Cloud Computing", "IoT Security"],
    biography:
      "Prof. Brij Gupta is a Distinguished Professor and Director of the Center for Artificial Intelligence and Cyber Security. He serves on the Board of Governors of the IEEE Consumer Technology Society. He is a highly cited researcher in the field of cybersecurity, cloud computing, and IoT security. His pioneering research has fundamentally advanced the understanding of security paradigms in distributed and intelligent systems.",
    initials: "BG",
    image: null,
    altText: "Prof. Brij Gupta — Distinguished Professor, Center for AI and Cyber Security",
  },
  {
    id: "dharam-singh",
    name: "Dr. Dharam Singh",
    designation: "Professor",
    institution: "University of Namibia",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Wireless Communications", "Network Security", "IoT"],
    biography:
      "Dr. Dharam Singh is a Professor at the University of Namibia with expertise in wireless communications, network security, and Internet of Things. He has contributed extensively to research in communication systems and has published numerous papers in international journals and conference proceedings. He is actively involved in building research capacity in Africa and internationally.",
    initials: "DS",
    image: null,
    altText: "Dr. Dharam Singh — Professor, University of Namibia",
  },
  {
    id: "valentina-balas",
    name: "Prof. Valentina E. Balas",
    designation: "Professor",
    institution: "Aurel Vlaicu University of Arad",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Soft Computing", "Fuzzy Logic", "Intelligent Systems", "Machine Learning"],
    biography:
      "Prof. Valentina E. Balas is a distinguished professor at Aurel Vlaicu University of Arad, Romania, known for her pioneering work in fuzzy logic, soft computing, and intelligent systems. She serves on the editorial board of several international journals and has been a program committee member for numerous prestigious conferences worldwide. Her research spans computational intelligence and its applications.",
    initials: "VB",
    image: null,
    altText: "Prof. Valentina E. Balas — Professor, Aurel Vlaicu University of Arad, Romania",
  },
  {
    id: "akash-saxena",
    name: "Dr. Akash Saxena",
    designation: "Professor",
    institution: "Swami Keshvanand Institute of Technology, Jaipur",
    conferenceEdition: "ICRACS 2025",
    expertiseTags: ["Power Systems", "Optimization", "Smart Grid", "Renewable Energy"],
    biography:
      "Dr. Akash Saxena is a Professor at Swami Keshvanand Institute of Technology, Jaipur, specializing in power systems, optimization, and smart grid technologies. He has made significant contributions to energy-efficient computing and intelligent power systems. His research work on meta-heuristic optimization has been well received in the academic community with numerous citations.",
    initials: "AS",
    image: null,
    altText: "Dr. Akash Saxena — Professor, Swami Keshvanand Institute of Technology, Jaipur",
  },
  {
    id: "ravi-kumar-arya",
    name: "Prof. Ravi Kumar Arya",
    designation: "Professor",
    institution: "Indian Institute of Technology (IIT) Delhi",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Chemical Engineering", "Coatings", "Polymer Science", "Transport Phenomena"],
    biography:
      "Prof. Ravi Kumar Arya is a Professor in the Department of Chemical Engineering at IIT Delhi. His research focuses on transport phenomena in polymer solutions, coating technologies, and drying processes. He has made foundational contributions to the understanding of diffusion in polymer systems and has guided numerous doctoral students. He is a fellow of several prestigious scientific bodies.",
    initials: "RA",
    image: null,
    altText: "Prof. Ravi Kumar Arya — Professor, IIT Delhi",
  },
  {
    id: "ankit-agrawal",
    name: "Dr. Ankit Agrawal",
    designation: "Research Scientist",
    institution: "Argonne National Laboratory, USA",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Machine Learning", "High Performance Computing", "Data Mining", "Materials Science"],
    biography:
      "Dr. Ankit Agrawal is a Research Scientist at Argonne National Laboratory, USA, working at the intersection of machine learning, high-performance computing, and materials informatics. His research applies data-driven approaches to accelerate scientific discovery in materials science. He has developed novel algorithms for knowledge discovery from large-scale scientific datasets.",
    initials: "AA",
    image: null,
    altText: "Dr. Ankit Agrawal — Research Scientist, Argonne National Laboratory, USA",
  },
  {
    id: "vijayshri-chaurasiya",
    name: "Dr. Vijayshri Chaurasiya",
    designation: "Associate Professor",
    institution: "Vellore Institute of Technology (VIT), Bhopal",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Signal Processing", "Biomedical Engineering", "Wavelet Analysis", "Image Processing"],
    biography:
      "Dr. Vijayshri Chaurasiya is an Associate Professor at VIT Bhopal with expertise in digital signal processing, biomedical signal analysis, and image processing. Her research contributions include novel wavelet-based techniques for biomedical signal processing and disease detection. She has published extensively in high-impact journals and is actively engaged in interdisciplinary research.",
    initials: "VC",
    image: null,
    altText: "Dr. Vijayshri Chaurasiya — Associate Professor, VIT Bhopal",
  },
  {
    id: "sandeep-saxena",
    name: "Prof. Sandeep Saxena",
    designation: "Professor",
    institution: "GLA University, Mathura",
    conferenceEdition: "ICRACS 2024",
    expertiseTags: ["Computer Vision", "Deep Learning", "Medical Imaging", "Pattern Recognition"],
    biography:
      "Prof. Sandeep Saxena is a Professor at GLA University, Mathura, with a strong research focus on computer vision, deep learning, and medical image analysis. He has developed several deep learning models for automated disease detection from medical images. His research has been published in leading journals and he has contributed to advancing AI-assisted diagnostics.",
    initials: "SS",
    image: null,
    altText: "Prof. Sandeep Saxena — Professor, GLA University, Mathura",
  },
];

// ============================================================
// SPEAKER INFORMATION SECTION
// ============================================================

export const keynoteSessionInfo: KeynoteSessionInfo = {
  duration: "45-minute presentations followed by Q&A",
  format: "In-person and virtual hybrid sessions",
  focus: "Focus on cutting-edge research and industry trends",
  interaction: "Interactive discussions with conference participants",
};

// ============================================================
// TOPICS COVERAGE
// ============================================================

export const topicsCoverage: TopicCoverage[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Latest advances in Artificial Intelligence and Machine Learning techniques",
    icon: "Brain",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Computer Vision and Image Processing innovations shaping the future",
    icon: "Eye",
  },
  {
    id: "smart-systems",
    title: "Smart Systems & IoT",
    description: "Smart Systems and IoT Applications transforming industries",
    icon: "Cpu",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & AI",
    description: "Cybersecurity and AI integration for robust digital infrastructure",
    icon: "Shield",
  },
];

// ============================================================
// SPEAKING OPPORTUNITIES
// ============================================================

export const speakingOpportunities: SpeakingOpportunity = {
  heading: "Speaking Opportunities",
  description:
    "ICRACS 2026 welcomes distinguished researchers and industry experts to share their insights and contribute to advancing the frontiers of Artificial Intelligence, Computer Vision, and Smart Systems. If you are a leading researcher or practitioner in these domains and wish to deliver a keynote or invited talk, we encourage you to reach out to the organizing committee. Our conference brings together academia, research institutions, and industry professionals, providing an exceptional platform to present groundbreaking work and engage with a highly motivated audience from across the globe.",
  contactEmail: "icracs@poornima.org",
  contactSubject: "Speaking Opportunity Inquiry — ICRACS 2026",
};
