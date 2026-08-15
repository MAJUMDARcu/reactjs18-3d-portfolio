import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  python,
  pandas,
  numpy,
  scikitlearn,
  jupyter,
  mysql,
  git,
  github,
  placeholderProject,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// The four chips shown under the hero heading.
const services: TService[] = [
  {
    title: "Data Analysis",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Equity Research",
    icon: mobile,
  },
  {
    title: "Financial Modeling",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "scikit-learn",
    icon: scikitlearn,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

// Education + certifications timeline (repurposing the "experience" section).
// TODO: fill in real start/end dates and add NISM XV / CFA L1 once completed.
const experiences: TExperience[] = [
  {
    title: "BSc Data Science",
    companyName: "Guru Nanak Institute of Technology (MAKAUT)",
    icon: web,
    iconBg: "#383E56",
    date: "2023 — Present",
    points: [
      "Third-year Data Science student, coursework spanning ML, statistics, and Python for data science.",
      "Built FraudShield, an ML-based fake job posting detector, as part of the BCT course.",
      "Currently building a SEBI-style pre-announcement trading anomaly detection pipeline (ONGC).",
    ],
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    companyName: "IBM / Coursera",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Completed",
    points: [
      "Data analysis, visualization, and SQL fundamentals across a multi-course professional certificate track.",
    ],
  },
  {
    title: "Financial Markets",
    companyName: "Yale University / Coursera",
    icon: mobile,
    iconBg: "#383E56",
    date: "Completed",
    points: [
      "Foundations of financial markets, institutions, and behavioral finance, taught by Robert Shiller.",
    ],
  },
  {
    title: "NISM Series XV (Research Analyst) & CFA Level 1",
    companyName: "In progress",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Targeting 2026 — 2027",
    points: [
      "Preparing for the NISM Research Analyst certification and CFA Level 1 ahead of fourth-year placements.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "FraudShield — Fake Job Posting Detector",
    description:
      "ML pipeline that flags fraudulent job postings using TF-IDF text features and logistic regression, trained on the EMSCAD dataset, with a Streamlit dashboard for real-time predictions. Built with team Neural Nexus for GNIT's BCT course.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: placeholderProject,
    // TODO: replace with your actual GitHub repo link.
    sourceCodeLink: "https://github.com/",
  },
  // TODO: uncomment and fill in once the ONGC anomaly detection project ships.
  // {
  //   name: "Pre-Announcement Trading Anomaly Detection (ONGC)",
  //   description:
  //     "SEBI-style market surveillance pipeline that flags abnormal price/volume activity ahead of price-sensitive corporate announcements.",
  //   tags: [
  //     { name: "python", color: "blue-text-gradient" },
  //     { name: "pandas", color: "green-text-gradient" },
  //     { name: "market-data", color: "pink-text-gradient" },
  //   ],
  //   image: placeholderProject,
  //   sourceCodeLink: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects, github };
