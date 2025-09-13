import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface Project {
  title: string;
  description: string;
  codeLink: string;
  demoLink?: string;
  tags: string[];
  image: string;
}

// Project section UI
// To change the project information: go to app/data/projects.ts
const ProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
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
};

export default ProjectsSection;
