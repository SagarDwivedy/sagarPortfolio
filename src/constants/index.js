
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  
} from '../assets'
import wanderlustImage from "../assets/wanderlust.png";
import meetSphere from "../assets/meetSphere.png";
import sentimental from "../assets/aibasedsety.png";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


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

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "AI/ML Virtual Intern",
    company_name: "AICTE (All India Council for Technical Education)",
    icon: tekisky,
    iconBg: "#0F172A",
    date: "April 2024 - June 2024",
    points: [
      "Completed AI/ML virtual internship focused on supervised and unsupervised learning algorithms.",
      "Worked on real-world datasets and built machine learning models using Python and scikit-learn.",
      "Gained hands-on experience with data preprocessing, model evaluation, and optimization techniques.",
      "Submitted a capstone project applying learned concepts to a practical use case.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "WanderLust",
    description:
      "Wanderlust is a travel and lodging platform where users can explore, create, and review listings of vacation stays. It supports full CRUD operations, user authentication, and interactive maps.",
    tags: [
    { name: "express", color: "blue-text-gradient" },
    { name: "ejs", color: "green-text-gradient" },
    { name: "nodejs", color: "pink-text-gradient" },
    { name: "mongodb", color: "green-text-gradient" }
  ],
    image: wanderlustImage,
    source_code_link: "https://github.com/SagarDwivedy/wanderLust",
    live_link: "https://wanderlust-7jvq.onrender.com/listings",
  },
  {
    name: "MeetSphere",
    description:
      "MeetSphere is a real-time video calling platform designed for seamless virtual communication. It allows users to connect instantly through high-quality audio and video, join as guests without registration, and experience smooth, lag-free interactions — all through a simple and modern web interface.",
    tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "WebRTC",
      color: "green-text-gradient",
    },
    {
      name: "Socket.io",
      color: "pink-text-gradient",
    },
     {
      name: "ejs",
      color: "green-text-gradient",
    }
    ],
    image: meetSphere,
    source_code_link: "https://github.com/SagarDwivedy/meetSphere",
  },
  {
    name: "VoiceSentiment AI",
    description:
      "VoiceSentiment AI is an intelligent system that converts spoken language into text and analyzes the sentiment behind it in real-time. By combining speech recognition with NLP-based sentiment analysis, it helps interpret emotions from voice inputs, making it ideal for feedback systems, virtual assistants, or mental wellness tools.",
    tags: [
     {
      name: "Python",
      color: "blue-text-gradient",
    },
    {
      name: "SpeechRecognition",
      color: "green-text-gradient",
    },
    {
      name: "TextBlob",
      color: "pink-text-gradient",
    },
    {
      name: "Machine Learning",
      color: "yellow-text-gradient",
    },
    ],
    image: sentimental,
    source_code_link: "https://github.com/SagarDwivedy/VoiceSentiment_AI",
  },
];

export { services, technologies, experiences, testimonials, projects };
