import {
  Layout,
  Code2,
  Palette,
  FileCode2,
  Globe,
  Server,
  Database,
  Cpu,
  Terminal,
  Sparkles,
  GitBranch,
  Box,
  Layers,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    description: "Creating responsive, interactive, and high-performance user interfaces.",
    skills: [
      { name: "React.js", icon: Layout, tag: "Library" },
      { name: "TypeScript", icon: FileCode2, tag: "Language" },
      { name: "Tailwind CSS", icon: Palette, tag: "Styling" },
      { name: "JavaScript (ES6+)", icon: Code2, tag: "Core" },
      { name: "HTML5 & CSS3", icon: Globe, tag: "Foundation" },
    ],
  },
  {
    title: "Backend",
    description: "Architecting scalable APIs, secure servers, and robust data persistence.",
    skills: [
      { name: "Node.js", icon: Server, tag: "Runtime" },
      { name: "Spring Boot", icon: Cpu, tag: "Framework" },
      { name: "Express.js", icon: Layers, tag: "Framework" },
      { name: "PostgreSQL", icon: Database, tag: "Relational" },
      { name: "MySQL", icon: Database, tag: "Relational" },
      { name: "MongoDB", icon: Database, tag: "NoSQL" },
      { name: "RESTful APIs", icon: Zap, tag: "Architecture" },
    ],
  },
  {
    title: "Tools & languas",
    description: "Leveraging modern workflows, developer tooling, and cloud environments.",
    skills: [
      { name: "Git & GitHub", icon: GitBranch, tag: "Version Control" },
      { name: "Java", icon: Code2, tag: "Language" },
      { name: "Python", icon: FileCode2, tag: "Language" },
      { name: "AI Tools & APIs", icon: Sparkles, tag: "AI/LLM" },
      { name: "Vite", icon: Zap, tag: "Build Tool" },
      { name: "Postman", icon: Terminal, tag: "API Testing" },
      { name: "Docker", icon: Box, tag: "Containers" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills &amp;{" "}
            <span className="font-serif italic font-normal text-white">
              technologies.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A structured breakdown of languages, frameworks, databases, and
            tools I use to build scalable end-to-end digital solutions.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1 glow-border animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground font-medium">
                      {category.skills.length} skills
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-border via-primary/30 to-border mb-6" />

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-surface/60 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group/item"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground/80 px-2.5 py-1 rounded-lg bg-background/50 border border-border/40 font-mono">
                          {skill.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Active Stack
                </span>
                <span className="font-mono text-primary/80 group-hover:text-primary transition-colors">
                  ✦ Ready to deploy
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Marquee Ribbon */}
        <div className="mt-12 animate-fade-in animation-delay-400">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              ✦ CONTINUOUSLY EXPANDING TECH STACK ✦
            </span>
          </div>

          <div className="relative overflow-hidden glass py-4 rounded-2xl border border-primary/20">
            {/* Left & Right Gradient Shadows */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee whitespace-nowrap gap-6 items-center">
              {[
                "Java",
                "Python",
                "React.js",
                "TypeScript",
                "JavaScript",
                "Spring Boot",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "REST APIs",
                "Tailwind CSS",
                "Docker",
                "Git & GitHub",
                "Vite",
                "Postman",
                "Java",
                "Python",
                "React.js",
                "TypeScript",
                "JavaScript",
                "Spring Boot",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "REST APIs",
                "Tailwind CSS",
                "Docker",
                "Git & GitHub",
                "Vite",
                "Postman",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-surface/70 border border-border/60 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group/pill cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/pill:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-muted-foreground group-hover/pill:text-foreground transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
