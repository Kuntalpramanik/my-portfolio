import {
  IconBrandGithub,
  IconBrandInstagram,
  //   IconBrandLeetcode,
  IconBrandLinkedin,
  //   IconBrandYoutube,
} from "@tabler/icons-react";
const Info = {
  name: "Kuntal Pramanik",
  stack: [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "Open Source Contributor",
  ],
  bio: "I’m an aspiring software engineer currently pursuing MCA from Jadavpur University. With a solid foundation in computer applications and a deep passion for technology, I’m focused on honing my skills in coding, problem-solving, and software development. I hold a Bachelor's degree in Computer Application from the University of Burdwan and am committed to continuous learning as I prepare for exciting opportunities in the tech industry.",
};

const ProjectInfo = [
  {
    title: "Saregama",
    desc: "Saregama is a web application designed to transform the way users discover and enjoy music. It offers a seamless and personalized experience, allowing users to explore a rich library of songs by artist, album, and genre. More than just a music player, Saregama is a complete music discovery and management tool.",
    image: "saregama.png",
    live: false,
    technologies: ["PHP", "JavaScript", "MySQL", "AJAX", "Jquery"],
    link: "https://drive.google.com/file/d/14BITmXbGtazcTKEYsu-mY1E9_UlfQynu/view",
    github:
      "https://drive.google.com/file/d/14BITmXbGtazcTKEYsu-mY1E9_UlfQynu/view",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      //   "SASS",
      "JavaScript",
      "React JS",
      //   "Angular",
      //   "Redux",
      "Tailwind CSS",
      //   "GSAP",
      //   "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      //   "Springboot",
      "Node JS",
      //   "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      //   "PostgresSQL",
    ],
  },
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "PHP", "JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      //   "Postman",
      //   "MongoDB Compass",
      //   "Spring Tool Suite",
    ],
  },
];
const socialLinks = [
  { link: "https://github.com/kuntalpramanik", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/kuntal-pramanik249/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/i_kuntalpramanik/",
    icon: IconBrandInstagram,
  },
  //   {
  //     link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw",
  //     icon: IconBrandYoutube,
  //   },
  //   { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode },
];

const ExperienceInfo = [
  {
    role: "SQL Developer Intern",
    company: "Celebal Technologies",
    date: "May 2025 - Present",
    desc: "Currently interning at Celebal Technologies as a SQL Developer Intern, where I’m gaining hands-on experience in database design, optimization, and writing complex SQL queries for real-world applications.",
    skills: [
      //   "Springboot",
      //   "React JS",
      //   "Angular",
      //   "Node JS",
      "SQL",
      //   "MongoDB",
      //   "Microservices",
    ],
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "Euphoria GenX",
    date: "Jan 2022 - July 2023",
    desc: "I enhanced my skills in HTML, CSS, JavaScript, PHP, and MySQL through this internship, where I developed Saregama, an online music portal focused on delivering a seamless and personalized music streaming experience.",
    skills: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      //   "JIRA",
      //   "Automation Testing",
    ],
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
