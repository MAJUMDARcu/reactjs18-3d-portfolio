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
  postgresql,
  matplotlib,
  git,
  github,
  placeholderProject,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Data Analysis", icon: web },
  { title: "Machine Learning", icon: backend },
  { title: "Equity Research", icon: mobile },
  { title: "Financial Modeling", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "Python", icon: python },
  { name: "Pandas", icon: pandas },
  { name: "NumPy", icon: numpy },
  { name: "Matplotlib", icon: matplotlib },
  { name: "scikit-learn", icon: scikitlearn },
  { name: "Jupyter", icon: jupyter },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Git", icon: git },
];

const experiences: TExperience[] = [
  {
    title: "BSc Data Science",
    companyName: "Guru Nanak Institute of Technology (MAKAUT)",
    icon: web,
    iconBg: "#383E56",
    date: "2024 — 2028",
    points: [
      "Third-year Data Science student, coursework spanning statistics, ML, DBMS, and Python.",
      "Built FraudShield, an ML-based fake job posting detector, and several BI/data analysis projects.",
      "Currently building a SEBI-style pre-announcement trading anomaly detection pipeline (ONGC).",
    ],
  },
  {
    title: "IBM Data Analyst Professional Certificate",
    companyName: "IBM / Coursera",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Multi-course track covering Python, SQL, data visualization, and a full capstone project — end-to-end analysis, data cleaning, SQL querying, and dashboard creation.",
    ],
  },
  {
    title: "Power BI Data Modeling Certification",
    companyName: "Coursera",
    icon: mobile,
    iconBg: "#383E56",
    date: "2026",
    points: [
      "Star schema data modeling and KPI-driven dashboard design for business decision-making.",
    ],
  },
  {
    title: "Financial Markets",
    companyName: "Yale University / Coursera",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Completed",
    points: [
      "Foundations of financial markets, institutions, and behavioral finance, taught by Robert Shiller.",
    ],
  },
  {
    title: "NISM Series XV (Research Analyst) & CFA Level 1",
    companyName: "In progress",
    icon: web,
    iconBg: "#383E56",
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
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: placeholderProject,
    sourceCodeLink: "https://github.com/MAJUMDARcu/fake-job-posting-detector-",
  },
  {
    name: "Walmart Sales Dashboard",
    // TODO: refine this description to match exactly what the analysis covers.
    description:
      "Retail sales analysis and dashboard built on Walmart transaction data, covering trends, seasonality, and store-level performance to support business decisions.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pandas", color: "green-text-gradient" },
      { name: "data-viz", color: "pink-text-gradient" },
    ],
    image: placeholderProject,
    sourceCodeLink: "https://github.com/MAJUMDARcu/walmart-dashboard",
  },
  {
    name: "Coffee Shop Sales Analysis",
    // TODO: refine this description to match exactly what the analysis covers.
    description:
      "Exploratory data analysis of coffee shop sales data to identify revenue trends, top-performing products, and patterns in customer purchasing behavior.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "eda", color: "green-text-gradient" },
      { name: "pandas", color: "pink-text-gradient" },
    ],
    image: placeholderProject,
    sourceCodeLink: "https://github.com/MAJUMDARcu/coffee-shop-sales-analysis",
  },
  // TODO: uncomment once the ONGC anomaly detection project ships.
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
  //   sourceCodeLink: "https://github.com/MAJUMDARcu/",
  // },
];

export { services, technologies, experiences, projects, github };
