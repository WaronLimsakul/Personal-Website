import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProjectsSection from "@/components/custom/project";
import MenuButton from "@/components/custom/menu";
import ExperienceSection from "@/components/custom/experience";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex items-center justify-between h-16 mx-auto">
          <Link href="/" className="text-xl font-bold italic mx-2 md:mx-1">
            WL
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>
            {/*to update resume, go to public/ and replace resume.pdf with the new file (same name)*/}
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferror">
              <Button>
                Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
          <MenuButton />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 container w-11/12 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Waron Limsakul</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer | Life-long Learner
            </p>
            <div className="flex justify-center gap-4">
              <a href="#projects">
                <Button className="cursor-pointer">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="cursor-pointer">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-15 bg-muted/30">
          <div className="container w-4/5 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden bg-muted shadow-md">
                <img
                  src="/me.JPG"
                  alt="Profile"
                  className="object-cover w-full h-full rounded-xl mx-auto"
                />
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground mb-6">
                  I'm a software engineer with a growing interest in back-end
                  and low-level systems. I enjoy working on performance
                  optimization, building scalable solutions, and tackling
                  complex architectural challenges. I'm constantly learning and
                  improving my skills to build more efficient and reliable
                  systems.
                </p>
                <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "TypeScript, JavaScript, Go",
                    "Python, SQL, C/C++, Rust",
                    "React.js, Next.js, Redux",
                    "Node.js, Express.js, Nest.js",
                    "MongoDB, PostgreSQL, SQLite",
                    "AWS, GCP, Docker, CI/CD",
                  ].map((skill) => (
                    <div className="flex items-center gap-2" key={skill}>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection experiences={experiences} />

        <ProjectsSection projects={projects} />

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container w-4/5 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <div className="max-w-xl mx-auto">
              <div className="grid gap-8 mb-8">
                <Link href="mailto:wlimsaku@uwaterloo.ca">
                  <div className="flex items-center gap-4 p-4 border rounded-lg bg-card hover:bg-muted transition-colors">
                    <div className="bg-muted p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        wlimsaku@uwaterloo.ca
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/waron-limsakul-56b684327/">
                  <div className="flex items-center gap-4 p-4 border rounded-lg bg-card hover:bg-muted transition-colors">
                    <div className="bg-muted p-3 rounded-full">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-muted-foreground">
                        linkedin.com/in/waron-limsakul-56b684327
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="https://github.com/WaronLimsakul/">
                  <div className="flex items-center gap-4 p-4 border rounded-lg bg-card hover:bg-muted transition-colors">
                    <div className="bg-muted p-3 rounded-full">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-muted-foreground">
                        github.com/WaronLimsakul
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-background">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Waron Limsakul. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
