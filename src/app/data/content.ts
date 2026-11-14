// All copy for the site lives here, so updating the portfolio means editing this file only.

export const CV_URL = "/Daniel_Adekoya_CV.pdf";
export const EMAIL = "me@dhaniel.site";

export const socials = [
  { label: "Résumé", href: CV_URL },
  { label: "GitHub", href: "https://github.com/dhanielcodes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-adekoya-010810192/" },
  { label: "Figma", href: "https://www.figma.com/@minitechbro" },
];

export const stats = [
  { value: 4, suffix: "+", label: "years shipping production frontends" },
  { value: 10, suffix: "+", label: "live products across fintech, law tech, media and AI" },
  { value: 5, suffix: "+", label: "interns and junior developers mentored" },
];

export const tickerNames = [
  "TM30",
  "HopePSB",
  "Payloft",
  "Lagos State University",
  "Whitecrust",
  "Alpharithminv",
  "Digitslaw",
  "Recital",
  "Token Vault",
  "NASIDA",
];

export type Featured = {
  title: string;
  role: string;
  desc: string;
  stack: string;
  link: string;
  site: string;
};

export const featured: Featured[] = [
  {
    title: "Whitecrust Internet Banking",
    role: "Built end to end",
    desc: "Internet banking for Whitecrust Finance. I built the whole app: architecture, UI, API integration and release to production.",
    stack: "React · Next.js · Fintech",
    link: "https://ibanking.whitecrustfinance.com/",
    site: "ibanking.whitecrustfinance.com",
  },
  {
    title: "Payloft",
    role: "Frontend engineer",
    desc: "A payment gateway platform. I built a plug-and-play frontend library so businesses can embed Payloft checkout in their own apps, plus feature work across the product. Lagos State University uses it to collect payments.",
    stack: "Next.js · React library · Payments",
    link: "https://mypayloft.com/",
    site: "mypayloft.com",
  },
  {
    title: "HopePSB",
    role: "Frontend lead, TM30",
    desc: "Digital banking for Hope Payment Service Bank. I led the frontend for the core banking flows and set the component and state patterns later reused on Token Vault and PayMyBills.",
    stack: "React · TypeScript · CryptoJS",
    link: "https://hopepsbank.com/",
    site: "hopepsbank.com",
  },
  {
    title: "Digitslaw",
    role: "Frontend engineer",
    desc: "Practice management for law firms. I shipped task management, in-app chat and calls, and a subscription model for firms.",
    stack: "React · Next.js · Real-time",
    link: "https://digitslaw.com/",
    site: "digitslaw.com",
  },
  {
    title: "Recital Finance",
    role: "Frontend engineer",
    desc: "AI-powered finance operations: reconciliation and cash management in one place. I designed and built the dashboard architecture and secure sign-in with PropelAuth.",
    stack: "React · Next.js · PropelAuth",
    link: "https://recital.finance/",
    site: "recital.finance",
  },
  {
    title: "AI-WK",
    role: "Frontend engineer, Alpharithminv",
    desc: "AI financial analysis tools. I built the frontend layer that brings outputs from several ML models (Orion, Olympus) into one consistent interface.",
    stack: "React · Next.js · TypeScript · AI",
    link: "https://www.aiwork.app/",
    site: "aiwork.app",
  },
];

export const alsoShipped = [
  { title: "TM Agency Banking", stack: "React · Vite", link: "https://agencybanking.tm30.net/", desc: "Agency banking and terminal management for TM30." },
  { title: "NASIDA", stack: "Vue", link: "https://nasida.na.gov.ng/", desc: "Investment portal for the Nasarawa State government." },
  { title: "Takeout Media", stack: "Vue", link: "https://takeoutmedia.xyz/", desc: "Website for a creative design agency." },
  { title: "Vue Nav UI", stack: "Vue 3 · npm", link: "https://dhanielcodes.github.io/vue-navigation-ui/", desc: "Open-source navigation components for Vue 3, built with the Composition API." },
  { title: "Fyrre", stack: "Side project", link: "https://fyrre.vercel.app/", desc: "A simple, visually appealing art magazine site." },
];

export const jobs = [
  {
    dates: "Nov 2022 – Present",
    place: "Lagos",
    company: "TM30",
    role: "Senior Frontend Engineer / Forward Deployed Engineer",
    desc: "Led frontend for HopePSB, Token Vault and PayMyBills. Work on-site with clients to build custom portals and transaction monitoring dashboards, including for PayArena Exchange. Mentor interns and junior developers through biweekly code reviews.",
  },
  {
    dates: "Jun 2025 – Jan 2026",
    place: "Contract, remote",
    company: "Alpharithminv",
    role: "Frontend Engineer",
    desc: "Built the AI-WK frontend alongside ML engineers, plus an internal CRM and an email campaign platform.",
  },
  {
    dates: "Jan 2021 – Sep 2022",
    place: "Abuja",
    company: "Dork Discovery",
    role: "Frontend Engineer",
    desc: "Worked on NASIDA and Takeout Media in Vue. Refactored legacy code into modular components and designed a navigation and hero pattern reused across projects.",
  },
  {
    dates: "Apr 2020 – Sep 2020",
    place: "Remote",
    company: "HNG Internship",
    role: "Frontend Developer",
    desc: "Built responsive interfaces in team projects and shipped QuickThink, a quiz app, as the final assessment.",
  },
];

export const stack = [
  { group: "Web", items: "React, Next.js, Vue 3, Nuxt, TypeScript, Tailwind CSS" },
  { group: "Mobile", items: "React Native, Expo, Mapbox" },
  { group: "State & data", items: "Zustand, Pinia, REST APIs, WebSockets" },
  { group: "Tools", items: "Git, Vite, Figma, EAS Build" },
];

export const certificates = [
  {
    title: "Secure Coding: Secure Application Development",
    meta: "Udemy · Jan 2025",
    href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f605fd3e-f02a-4892-8d19-fc403d8b838f.pdf",
  },
  {
    title: "Learn JavaScript: Full-Stack from Scratch",
    meta: "Udemy · Oct 2022",
    href: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-53b31bd6-463c-4d6a-b439-0f02a8178aeb.pdf",
  },
];

// Words in `italic` render in light italic inside the statement.
export const statement =
  "To keep leading product architecture from idea to launch, take on wider technical leadership, and mentor the developers coming up behind me.";
export const statementItalic = ["technical", "leadership,"];
