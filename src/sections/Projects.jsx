import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GithubIcon } from "@/components/Icons";
const projects = [
  {
    title: "SortMaster – Automated Sorting System",
    description:
      "An automated object sorting system powered by computer vision and robotics. Uses OpenCV + pyzbar for QR detection, a 6-DOF robotic arm for precision sorting, and a real-time web app for monitoring.",
    image: "/projects/Project1.jpg",
    tags: ["OpenCV", "Python", "Raspberry Pi", "Arduino", "Robotics", "React"],
    link: "https://github.com/n1s1th/QR_Based_Sorting_Robot_Arm",
    github: "https://github.com/n1s1th/QR_Based_Sorting_Robot_Arm",
  },
  {
    title: "Unify – University Social & Learning Platform",
    description:
      "A centralized digital campus ecosystem for university communities. Features a multi-role news feed, real-time WebSocket messaging, an automated TF-IDF Lost & Found matching engine, multi-vendor marketplace, and cohort-restricted academic resource sharing.",
    image: "/projects/unify.jpg",
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Docker", "AWS", "Socket.io", "Tailwind CSS"],
    link: "https://unify-social.app/",
    github: "https://github.com/Shehan-Dinusha/Unify",
  },
  {
    title: "Epilogue Quiz – Interactive Quiz Platform",
    description:
      "A live, puzzle-based competition platform engineered for University of Moratuwa undergraduates before Epilogue '26. Features sequential server-validated progression, crossword-style puzzle answering, real-time leaderboards, and an administrative management dashboard.",
    image: "/projects/epilogue-quiz.jpg",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "MySQL", "Redis"],
    link: "https://quiz.moraspirit.com",
    github: "https://github.com/moraspirit/epilogue-quiz-game-web-app",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.svg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 border border-border/60 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 bg-black/30 sm:bg-transparent">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo / Details"
                    className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                  >
                    <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 flex-shrink-0
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/PragathiJayasinghe"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};