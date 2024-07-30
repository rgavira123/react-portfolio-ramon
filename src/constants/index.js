import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a Software Engineering Student at Universidad de Sevilla, passionate for software design and development and technology. I understand software as a tool that should bring technologiy closer to the real world and make it easier to use, making it more accesible to everyone. I believe that is our duty as engineers.`;

export const ABOUT_TEXT = `I see myself as an active, resolute and in constant search and learning. I try to keep up to date with everything that happens in our field. I enjoy working in a team and I consider cooperation and communication to be key elements in our profession.`;
export const ABOUT_TEXT_2 = ` Currently, I am looking for opportunities to learn in challenging enviroments, where I can 'do my bit', improve my technical and social skill, and grow professionally  `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const REAL_EXPERIENCES = [];

export const PROJECTS = [
  {
    title: "Los Mapas del Reino",
    image: project1,
    github: "https://github.com/rgavira123/Los-Mapas-del-Reino",
    description:
      "A fully functional board game in a web application, developed using React, JavaScript and Java and Spring Boot for the backend. The game is a roll-and-write game, where players will try to build the best kingdom in the realm.",
    technologies: ["Java", "Spring Boot", "React", "Javascript", "WebSocket"],
  },
  {
    title: "Aprendizaje RefuerzUS",
    image: project2,
    github: "https://github.com/rgavira123/AprendizajeRefuerzUS",
    description:
      "A library of reinforcement learning algorithms, developed in Python, including algorithms like Q-Learning, SARSA or Monte Carlo. Most of them implemented natively and some of them using mdptoolbox. The library is an scalable and easy to use tool that can be used to solve an specific mobile robotics problem, given a map and a destination. The user can choose the desired model, train it and see the output policy.",
    technologies: ["Python", "Reinforcement Learning", "Jupyter", "Numpy", "Matplotlib"],
  },
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
