import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  tenet,
  centillion,
  ai,
  synaptics,
  tenetcover,
  aiwork,   // ← add this
  aiart 
} from '../assets';

import {
  // keep your existing imports...
  cLang, cpp, python,
  ros, matlab, linux,
  bash,
  pytorch, sklearn, numpy, opencv,
  crowdstrike, splunk, kape, axiom, abnormal,
} from '../assets';

import { icu, swraunet, patientmon, irchatbot, wavedrom } from '../assets';

export const navLinks = [
  { id: 'about',    title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'blog',     title: 'Blog' },
  { id: 'contact',  title: 'Contact' },
  { id: 'linkedin', title: 'LinkedIn' }, // external
  { id: 'resume',   title: 'Resume' },   // download (always last)
];



const services = [
  {
    title: 'Digital Forensics and  Incident Response Analyst',
    icon: frontend,
  },
  {
    title: 'Firmware Engineer',
    icon: backend,
  },
  {
    title: 'AI/ML Engineer',
    icon: ux,
  },
  {
    title: 'Tools and Automation',
    icon: prototyping,
  },
];

const technologies = [
  { name: 'C',            icon: cLang },
  { name: 'C++',          icon: cpp },
  { name: 'Python',       icon: python },
  { name: 'ROS',          icon: ros },
  { name: 'MATLAB',       icon: matlab },
  { name: 'Linux',        icon: linux },

  // Dev tools
  { name: 'Git',          icon: git },
  { name: 'Docker',       icon: docker },
  { name: 'Bash',         icon: bash },

  // AI/ML
  { name: 'PyTorch',      icon: pytorch },
  { name: 'scikit-learn', icon: sklearn },
  { name: 'NumPy',        icon: numpy },
  { name: 'OpenCV',       icon: opencv },

  // DFIR / SOC
  { name: 'CrowdStrike',  icon: crowdstrike },
  { name: 'Splunk',       icon: splunk },
  { name: 'KAPE',         icon: kape },
  { name: 'Magnet AXIOM', icon: axiom },
  { name: 'Abnormal',     icon: abnormal },
];

const experiences = [
    {
    title: "Project Intern",
    company_name: "Centillion Networks",
    icon: centillion,
    iconBg: "#333333",
    date: "Jun 2023 – Sep 2023",
  },
    {
    title: "Capstone Project – Industry Sponsored",
    company_name: "Synaptics Inc / UC Irvine",
    icon: synaptics,
    iconBg: "#333333",
    date: "Mar 2025 – Dec 2025",
  },
  {
    title: "Cybersecurity Intern – Incident Response",
    company_name: "Tenet Healthcare",
    icon: tenet,     // add your asset path
    iconBg: "#333333",
    date: "Jun 2025 – Dec 2025",
  },


  {
    title: "AI Healthcare Bootcamp – Predictive ICU Monitoring",
    company_name: "UC Irvine",
    icon: ai,
    iconBg: "#333333",
    date: "Jul 2025 – Dec 2025",
  },
];

const projects = [
  {
    id: "project-icu",
    name: "Predictive ICU Monitoring",
    description:
      "Early-warning models for neuro ICU signals. Built Python pipelines with scikit-learn to flag risk from vitals and waveforms.",
    tags: [
      { name: "python",       color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "healthcare",   color: "pink-text-gradient" },
    ],
    image: icu,
    repo: "",   // add GitHub if public
    demo: "",   // add link if any
  },
  {
    id: "project-swraunet",
    name: "SWRAU-Net, Atherosclerosis",
    description:
      "Shearlet-Wavelet Residual Attention U-Net for carotid vessel wall segmentation on 3D MRI. Dice 0.77, sensitivity 0.83. Published in SN Computer Science (Springer), 2026, DOI: 10.1007/s42979-025-04535-8",
    tags: [
      { name: "pytorch",          color: "blue-text-gradient" },
      { name: "medical-imaging",  color: "green-text-gradient" },
      { name: "deep-learning",    color: "pink-text-gradient" },
    ],
    image: swraunet,
    repo: "",
    demo: "",
  },
  {
    id: "project-patientmon",
    name: "Patient Health Monitoring, Pi 5",
    description:
      "Raspberry Pi 5 system for vitals. Sensors, alerts on abnormal readings, small edge model for anomaly detection.",
    tags: [
      { name: "raspberry-pi", color: "blue-text-gradient" },
      { name: "edge-ai",      color: "green-text-gradient" },
      { name: "iot",          color: "pink-text-gradient" },
    ],
    image: patientmon,
    repo: "",
    demo: "",
  },
  {
    id: "project-irchatbot",
    name: "IR Chatbot prototype",
    description:
      "Python workflows plus LLM to speed basic investigation steps for the IR team. Cuts manual triage time.",
    tags: [
      { name: "python",  color: "blue-text-gradient" },
      { name: "LLM",     color: "green-text-gradient" },
      { name: "security",color: "pink-text-gradient" },
    ],
    image: irchatbot,
    repo: "",
    demo: "",
  },
  {
    id: "project-wavedrom",
    name: "Capstone Project Industry sponsored by Synaptics Inc",
    description:
      "Built an AI-based embedded C driver generator for Synaptics' Astra.io platform that turns natural-language requests into compilable drivers, cutting development time by ~90%. Designed a hybrid LLM + template architecture with automated register-level validation to ensure hardware-correct code. Delivered in collaboration with Synaptics engineers and selected for internal AI conference presentation.",
    tags: [
      { name: "LLM",      color: "blue-text-gradient" },
      { name: "embedded", color: "green-text-gradient" },
      { name: "AI",       color: "pink-text-gradient" },
    ],
    image: wavedrom,
    repo: "",
    demo: "https://www.synaptics.com",
  },
];

export { services, technologies, experiences, projects };


export const blogs = [
  {
    id: "intern-corp-cyber",
    title: "An Intern's Guide to Surviving Corporate Cybersecurity",
    summary: "A 'meme'oir of my internship",
    date: "Sep 2025",
    cover: tenetcover,
    href: "https://yegnanithin27.substack.com/p/an-interns-guide-to-surviving-corporate?r=6j31q4",
  },
  {
    id: "jobs-with-ai",
    title: "Jobs vs. AI? Jobs with AI!",
    summary: "AI is replacing humans!!!! (or so they say)",
    date: "Sep 2025",
    cover: aiwork,
    href: "https://yegnanithin27.substack.com/p/jobs-vs-ai-jobs-with-ai?r=6j31q4",
  },
  {
    id: "creativity",
    title: "creAItivity",
    summary: "Art without heart? A debate on using AI in creative work.",
    date: "Sep 2025",
    cover: aiart,
    href: "https://yegnanithin27.substack.com/p/creaitivity?r=6j31q4",
  },
];