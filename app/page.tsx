import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex items-center justify-between h-16 mx-auto">
          <Link href="/" className="text-xl font-bold">
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
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferror">
              <Button>
                Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Waron Limsakul</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full-stack Developer | Life-long Learner
            </p>
            <div className="flex justify-center gap-4">
              <a href="#projects">
                <Button>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline">Contact Me</Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-15 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex justify-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  Who I Am
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  I'm a full-stack developer with a growing interest in back-end
                  and low-level systems. I enjoy working on performance
                  optimization, building scalable solutions, and tackling
                  complex architectural challenges. I'm constantly learning and
                  improving my skills to build more efficient and reliable
                  systems.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  My Skills
                </h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "HTML, CSS, JS, TS",
                      "Go, basic C",
                      "API integration, DBMS",
                      "Database Optimization",
                      "Basic Networking",
                      "Linux/Unix Systems",
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
          </div>
        </section>

        {/* Technical Experience Section */}
        {/* <section className="py-20 container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Experience
          </h2>
          <div className="grid gap-8">
            <div className="border rounded-xl overflow-hidden p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M4 17l6-6-6-6" />
                    <path d="M12 17l6-6-6-6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Systems Programming
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Experienced in developing high-performance, memory-efficient
                    applications using Rust and C++. Proficient in memory
                    management, concurrency patterns, and low-level
                    optimizations.
                  </p>
                  <div className="p-4 bg-black text-emerald-400 rounded-md font-mono text-sm overflow-x-auto">
                    <pre>
                      {
                        "// Example of a custom memory allocator in C++\ntemplate<typename T>\nclass PoolAllocator {\nprivate:\n    // Implementation details\npublic:\n    T* allocate(size_t n);\n    void deallocate(T* p, size_t n);\n};"
                      }
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="2"
                      y="14"
                      width="20"
                      height="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Distributed Systems
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Designed and implemented fault-tolerant distributed systems
                    with a focus on consistency, availability, and partition
                    tolerance. Experience with consensus algorithms and
                    distributed data stores.
                  </p>
                  <div className="p-4 bg-black text-emerald-400 rounded-md font-mono text-sm overflow-x-auto">
                    <pre>
                      {
                        "// Simplified Raft consensus implementation\nasync fn replicate_log(nodes: &[Node], entries: &[LogEntry]) -> Result<Consensus> {\n    // Implementation details\n}"
                      }
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card">
                <div className="aspect-video bg-zinc-900 flex items-center justify-center">
                  <div className="text-emerald-400 font-mono text-sm p-4 overflow-hidden">
                    <pre>
                      {
                        'fn main() {\n  println!("High-performance database engine");\n}'
                      }
                    </pre>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Custom Database Engine
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A high-performance key-value store built in Rust with custom
                    B-tree implementation and optimized for SSD storage.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      Rust
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      B-trees
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      Storage
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card">
                <div className="aspect-video bg-zinc-900 flex items-center justify-center">
                  <div className="text-emerald-400 font-mono text-sm p-4 overflow-hidden">
                    <pre>
                      {
                        "#include <thread>\nvoid process_queue(MessageQueue& q) {\n  // Implementation\n}"
                      }
                    </pre>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Distributed Message Queue
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A fault-tolerant message broker system with support for
                    persistent storage and exactly-once delivery semantics.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      C++
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      Networking
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      Concurrency
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card">
                <div className="aspect-video bg-zinc-900 flex items-center justify-center">
                  <div className="text-emerald-400 font-mono text-sm p-4 overflow-hidden">
                    <pre>
                      {
                        "module Kernel\n  def self.allocate_memory(size)\n    # Low-level memory allocation\n  end\nend"
                      }
                    </pre>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Custom OS Kernel Module
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A Linux kernel module for optimized I/O operations,
                    implementing a custom scheduling algorithm for disk access.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      C
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      Linux
                    </span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      Kernel
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto">
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
