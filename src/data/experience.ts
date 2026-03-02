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
    id: 'meaningful',
    role: 'Full-Stack Developer Co-op',
    company: 'Meaningful',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    description: [
      'Built real-time sync using SSE and webhooks, cutting UI latency by ~10s for 50+ active users.',
      'Designed a media processing pipeline on AWS S3 with BullMQ, achieving 99% async task reliability.',
      'Developed a scalable event management system with Stripe, simplifying registrations for non-profit associations.',
      'Migrated legacy APIs to n8n workflows, reducing new-org onboarding effort by ~40%.',
      'Owned end-to-end feature development, improving deployment speed by 30% with optimized MongoDB schemas.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'BullMQ', 'Stripe', 'SSE', 'n8n']
  },
  {
    id: 'inspire',
    role: 'Software Engineer Co-op',
    company: 'Inspire – University of Victoria',
    period: 'Sep 2025 – Dec 2025',
    location: 'Victoria, BC',
    description: [
      'Built an AI-powered meeting dashboard in Meaningful CRM using Next.js, Express, and MongoDB with Nylas transcription.',
      'Implemented OpenAI-based meeting summaries and prioritized action items from transcripts.',
      'Created custom MCP servers in TypeScript to expose CRM data for context-aware email generation.',
      'Shipped production features to AWS Elastic Beanstalk and collaborated directly with non-profit stakeholders.'
    ],
    technologies: ['Next.js', 'Express', 'MongoDB', 'OpenAI', 'Nylas', 'TypeScript', 'AWS Elastic Beanstalk', 'MCP']
  },
  {
    id: 'blastworks',
    role: 'QA Automation Engineer Co-op',
    company: 'Blastworks Inc.',
    period: 'Sept 2023 – May 2024',
    location: 'Victoria, BC',
    description: [
      'Developed automated test scripts for mobile game applications using Appium, AltTester and Python',
      'Integrated CI/CD pipelines for test automation in Jenkins',
      'Collaborated with development teams to identify and resolve critical bugs',
      'Optimized test coverage resulting in a 30% reduction in manual testing time'
    ],
    technologies: ['Python', 'Appium', 'AltTester', 'Jenkins', 'Jira', 'Mobile Testing']
  }
];