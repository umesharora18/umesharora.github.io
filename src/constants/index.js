import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
    springboot,
    aws,
  
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
    },
    {
        name: "AWS",
        icon: aws,
    },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
    {
        name: "Law Firm Management System",
        description:
            "Developed a system to streamline attorney-client billing processes, utilizing C# and WPF for the frontend and Entity Framework for database interaction. SQL Server was used for efficient data storage and retrieval.",
        tags: [
            {
                name: ".NET Framework",
                color: "blue-text-gradient",
            },
            {
                name: "C#",
                color: "green-text-gradient",
            },
            {
                name: "WPF",
                color: "pink-text-gradient",
            },
            {
                name: "SQL",
                color: "yellow-text-gradient",
            },
        ],
        
        source_code_link: "https://github.com/your-username/law-firm-management-system",
    },
    {
        name: "CrazyEights Card Game",
        description:
            "Developed a multiplayer card game in Java to practice programming skills and enhance understanding of object-oriented programming. Implemented game logic and rules, with JUnit testing for reliability.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "JUnit",
                color: "green-text-gradient",
            },
            {
                name: "OOP",
                color: "pink-text-gradient",
            },
        ],
        image: "path/to/your/crazyeightscardgameimage.png",
        source_code_link: "https://github.com/your-username/crazy-eights-card-game",
    },
    {
        name: "StudyBuddy App Design",
        description:
            "Designed a mobile application interface aimed at revolutionizing collaborative learning experiences for students. Conducted user research and gathered feedback to refine app features, demonstrating skills in UX/UI design.",
        tags: [
            {
                name: "Figma",
                color: "blue-text-gradient",
            },
            {
                name: "UX Design",
                color: "green-text-gradient",
            },
            {
                name: "UI Design",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/your-username/study-buddy-app-design",
    },
];
export { services, technologies, experiences, testimonials, projects };
