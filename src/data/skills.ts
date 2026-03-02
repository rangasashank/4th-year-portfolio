export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  color?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', level: 4, color: '#F7DF1E' },
      { name: 'TypeScript', level: 4, color: '#3178C6' },
      { name: 'Python', level: 4, color: '#3776AB' },
      { name: 'C', level: 3, color: '#A8B9CC' },
      { name: 'Java', level: 2, color: '#A8B9CC' },
      { name: 'HTML', level: 4, color: '#E34F26' },
      { name: 'CSS', level: 3, color: '#1572B6' },

    ]
  },
  {
    name: 'Web Technologies',
    skills: [
      { name: 'React', level: 4, color: '#61DAFB' },
      { name: 'Next.js', level: 4, color: '#045631' },
      { name: 'Node.js', level: 4, color: '#339933' },
      { name: 'Express', level: 4, color: '#000000' },
      { name: 'MongoDB', level: 4, color: '#47A248' },
      { name: 'PostgreSQL', level: 3, color: '#336791' },
      { name: 'Redis', level: 3, color: '#DC382D' },
      { name: 'RabbitMQ', level: 3, color: '#FF6600' },
      { name: 'Tailwind CSS', level: 3, color: '#06B6D4' },
      { name: 'Material UI', level: 3, color: '#0081CB' },
      { name: 'Styled Components', level: 3, color: '#DB7093' },
      { name: 'Stripe', level: 3, color: '#635BFF' },
      { name: 'BullMQ', level: 3, color: '#E84D3D' }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 5, color: '#F05032' },
      { name: 'Docker', level: 3, color: '#2496ED' },
      { name: 'AWS EC2', level: 3, color: '#3178C6' },
      { name: 'AWS S3', level: 3, color: '#569A31' },
      { name: 'AWS Elastic Beanstalk', level: 3, color: '#FF9900' },
      { name: 'Azure DevOps', level: 3, color: '#0078D7' },
      { name: 'n8n', level: 3, color: '#EA4B71' },
      { name: 'Postman', level: 5, color: '#FF6C37' },
      { name: 'Jira', level: 5, color: '#0052CC' },
      { name: 'Linux', level: 3, color: '#FCC624' }
    ]
  },
  {
    name: 'AI & APIs',
    skills: [
      { name: 'OpenAI', level: 4, color: '#412991' },
      { name: 'Gemini API', level: 3, color: '#4285F4' },
      { name: 'Nylas', level: 3, color: '#0068D6' },
      { name: 'MCP', level: 3, color: '#10B981' }
    ]
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Pytest', level: 5, color: '#0A9EDC' },
      { name: 'Appium', level: 4, color: '#663399' },
      { name: 'Alttester', level: 5, color: '#FD5750' }
    ]
  }
];