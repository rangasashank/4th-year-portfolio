export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}
export const experiences: Experience[] = [
  {
    id: "meaningful",
    role: "Forward Deployed Engineer & Full Stack Developer",
    company: "Meaningful",
    period: "May 2026 – Present",
    location: "Vancouver, BC · Remote",
    description: [
      "Delivered implementations for 4 association clients, translating stakeholder needs into platform configuration, product changes, migrations, launch plans, and guides.",
      "Migrated 19,000+ records across 10 phases with preserved IDs, idempotent scripts, and audits across contacts, memberships, invoices, events, and access settings.",
      "Shipped workflows across 6 product areas using React/Next.js, Node.js, MongoDB, and Redis/BullMQ, including a Claude-powered inbox agent with human approval gates.",
      "Improved meeting reliability across Google Calendar, Meet, Teams, and Zoom, and moved 10K+ CRM records to server-side pagination with indexed filters and cached counts.",
    ],
    technologies: [
      "TypeScript",
      "React / Next.js",
      "Node.js",
      "MongoDB",
      "BullMQ",
      "AWS",
      "Nylas",
    ],
  },
  {
    id: "meaningful-coop",
    role: "Full Stack Developer Co-op",
    company: "Meaningful",
    period: "Jan 2026 – Apr 2026",
    location: "Vancouver, BC · Remote",
    description: [
      "Built 5 type-safe MCP servers exposing 160+ platform operations to AI workflows, with API-key controls and 100+ test scenarios.",
      "Expanded events, memberships, sponsorships, auctions, and scheduling with React/Next.js interfaces, Stripe integrations, and background jobs.",
    ],
    technologies: [
      "TypeScript",
      "MCP",
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
  },
  {
    id: "inspire",
    role: "Software Engineer Co-op",
    company: "Inspire · University of Victoria",
    period: "Sep 2025 – Dec 2025",
    location: "Victoria, BC",
    description: [
      "Onboarded 3 nonprofit organizations by translating user needs into an AI meeting platform with Next.js, Express, OpenAI, Redis, BullMQ, and AWS Elastic Beanstalk.",
      "Improved briefings and follow-up drafts for 20+ study participants by combining CRM history and email activity with JSON schema validation, PII redaction, and hallucination checks.",
    ],
    technologies: [
      "Next.js",
      "Express",
      "OpenAI",
      "Redis",
      "AWS Elastic Beanstalk",
    ],
  },
  {
    id: "blastworks",
    role: "QA Automation Engineer Co-op",
    company: "Blastworks Inc.",
    period: "Sep 2023 – May 2024",
    location: "Victoria, BC",
    description: [
      "Built automated mobile game tests with Python, Appium, and AltTester, and integrated test automation into Jenkins pipelines.",
      "Worked with developers to investigate critical bugs and improve test coverage, reducing manual testing time by 30%.",
    ],
    technologies: ["Python", "Appium", "AltTester", "Jenkins", "Jira"],
  },
];
