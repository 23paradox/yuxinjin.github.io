import type { ImageMetadata } from "astro";
import archwayPhoto from "../assets/images/photography/archway.jpg";
import coastPhoto from "../assets/images/photography/coast.jpg";
import mountainGardenPhoto from "../assets/images/photography/mountain-garden.jpg";
import monumentEveningPhoto from "../assets/images/photography/monument-evening.jpg";
import moonRiverPhoto from "../assets/images/photography/moon-river.jpg";
import rockyCoastPhoto from "../assets/images/photography/rocky-coast.jpg";
import santoriniRooftopPhoto from "../assets/images/photography/santorini-rooftop.jpg";
import streetBirdsPhoto from "../assets/images/photography/street-birds.jpg";
import templeOfHeavenSnowPhoto from "../assets/images/photography/temple-of-heaven-snow.jpg";

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
  hostSupervisors?: readonly string[];
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
  id: string;
  src: ImageMetadata;
  alt: string;
  displayOrder: number;
  orientation: "portrait" | "landscape";
  carousel?: "portrait" | "landscape";
  headerMasthead?: boolean;
  caption?: string;
  year?: number;
  location?: string;
}

export interface HomeResearchQuestion {
  title: string;
  description: string;
}

export interface ResearchPublicationReference {
  id: string;
  label: string;
}

export interface ResearchTheme {
  title: string;
  description: string;
  relatedPublications: readonly ResearchPublicationReference[];
}

export interface ResearchDirection {
  title: string;
  description: string;
}

