import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  BookOpen,
  Users
} from 'lucide-react';
import { Project, Experience, SkillCategory, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: '#', icon: Github },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
  { platform: 'Email', url: 'mailto:gyrowcode@gmail.com', icon: Mail },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "Bootstrap 5", "JavaScript", "HTML5/CSS3"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Spring Boot", "Java", "MySQL", "JUnit", "Express", "REST APIs"]
  },
  {
    title: "Tools & Concepts",
    icon: Terminal,
    skills: ["Git/ Github", "Docker", "Postman", "CI/CD", "Agile/Scrum"]
  },
  {
    title: "Transferable Skills",
    icon: Users,
    skills: ["Project Management", "Public Speaking", "Mentorship", "Curriculum Design", "Data Analysis"]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: "Junior Full Stack Developer Trainee",
    company: "Temasek Polytechnic, in partnership with Microsoft",
    period: "Nov '25 - Feb '26",
    description: "Intensive bootcamp focusing on modern web development. Built secure, scalable applications. Collaborated in agile team to deliver production-ready code.",
    skills: ["Spring Boot", "MySQL", "Bootstrap 5", "JavaScript", "HTML/CSS"]
  },
  {
    id: 2,
    role: "Adjunct Mathematics Teacher",
    company: "Ministry of Education",
    period: "Jul '24 - Jan '26",
    description: "Designed and built a website plus Google Forms to support Sec 3 Learning Trail activities (used by 300+ students, reduced admin time by 30%).",
    skills: ["Data Analysis", "Communication"]
  },
  {
    id: 3,
    role: "ICT Trainer",
    company: "Zenitant",
    period: "Aug '14 - Jul '24",
    description: "Conducted STEM and programming enrichment (Microbit, mBlock, Arduino) to introduce students to computational thinking and automation logic.",
    skills: ["Mentoring", "Planning", "Adaptability"]
  },
  {
    id: 4,
    role: "Full-fledged Science Teacher",
    company: "Ministry of Education",
    period: "Jul '08 - Aug '14",
    description: "Built Excel-based applications for academic performance analysis, improving accuracy of reporting and reducing processing time by 40%. Developed digital tools for data validation and performance tracking across cohorts.",
    skills: ["Data Analysis", "Communication"]
  },
  {
    id: 5,
    role: "Admin Assistant (Contract)",
    company: "IMH",
    period: "Jul '06 - Sep '06",
    description: "Provided key administrative support during the 2006 launch of the Ministry of Health’s Subutex Voluntary Rehabilitation Programme (SVRP), compiling and verifying live enrolment and patient data for over 1,300 participants during the two-week registration window.",
    skills: ["Mentoring", "Planning", "Adaptability"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Microedge Academy",
    description: "An online micro-learning platform designed to help learners acquire skills essential to their specific workplace roles.",
    technologies: ["Spring Boot", "Bootstrap"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    demoUrl: "#",
    repoUrl: "https://github.com/b00nw33/microedge_backend"
  },
  {
    id: 2,
    title: "Spotify Jamming",
    description: "Front-End project to build a React web application integrated with the Spotify API.",
    technologies: ["React", "REST APIs"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    demoUrl: "#",
    repoUrl: "https://github.com/b00nw33/spotify-jamming"
  },
  {
    id: 3,
    title: "Colmar Academy",
    description: "Designing and implementing a responsive, single-page landing page for a fictional school. It tests skills in layout, typography, and responsive design.",
    technologies: ["Vue.js", "Firebase", "Socket.io"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    demoUrl: "#",
    repoUrl: "https://github.com/b00nw33/fsd-colmar-academy"
  }
];