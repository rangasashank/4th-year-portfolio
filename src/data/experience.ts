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
  },
  {
    id: 'uvic',
    role: 'Digitization Assistant',
    company: 'University of Victoria',
    period: 'Nov 2024 – May 2025',
    location: 'Victoria, BC',
    description: [
      'Issued official UVic transcripts and ensured timely, secure delivery in accordance with institutional protocols.',

'Inputted and maintained student academic records in the university database, ensuring data integrity and accuracy.',

'Handled sensitive student information in compliance with privacy regulations and UVic’s data governance policies.'


    ],
    technologies: ['Excel', 'Microsoft Tools', 'Communication']
  }
];