import type { ImageMetadata } from "astro";
import archwayPhoto from "../assets/images/photography/archway.jpg";
import coastPhoto from "../assets/images/photography/coast.jpg";
import moonRiverPhoto from "../assets/images/photography/moon-river.jpg";
import nightSkyPhoto from "../assets/images/photography/night-sky.jpg";
import snowCabinPhoto from "../assets/images/photography/snow-cabin.jpg";

export type InternalRoute = "/" | "/research/" | "/publications/" | "/about/";

export interface NavigationItem {
  label: string;
  href: InternalRoute;
}

export interface EducationRecord {
  degree: string;
  field?: string;
  institution: string;
  department?: string;
  startDate?: string;
  endDate?: string;
  expectedEndDate?: string;
  note?: string;
  advisors?: readonly string[];
}

export interface VisitingRecord {
  role: string;
  institution: string;
  department?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  host?: string;
  description?: string;
}

export interface TeachingRecord {
  course: string;
  role: string;
  startDate?: string;
  endDate?: string;
  unit: string;
  responsibilities?: readonly string[];
  ledTutorials?: boolean;
}

export interface PresentationRecord {
  title: string;
  event: string;
  date?: string;
  year?: number;
  location?: string;
  presentationType: string;
  presentationMode?: string;
  relatedPublicationId?: string;
  paperUrl?: string;
  slidesUrl?: string;
  videoUrl?: string;
  invited?: boolean;
  displayOrder?: number;
}

export interface RecognitionItem {
  title: string;
  date?: string;
  detail?: string;
  year?: number;
  issuer?: string;
  selected: boolean;
  displayOrder?: number;
}

export interface PersonalInterest {
  label: string;
  description?: string;
}

export interface PhotographyAsset {
  src: ImageMetadata;
  alt: string;
  displayOrder: number;
  orientation: "portrait" | "landscape";
  caption?: string;
  year?: number;
  location?: string;
}

export interface ResearchArcStage {
  number: string;
  title: string;
  description?: string;
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
    funding: string | null;
    currentStatus: string | null;
  };
  research: {
    heroSummary: string | null;
    agendaSummary: string | null;
    arc: readonly ResearchArcStage[];
    keywords: readonly string[];
    structuredInformationNote: string | null;
  };
  about: {
    biography: {
      short: string | null;
      long: readonly string[] | null;
      teaser: string | null;
    };
    education: readonly EducationRecord[];
    visiting: readonly VisitingRecord[];
    teaching: readonly TeachingRecord[];
    presentations: readonly PresentationRecord[];
    recognition: readonly RecognitionItem[];
    beyondResearch: string | null;
    interests: readonly PersonalInterest[];
    photography: readonly PhotographyAsset[];
  };
  navigation: readonly NavigationItem[];
  siteDescription: string;
}

