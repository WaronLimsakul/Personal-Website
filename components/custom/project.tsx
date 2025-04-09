const projects = [
  {
    title: "Custom Database Engine",
    description:
      "A high-performance key-value store built in Rust with custom B-tree implementation and optimized for SSD storage.",
    codeLink: "https://github.com/yourusername/custom-db-engine",
    demoLink: "#", // replace with demo link if available
    tags: ["Rust", "B-trees", "Storage"],
    codeSnippet:
      'fn main() {\n  println!("High-performance database engine");\n}',
  },
  {
    title: "Distributed Message Queue",
    description:
      "A fault-tolerant message broker system with support for persistent storage and exactly-once delivery semantics.",
    codeLink: "https://github.com/yourusername/message-queue",
    demoLink: "#", // replace with demo link if available
    tags: ["C++", "Networking", "Concurrency"],
    codeSnippet:
      "#include <thread>\nvoid process_queue(MessageQueue& q) {\n  // Implementation\n}",
  },
  {
    title: "Custom OS Kernel Module",
    description:
      "A Linux kernel module for optimized I/O operations, implementing a custom scheduling algorithm for disk access.",
    codeLink: "https://github.com/yourusername/kernel-module",
    demoLink: "#", // replace with demo link if available
    tags: ["C", "Linux", "Kernel"],
    codeSnippet:
      "module Kernel\n  def self.allocate_memory(size)\n    # Low-level memory allocation\n  end\nend",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-card"
            >
              <div className="aspect-video bg-zinc-900 flex items-center justify-center">
                <div className="text-emerald-400 font-mono text-sm p-4 overflow-hidden">
                  <pre>{project.codeSnippet}</pre>
                </div>
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
                  <Button variant="outline" size="sm" href={project.codeLink}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" href={project.demoLink}>
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
