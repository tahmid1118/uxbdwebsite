import type {
  NavItem,
  PortfolioItem,
  Representative,
  Service,
  Stat,
  TeamMember,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const stats: Stat[] = [
  { value: "2019", label: "Established" },
  { value: "50", label: "Projects Delivered", suffix: "+" },
  { value: "5", label: "Core Products", suffix: "+" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
];

export const services: Service[] = [
  {
    id: "diagnostic",
    icon: "Cpu",
    title: "Hardware Diagnostic Software",
    description:
      "Advanced diagnostic tools that test every hardware component — CPU, memory, storage, camera, sensors — with high accuracy and speed.",
    features: [
      "Windows & Mac OS support",
      "UEFI/BIOS-level diagnostics",
      "Mobile device diagnostics",
      "Automated test reporting",
      "30+ diagnostic categories",
    ],
    color: "red",
  },
  {
    id: "erasure",
    icon: "ShieldCheck",
    title: "Secure Data Erasure Tools",
    description:
      "Certified data erasure solutions for PC, Mac, tablets, and smartphones ensuring complete data destruction for secure device reuse.",
    features: [
      "DoD/NIST standard erasure",
      "ADEC certified process",
      "iOS & Android support",
      "Batch erasure capability",
      "Audit trail generation",
    ],
    color: "green",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Device Management",
    description:
      "Comprehensive toolset for mobile device lifecycle — from purchase assessment and diagnostics to certified erasure and reuse certification.",
    features: [
      "Diagnostic items",
      "iPhone/iPad tools",
      "Android assessments",
      "IMEI & spec reporting",
      "Battery health analysis",
    ],
    color: "green",
  },
  {
    id: "embedded",
    icon: "Code2",
    title: "Embedded Diagnostic Firmware",
    description:
      "Pre-integrated diagnostic firmware solutions embedded directly into devices so end-users can self-diagnose instantly.",
    features: [
      "Firmware-level integration",
      "Field support enablement",
      "Remote diagnostics",
      "Minimal footprint",
      "Real-time telemetry",
    ],
    color: "red",
  },
  {
    id: "custom",
    icon: "Layers",
    title: "Custom Software Development",
    description:
      "Tailor-made enterprise software, web platforms, and automation tools crafted for Japanese IT clients' specific operational needs.",
    features: [
      "React / Next.js web apps",
      "API & backend systems",
      "Database design",
      "Process automation",
      "DevOps & CI/CD",
    ],
    color: "green",
  },
  {
    id: "japan-dev",
    icon: "Globe",
    title: "Software for Japanese & Global Markets",
    description:
      "End-to-end software development tailored for Japanese and international clients, meeting the highest standards of quality and localisation.",
    features: [
      "Japanese market localisation",
      "Multi-language support",
      "Regulatory compliance",
      "International release pipelines",
      "Long-term maintenance",
    ],
    color: "red",
  },
  {
    id: "rd",
    icon: "FlaskConical",
    title: "R&D — Innovative IT Solutions",
    description:
      "Research and development of next-generation IT tools, exploring emerging technologies to stay ahead of market demands.",
    features: [
      "Prototype development",
      "Emerging tech exploration",
      "Patent-ready innovation",
      "Cross-team collaboration",
      "Iterative R&D cycles",
    ],
    color: "green",
  },
  {
    id: "tradeshows",
    icon: "Building2",
    title: "International Trade Show Participation",
    description:
      "Active participation in leading IT trade shows in Japan and Bangladesh, showcasing products and building global partnerships.",
    features: [
      "Japan & BD exhibitions",
      "Product demonstrations",
      "Partner networking",
      "Market trend insights",
      "Brand visibility",
    ],
    color: "red",
  },
  {
    id: "uxap",
    icon: "Handshake",
    title: "Collaboration with ULTRA-X ASIA PACIFIC",
    description:
      "Strategic partnership with ULTRA-X ASIA PACIFIC to co-develop, distribute, and support world-class IT diagnostic and erasure solutions.",
    features: [
      "Joint product development",
      "Technology licensing",
      "Regional distribution",
      "Technical support alignment",
      "Shared quality standards",
    ],
    color: "green",
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: "pc-checkup",
    title: "PC Checkup",
    category: "Diagnostic Tool",
    description:
      "Windows-based hardware diagnostic tool used by major reuse businesses for PC assessment and quality validation during resale.",
    tech: ["C++", "Windows API", "DirectX", "UEFI"],
    year: "2020",
    color: "red",
  },
  {
    id: "flasherase",
    title: "FlashErase Series",
    category: "Data Erasure",
    description:
      "Independent OS-based data erasure suite supporting HDD, SSD, USB drives across any PC or server configuration.",
    tech: ["C", "Linux Kernel", "Boot Media", "Cryptography"],
    year: "2021",
    color: "green",
  },
  {
    id: "mobile-pliers",
    title: "Mobile Pliers",
    category: "Mobile Diagnostic",
    description:
      "JITAD-certified smartphone diagnostic tool covering 30+ test categories for screen, camera, sensors, and connectivity.",
    tech: ["Android SDK", "iOS API", "React Native", "REST API"],
    year: "2022",
    color: "red",
  },
  {
    id: "nexterase",
    title: "NextErase",
    category: "Data Erasure",
    description:
      "Media-free Windows data erasure tool enabling secure drive wiping without any external boot devices or preparation.",
    tech: ["C#", ".NET", "Win32 API", "Driver SDK"],
    year: "2022",
    color: "green",
  },
  {
    id: "ultrapost",
    title: "UltraPOST",
    category: "Embedded Diagnostic",
    description:
      "Firmware-embedded diagnostic tool pre-installed at manufacturing that activates on demand for field support scenarios.",
    tech: ["UEFI", "Assembly", "C", "Firmware SDK"],
    year: "2023",
    color: "red",
  },
  {
    id: "tenkai",
    title: "TENKAI OS Manager",
    category: "OS Deployment",
    description:
      "Automated Windows OS backup and deployment platform for PC manufacturers and large-scale corporate kitting operations.",
    tech: ["PowerShell", "WinPE", "DISM", "C#"],
    year: "2023",
    color: "green",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Md. Rafiqul Islam",
    role: "CEO & Co-Founder",
    bio: "20+ years in software engineering and IT infrastructure, leading Ultra-X BD's growth since 2019.",
    initials: "RI",
  },
  {
    name: "Shahriar Ahmed",
    role: "CTO",
    bio: "Expert in systems programming and embedded systems, architect of our core diagnostic engine.",
    initials: "SA",
  },
  {
    name: "Nusrat Jahan",
    role: "Lead Engineer",
    bio: "Full-stack engineer specializing in cross-platform desktop and web application development.",
    initials: "NJ",
  },
  {
    name: "Tanvir Hassan",
    role: "Project Manager",
    bio: "Bridges our Bangladesh team with our Japanese client relationships ensuring flawless delivery.",
    initials: "TH",
  },
];

export const representatives: Representative[] = [
  {
    name: "Tatsuya Hattori",
    role: "CEO",
    title: "Chief Executive Officer",
    initials: "TH",
    color: "red",
    // photo: "/assets/images/ceo.jpg",
  },
  {
    name: "Masami Ishibashi",
    role: "Division Director",
    title: "Division Director",
    initials: "MI",
    color: "green",
    // photo: "/assets/images/division-director.jpg",
  },
  {
    name: "Md. Lizur Rahman",
    role: "Regional Manager",
    title: "Regional Manager — Bangladesh",
    initials: "LR",
    color: "red",
    photo: "/assets/images/Lizur2-removebg-preview.png",
  },
];