export const siteData: SiteData = {
  profile: {
    name: "Yuxin Jin",
    academicTitle: "Ph.D. Candidate in Applied Mathematics",
    institution: "Beihang University",
    department: "School of Mathematical Sciences",
    researchIdentity: "Stochastic Control and Games with Imperfect Information",
    email: "yxjin@buaa.edu.cn",
    googleScholarUrl:
      "https://scholar.google.com/citations?hl=zh-CN&user=Jr37-eoAAAAJ",
    researchGateUrl: "https://www.researchgate.net/profile/Yuxin-Jin-19",
    cvPath: null,
    funding: "China Scholarship Council (CSC)",
    currentStatus:
      "Currently a visiting Ph.D. student at the Department of Mathematics, University of Padova.",
  },
  research: {
    heroSummary:
      "I study stochastic control and game-theoretic problems in which agents make decisions under incorrect, incomplete, or delayed information. My current work asks how agents can identify information discrepancies and revise their strategies as new information becomes available, primarily in mean field games and large-population stochastic systems.",
    agendaSummary:
      "I organize this work around three connected questions.",
    arc: [
      {
        number: "01",
        title: "Imperfect Information",
        description:
          "I study how incorrect, incomplete, or delayed information changes individual decisions and collective dynamics in stochastic games and large-population systems.",
      },
      {
        number: "02",
        title: "Inference and Updating",
        description:
          "I investigate how agents detect information discrepancies, estimate hidden or population-level quantities from available observations, and update beliefs when decision-relevant data are incomplete or misspecified.",
      },
      {
        number: "03",
        title: "Strategy Revision",
        description:
          "I study how agents should update their controls or strategies after new or corrected information becomes available, and how such revisions affect subsequent system behavior.",
      },
    ],
    keywords: [
      "Stochastic Control",
      "Game Theory",
      "Mean Field Games",
      "Multi-Agent Systems",
      "Decision-Making under Uncertainty",
      "Information Structures",
    ],
    structuredInformationNote:
      "Major–minor systems provide one setting in which information asymmetry becomes especially pronounced. Although minor agents can directly observe the major state, this does not reveal the major's possibly erroneous belief or the future strategy induced by that belief. Moreover, because the major agent remains non-negligible in the mean-field limit, its process noise does not average out, and the limiting population dynamics remain stochastic.",
  },
  about: {
    biography: {
      short:
        "I am a Ph.D. candidate in Applied Mathematics at Beihang University, jointly trained by the School of Mathematical Sciences and Shen Yuan Honors College through the university's doctoral honors program.",
      long: [
        "I am a Ph.D. candidate in Applied Mathematics at Beihang University, jointly trained by the School of Mathematical Sciences and Shen Yuan Honors College through the university's doctoral honors program. I began my graduate studies in mathematics in 2022 and transferred to the integrated M.Sc.–Ph.D. track in 2023.",
        "My research lies at the intersection of stochastic control, game theory, and information structures. I am particularly interested in decision-making when agents act under incorrect, incomplete, or delayed information: how information discrepancies can be identified from available observations, how beliefs or estimates should be updated, and how strategies should subsequently be revised. My current work develops these questions primarily in mean field games and large-population stochastic systems.",
        "Since December 2025, I have been a visiting Ph.D. student at the Department of Mathematics, University of Padova.",
      ],
      teaser:
        "I am a Ph.D. candidate in Applied Mathematics at Beihang University, jointly trained by the School of Mathematical Sciences and Shen Yuan Honors College through the university's doctoral honors program.",
    },
    education: [
      {
        degree: "Ph.D. Candidate",
        field: "Applied Mathematics",
        institution: "Beihang University",
        department: "School of Mathematical Sciences",
        startDate: "2023",
        expectedEndDate: "2027 (expected)",
        note:
          "Jointly trained by the School of Mathematical Sciences and Shen Yuan Honors College through Beihang's doctoral honors program. Transferred to the integrated M.Sc.–Ph.D. track in 2023.",
      },
      {
        degree: "Master's Student",
        field: "Mathematics",
        institution: "Beihang University",
        department: "School of Mathematical Sciences",
        startDate: "2022",
        endDate: "2023",
        note: "Continued into the integrated M.Sc.–Ph.D. track in 2023.",
      },
      {
        degree: "B.Sc.",
        field: "Mathematics",
        institution: "Beihang University",
        startDate: "2018",
        endDate: "2022",
        note: "Study track in Information Security.",
      },
    ],
    visiting: [
      {
        role: "Visiting Ph.D. Student",
        institution: "University of Padova",
        department: "Department of Mathematics",
        location: "Padova, Italy",
        startDate: "Dec. 2025",
        current: true,
      },
    ],
    teaching: [
      {
        course: "Game Theory",
        role: "Teaching Assistant",
        startDate: "Mar. 2025",
        endDate: "Jun. 2025",
        unit: "School of Mathematical Sciences, Beihang University",
        responsibilities: [
          "conducted tutorials",
          "graded assignments",
          "answered student questions",
        ],
        ledTutorials: true,
      },
      {
        course: "Differential Equations",
        role: "Teaching Assistant",
        startDate: "Mar. 2025",
        endDate: "Jun. 2025",
        unit: "Shen Yuan Honors College, Beihang University",
        responsibilities: [
          "conducted tutorials",
          "graded assignments",
          "answered student questions",
        ],
        ledTutorials: true,
      },
      {
        course: "Matrix Theory",
        role: "Teaching Assistant",
        startDate: "Sep. 2024",
        endDate: "Jan. 2025",
        unit: "School of Mathematical Sciences, Beihang University",
        responsibilities: ["graded assignments", "answered student questions"],
      },
      {
        course: "Mathematical Analysis",
        role: "Teaching Assistant",
        startDate: "Sep. 2023",
        endDate: "Jun. 2024",
        unit: "Shen Yuan Honors College, Beihang University",
        responsibilities: [
          "conducted tutorials",
          "graded assignments",
          "answered student questions",
        ],
        ledTutorials: true,
      },
      {
        course: "Mathematical Logic and Set Theory",
        role: "Teaching Assistant",
        startDate: "Mar. 2023",
        endDate: "Jun. 2023",
        unit: "School of Mathematical Sciences, Beihang University",
        responsibilities: ["graded assignments", "answered student questions"],
      },
      {
        course: "Applied Cryptography",
        role: "Teaching Assistant",
        startDate: "Sep. 2022",
        endDate: "Jan. 2023",
        unit: "School of Mathematical Sciences, Beihang University",
        responsibilities: [
          "conducted tutorials",
          "graded assignments",
          "answered student questions",
        ],
        ledTutorials: true,
      },
    ],
    presentations: [
      {
        title:
          "Initial Error Tolerant Distributed Mean Field Control under Partial and Discrete Information",
        event: "IEEE Conference on Decision and Control (CDC)",
        year: 2025,
        location: "Rio de Janeiro, Brazil",
        presentationType: "Oral presentation",
        relatedPublicationId: "initial-error-tolerant-distributed-mean-field-control",
        displayOrder: 1,
      },
      {
        title:
          "Initial Error Affection and Strategy Modification in Multi-Population LQ Mean Field Games under Erroneous Initial Distribution Information",
        event: "63rd IEEE Conference on Decision and Control (CDC)",
        year: 2024,
        location: "Milan, Italy",
        presentationType: "Oral presentation",
        relatedPublicationId: "initial-error-affection-strategy-modification",
        displayOrder: 2,
      },
      {
        title:
          "Trajectory Planning for A Massive Number of UAVs in the Environment with Static and Dynamic Obstacles: A Mean Field Game Approach",
        event: "IEEE International Conference on Agents (ICA)",
        year: 2022,
        location: "Adelaide, Australia",
        presentationType: "Oral presentation",
        presentationMode: "Online",
        relatedPublicationId: "trajectory-planning-massive-uavs",
        displayOrder: 3,
      },
    ],
    recognition: [
      {
        title: "National Scholarship for Graduate Students",
        year: 2025,
        selected: true,
        displayOrder: 1,
        detail:
          "China's highest national-level scholarship honor for graduate students, recognizing outstanding academic achievement, research ability, and development potential.",
      },
      {
        title: "2025 IEEE CDC & Workshop Student Travel Support",
        year: 2025,
        selected: false,
        displayOrder: 2,
        detail:
          "Travel support from the IEEE Control Systems Society for participation in the IEEE Conference on Decision and Control.",
      },
      {
        title: "First-Class Graduate Academic Scholarship",
        year: 2025,
        selected: false,
        displayOrder: 3,
        detail:
          "An annual graduate academic scholarship at Beihang University, awarded on the basis of academic and research performance.",
      },
      {
        title: "CAST Young Talent Lifting Project — Doctoral Special Program",
        year: 2024,
        selected: true,
        displayOrder: 1,
        detail:
          "Inaugural cohort, 2024. A doctoral talent-support program established by the China Association for Science and Technology (CAST), providing research support and academic exchange opportunities to selected Ph.D. students. Certificate issued in 2025.",
      },
      {
        title: "2024 IEEE CDC Student Travel Support",
        year: 2024,
        selected: false,
        displayOrder: 2,
        detail:
          "Travel support from the IEEE Control Systems Society for participation in the IEEE Conference on Decision and Control.",
      },
      {
        title: "First-Class Graduate Academic Scholarship",
        year: 2024,
        selected: false,
        displayOrder: 3,
      },
    ],
    beyondResearch:
      "Outside research, I play the piano and guitar, enjoy traveling and photography, and occasionally spend time on rubber-stamp carving and handmade crafts.",
    interests: [
      { label: "Piano" },
      { label: "Guitar" },
      { label: "Travel" },
      { label: "Photography" },
      { label: "Hand-carved stamps and handmade crafts" },
    ],
    photography: [
      {
        src: archwayPhoto,
        alt: "Cyclists and pedestrians passing through a shaded archway toward a sunlit street.",
        displayOrder: 1,
        orientation: "portrait",
      },
      {
        src: coastPhoto,
        alt: "Two people sitting among rocks beside the sea.",
        displayOrder: 2,
        orientation: "landscape",
      },
      {
        src: moonRiverPhoto,
        alt: "A moon above a river valley with layered colored rock in the foreground.",
        displayOrder: 3,
        orientation: "portrait",
      },
      {
        src: snowCabinPhoto,
        alt: "A small wooden building among snow-covered trees under a warm winter sky.",
        displayOrder: 4,
        orientation: "landscape",
      },
      {
        src: nightSkyPhoto,
        alt: "A star-filled night sky above a dark mountain silhouette.",
        displayOrder: 5,
        orientation: "landscape",
      },
    ],
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research/" },
    { label: "Publications", href: "/publications/" },
    { label: "About", href: "/about/" },
  ],
  siteDescription:
    "Academic homepage for research in Stochastic Control and Games with Imperfect Information.",
};
