import { Project } from "@/components/custom/project";

export const projects: Project[] = [
  {
    title: "SimplySaid",
    description:
      "A user-generated content platform built with Next.js + MongoDB to let students share their knowledge and understanding",
    codeLink: "https://github.com/WaronLimsakul/SimplySaid",
    demoLink: "https://simply-said.vercel.app/", // replace with demo link if available
    tags: ["TypeScript", "Next.js", "MongoDB", "TailwindCSS"],
    image: "/SimplySaid.png",
  },
  {
    title: "Driven",
    description:
      "A to-do list app I built for personal use with simplicity, speed and security in mind. Driven tried to stay out of your way and let you focus on your tasks.",
    codeLink: "https://github.com/WaronLimsakul/Driven",
    demoLink: "https://mfirx7bkff.us-east-1.awsapprunner.com/",
    tags: ["Go", "Postgres", "HTMX", "Templ", "TailwindCSS"],
    image: "/Driven2.png",
  },
  {
    title: "Waron-E-Commerce",
    description:
      "E-commerce web application built with PERN stack designed to provide a seamless online shopping experience.",
    codeLink: "https://github.com/WaronLimsakul/Waron-E-commerce",
    demoLink: "https://waron-e-commerce-client.waron-limsakul.com/", // replace with demo link if available
    tags: ["React.js", "Postgres", "Express.js", "StripeAPI"],
    image: "/Waron-E-C.png",
  },
  {
    title: "Custom HTTP/1.1 Parser + Server",
    description:
      "A custom HTTP/1.1 Parser + Server I built in order to learn HTTP protocol",
    codeLink: "https://github.com/WaronLimsakul/basic_http1.1_server",
    tags: ["Go", "HTTP/1.1", "testify"],
    image: "/HTTP-parser2.png",
  },
  {
    title: "RonDB",
    description:
      "A custom SQLite-inpsired database system that I built in C to understand relational database technology",
    codeLink: "https://github.com/WaronLimsakul/RonDB",
    tags: ["C", "SQLite"],
    image: "/RonDB.png",
  },
];