export interface ResearchNarrative {
  leadStatement: string;
  supportingParagraph: string;
  currentResearch: readonly ResearchTheme[];
  futureDirections: readonly ResearchDirection[];
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
    homeHook: string;
    homeIntroduction: string;
    homeQuestions: readonly HomeResearchQuestion[];
    narrative: ResearchNarrative;
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
    researchIdentity: "Stochastic Control, Games, and Decision-Making under Uncertainty",
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
      "I study stochastic control and mean field games with imperfect or misspecified information. My current work examines how information discrepancies affect interacting agents, what decision-relevant information can be recovered from constrained observations, and how strategies can be replanned from local information.",
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
        title: "Decision-Relevant Inference",
        description:
          "I investigate which quantities a subsequent decision actually requires and when they can be recovered from local or constrained observations.",
      },
      {
        number: "03",
        title: "Replanning",
        description:
          "I study repeated and asynchronous continuation responses when agents have limited observations and receive revision opportunities at different times.",
      },
    ],
    keywords: [
      "Stochastic Control",
      "Mean Field Games",
      "Imperfect Information",
      "Multi-Agent Systems",
    ],
    homeHook:
      "The work is organized around three connected questions.",
    homeIntroduction:
      "I study how imperfect information affects strategic behavior, what decision-relevant quantities agents can recover, and how strategies can be replanned from local information.",
    homeQuestions: [
      {
        title: "How does imperfect information change collective behavior?",
        description:
          "I study how heterogeneous or misspecified information changes individual plans and creates discrepancies in aggregate dynamics.",
      },
      {
        title: "What decision-relevant information can agents recover?",
        description:
          "I study which quantities actually need to be identified for a subsequent decision, and when they can be recovered from local or constrained observations.",
      },
      {
        title: "How can strategies be revised with local information?",
        description:
          "I study repeated and asynchronous replanning when agents observe only local aggregate behavior and limited public information about previous revisions.",
      },
    ],
    narrative: {
      leadStatement:
        "I study how imperfect or misspecified information changes strategic behavior in stochastic control and mean field games.",
      supportingParagraph:
        "My current work focuses on information propagation, decision-relevant inference, and asynchronous replanning in mean field systems.",
      currentResearch: [
        {
          title: "Information propagation and recoverability",
          description:
            "I study how information discrepancies propagate through mean-field dynamics and which quantities must be recovered for subsequent decisions. In linear–quadratic models, this leads to finite-dimensional error representations and explicit recoverability conditions from constrained observations.",
          relatedPublications: [
            {
              id: "lq-mean-field-games-heterogeneous-erroneous-information",
              label: "Heterogeneous erroneous information, 2024",
            },
            {
              id: "initial-error-tolerant-distributed-mean-field-control",
              label: "Partial & discrete information, CDC 2025",
            },
          ],
        },
        {
          title: "Asynchronous replanning",
          description:
            "I study how populations revise continuation strategies when revision opportunities occur at different times and only local observations and limited public information are available. Current results address local implementation and the stability of repeated responses.",
          relatedPublications: [
            {
              id: "asynchronous-replanning-two-population-lq-mfg",
              label: "Asynchronous replanning, 2026",
            },
          ],
        },
        {
          title: "Stochastic and finite-population effects",
          description:
            "I study how finite-population fluctuations and stochastic aggregate dynamics affect inference and replanning, including empirical approximation and major–minor models with a stochastic limiting mean field.",
          relatedPublications: [
            {
              id: "lq-mean-field-games-heterogeneous-erroneous-information",
              label: "Heterogeneous erroneous information, 2024",
            },
            {
              id: "major-minor-lq-mean-field-games-erroneous-initial-information",
              label: "Major–minor LQ MFGs, CDC 2026",
            },
          ],
        },
      ],
      futureDirections: [
        {
          title: "Endogenous Information and Revision Decisions",
          description:
            "I am interested in settings where information acquisition, revision opportunities, or both become part of the decision problem rather than being prescribed exogenously.",
        },
        {
          title: "Beyond Linear–Quadratic Models",
          description:
            "I am interested in which aspects of information propagation, recoverability, and replanning rely on linear–quadratic structure and which may persist in nonlinear stochastic models.",
        },
      ],
    },
  },
  about: {
    biography: {
      short:
        "I am a Ph.D. candidate in Applied Mathematics at Beihang University, jointly trained by the School of Mathematical Sciences and Shen Yuan Honors College through the university's doctoral honors program.",
      long: [
        "I am a Ph.D. candidate in Applied Mathematics at Beihang University, jointly trained by the School of Mathematical Sciences and Shen Yuan Honors College through the university's doctoral honors program. I began my graduate studies in mathematics in 2022 and transferred to the integrated M.Sc.–Ph.D. track in 2023.",
        "My research is in stochastic control, game theory, and information structures, with current work on decision-making under imperfect information in mean field games and large-population stochastic systems. I also work on numerical implementation and computational experiments for mean field game models.",
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
        advisors: ["Prof. Xiao Zhang"],
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
        note:
          "Study track in Information Security, including coursework in graph theory, cryptography, and related information-security subjects.",
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
        hostSupervisors: ["Prof. Alekos Cecchin", "Prof. Markus Fischer"],
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
          "National graduate scholarship, China.",
      },
      {
        title: "2025 IEEE CDC & Workshop Student Travel Support",
        year: 2025,
        selected: false,
        displayOrder: 2,
      },
      {
        title: "First-Class Graduate Academic Scholarship",
        year: 2025,
        selected: false,
        displayOrder: 3,
      },
      {
        title: "CAST Young Talent Lifting Project — Doctoral Special Program",
        year: 2024,
        selected: true,
        displayOrder: 1,
        detail:
          "Doctoral talent-support program, China Association for Science and Technology; inaugural cohort, 2024.",
      },
      {
        title: "2024 IEEE CDC Student Travel Support",
        year: 2024,
        selected: false,
        displayOrder: 2,
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
        id: "archway",
        src: archwayPhoto,
        alt: "Cyclists and pedestrians passing through a shaded archway toward a sunlit street.",
        displayOrder: 1,
        orientation: "portrait",
        carousel: "portrait",
      },
      {
        id: "moon-river",
        src: moonRiverPhoto,
        alt: "A moon above a river valley with layered colored rock in the foreground.",
        displayOrder: 2,
        orientation: "portrait",
        carousel: "portrait",
      },
      {
        id: "monument-evening",
        src: monumentEveningPhoto,
        alt: "A monumental stone structure beneath curved architectural elements and a pale evening sky.",
        displayOrder: 3,
        orientation: "portrait",
        carousel: "portrait",
      },
      {
        id: "santorini-rooftop",
        src: santoriniRooftopPhoto,
        alt: "A small weathered boat on a white rooftop overlooking a cliffside village.",
        displayOrder: 1,
        orientation: "landscape",
        carousel: "landscape",
      },
      {
        id: "mountain-garden",
        src: mountainGardenPhoto,
        alt: "Wildflowers and garden roses beneath a mountain ridge.",
        displayOrder: 2,
        orientation: "landscape",
        carousel: "landscape",
      },
      {
        id: "coast",
        src: coastPhoto,
        alt: "Two people sitting among rocks beside the sea.",
        displayOrder: 3,
        orientation: "landscape",
        carousel: "landscape",
      },
      {
        id: "temple-of-heaven-snow",
        src: templeOfHeavenSnowPhoto,
        alt: "The Temple of Heaven framed by bare branches and a snow-lined wall.",
        displayOrder: 4,
        orientation: "landscape",
        carousel: "landscape",
      },
      {
        id: "street-birds",
        src: streetBirdsPhoto,
        alt: "A curved street beside low buildings beneath a pale sky with birds in flight.",
        displayOrder: 5,
        orientation: "landscape",
        carousel: "landscape",
        headerMasthead: true,
      },
      {
        id: "rocky-coast",
        src: rockyCoastPhoto,
        alt: "A person sitting on a rocky shore facing the sea.",
        displayOrder: 6,
        orientation: "landscape",
        carousel: "landscape",
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
    "Academic homepage for research in stochastic control, games, and decision-making under uncertainty.",
};
