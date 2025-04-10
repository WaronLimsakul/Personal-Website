import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
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
    title: "SimplySaid",
    description:
      "A user-generated content platform built with Next.js + MongoDB to let students share their knowledge and understanding",
    codeLink: "https://github.com/WaronLimsakul/SimplySaid",
    demoLink: "https://simply-said.vercel.app/", // replace with demo link if available
    tags: ["TypeScript", "Next.js", "MongoDB", "TailwindCSS"],
    image: "/SimplySaid.png",
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
    tags: ["C"],
    image: "/RonDB.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container w-5/6 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
