export type InternalRoute = "/" | "/research/" | "/publications/" | "/about/";

export interface NavigationItem {
  label: string;
  href: InternalRoute;
}

export interface RecognitionItem {
  title: string;
  detail?: string;
  year?: number;
}

export interface SiteData {
  profile: {
    name: string | null;
    academicTitle: string | null;
    institution: string | null;
    department: string | null;
    researchIdentity: string;
    email: string | null;
    googleScholarUrl: string | null;
    researchGateUrl: string | null;
    cvPath: string | null;
  };
  research: {
    agendaSummary: string | null;
    arc: readonly string[];
  };
  about: {
    academicPath: string | null;
    visitingExperience: string | null;
    personalIntroduction: string | null;
    beyondResearch: string | null;
  };
  selectedRecognition: readonly RecognitionItem[];
  navigation: readonly NavigationItem[];
  siteDescription: string;
}

export const siteData: SiteData = {
  profile: {
    name: "Yuxin Jin",
    academicTitle: "Ph.D. Candidate in Applied Mathematics",
    institution: "Beihang University",
    department: "School of Mathematical Science",
    researchIdentity: "Stochastic Control and Games with Imperfect Information",
    email: "yxjin@buaa.edu.cn",
    googleScholarUrl:
      "https://scholar.google.com/citations?hl=zh-CN&user=Jr37-eoAAAAJ",
    researchGateUrl: "https://www.researchgate.net/profile/Yuxin-Jin-19",
    cvPath: null,
  },
  research: {
    agendaSummary:
      "My research is organized around a recurring question: how should strategic agents respond when the information underlying their decisions is imperfect?",
    arc: [
      "Imperfect Information",
      "Information Identification",
      "Strategy Revision",
    ],
  },
  about: {
    academicPath:
      "I am a Ph.D. Candidate in Applied Mathematics at Beihang University. I previously completed a Bachelor of Science at Beihang University.",
    visitingExperience:
      "I am currently a visiting PhD researcher in the Department of Mathematics at the University of Padova.",
    personalIntroduction:
      "I study stochastic control and game-theoretic problems in which agents make decisions under incorrect, incomplete, or delayed information. My research focuses on how such information can be identified and updated, and how strategic decisions should subsequently be revised.",
    beyondResearch:
      "Outside research, I play the piano and guitar, enjoy traveling and photography, and occasionally spend time on rubber-stamp carving and handmade crafts.",
  },
  selectedRecognition: [
    {
      title: "CAST Young Talent Lifting Project, Doctoral Special Program",
      year: 2025,
    },
    { title: "2025 IEEE CDC & Workshop Student Travel Support", year: 2025 },
    { title: "Doctoral National Scholarship", detail: "October 2025", year: 2025 },
    { title: "First-Class Academic Scholarship", year: 2024 },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research/" },
    { label: "Publications", href: "/publications/" },
    { label: "About", href: "/about/" },
  ],
  siteDescription:
    "Academic homepage for research in Stochastic Control and Games with Imperfect Information.",
};
