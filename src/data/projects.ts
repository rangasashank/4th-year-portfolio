export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "AI Blog App built with microservices",
    title: "AI Blog App with Microservices",
    description:
      "A sophisticated, production-grade blog application meticulously crafted with a microservices architecture. This project leverages cutting-edge technologies for scalability, performance, and developer experience, enhanced with AI-powered content assistance. It's a comprehensive demonstration of inter-service communication, robust caching, diverse data storage, secure authentication, and streamlined cloud deployment.",
    image: "https://i.postimg.cc/P5yy0Gpj/image.png",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "RabbitMQ",
      "Redis (Upstash)",
      "PostgreSQL (Neon DB)",
      "MongoDB",
      "Google OAuth 2.0",
      "Google Gemini API",
      "Cloudinary",
      "Docker",
      "JWT (jsonwebtoken)",
      "Render",
      "AWS EC2",
      "Upstash",
      "Vercel",
    ],
    githubUrl: "https://github.com/rangasashank/blog-microservice",
    demoUrl: "https://blog-microservice.vercel.app",
    featured: true,
  },
  {
    id: "flatmate-flow",
    title: "Flatmate Flow",
    description:
      "Comprehensive roommate management application for tracking expenses, chores, and house events with real-time updates.",
    image: "https://i.postimg.cc/76Rtr3fD/ff.png",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/rangasashank/flatmateflow",
    demoUrl: "https://flatmateflow.netlify.app",
    featured: true,
  },
  {
    id: "safeorbit",
    title: "SafeOrbit.ai (NwHacks 2025 Hackathon)",
    description:
      "Real-time AI disaster management platform that helps organizations coordinate responses during natural disasters using AI-powered recommendations.",
    image: "https://i.postimg.cc/1X2zFjXT/so.jpg",
    techStack: ["React", "Firebase", "Gemini API", "Tailwind CSS"],
    githubUrl: "https://github.com/rangasashank/safeOrbit.ai",
    demoUrl: "https://devpost.com/software/safeorbit-ai",
    featured: true,
  },
  {
    id: "linux-command-piping",
    title: "Linux Command Piping",
    description:
      "Command-line interface tool implementing Unix-like piping functionality using system calls like fork, exec, and pipe for process management.",
    image:
      "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["C", "System Calls", "Linux"],
    githubUrl: "https://github.com/rangasashank/Linux-Command-Piping",
    featured: true,
  },
  {
    id: "weather-forecast",
    title: "7-Day Weather Forecast",
    description:
      "Interactive weather application that displays current conditions and 7-day forecasts using OpenWeather and OpenCage APIs with location auto-detection.",
    image: "https://i.postimg.cc/Pxw0SV5Y/7Day.png",
    techStack: ["HTML", "CSS", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/rangasashank/7-Day-Weather",
    demoUrl: "https://webhome.csc.uvic.ca/~rangasashankgurram/project2.html",
    featured: true,
  },
  {
    id: "tesla-clone",
    title: "Tesla Clone",
    description:
      "Fully-responsive frontend replica of the Tesla website with smooth animations and interactive elements mimicking the original site.",
    image: "https://i.postimg.cc/MTV1P12v/tesla.png",
    techStack: ["React", "Material UI", "Styled Components"],
    githubUrl: "https://github.com/rangasashank/tesla-clone",
    demoUrl: "https://clone-tesla-ranga.netlify.app",
    featured: false,
  },
  {
    id: "birthday-wisher",
    title: "Automated Birthday Wisher",
    description:
      "Python script that sends automatic email birthday wishes by reading contacts from an Excel spreadsheet and using customizable templates.",
    image:
      "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Python", "Excel", "SMTP"],
    githubUrl: "https://github.com/rangasashank/birthday_wisher",
    featured: false,
  },
  {
    id: "concordance",
    title: "Concordance Generator",
    description:
      "Text analysis tool that processes documents to generate word frequency reports and contextual word maps using regex pattern matching.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Python", "C", "RegEx"],
    githubUrl: "https://github.com/rangasashank/concordance",
    featured: false,
  },
];
