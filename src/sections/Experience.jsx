import {
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Calendar,
  Trophy,
  Award,
} from "lucide-react";

const journeyItems = [
  {
    category: "Education",
    role: "IT Undergraduate",
    organization: "University of Moratuwa",
    period: "2024 — Present",
    description:
      "Pursuing B.Sc. (Hons) in Information Technology. Focusing on software engineering principles, data structures, algorithms, and full-stack web applications.",
    tags: ["Software Engineering", "DSA", "Web Dev", "OOP", "Database Systems"],
    icon: GraduationCap,
    current: true,
  },
  {
    category: "Hackathons",
    role: "Competitive Programmer",
    organization: "JapuraXtreme & MoraXtreme",
    period: "2024 — 2025",
    description:
      "Competed in flagship university algorithmic hackathons including JapuraXtreme and MoraXtreme, tackling advanced data structure, optimization, and real-time algorithmic problem-solving challenges.",
    tags: ["Competitive Programming", "Algorithms", "Data Structures", "Speed Coding"],
    icon: Trophy,
    current: true,
  },
  {
    category: "Competitions",
    role: "Frontend & UI/UX Developer",
    organization: "Web Design Competitions",
    period: "2024 — 2025",
    description:
      "Participated in university and inter-university web design hackathons, prototyping and building responsive, accessible, and high-impact web interfaces.",
    tags: ["Web Design", "UI/UX", "Frontend Dev", "Tailwind CSS", "Responsive Design"],
    icon: Award,
    current: true,
  },
  {
    category: "Volunteering",
    role: "Member — Web & Technology Pillar",
    organization: "MoraSpirit",
    period: "2025 — Present",
    description:
      "Contributing to web platform development, digital media maintenance, and technology-driven initiatives for university sports coverage.",
    tags: ["Web Development", "Teamwork", "Digital Media"],
    icon: HeartHandshake,
    current: true,
  },
  {
    category: "Volunteering",
    role: "Event Volunteer",
    organization: "IEEE Student Branch & Rotaract Club of UoM",
    period: "2024 — Present",
    description:
      "Actively volunteering in organizing university tech conferences, community service outreach projects, and student leadership workshops.",
    tags: ["Event Management", "Leadership", "Community Outreach"],
    icon: HeartHandshake,
    current: true,
  },
  {
    category: "Work Experience",
    role: "Banking Intern",
    organization: "People's Bank",
    period: "2023 — 2024",
    description:
      "Assisted with day-to-day banking operations, handled customer inquiries, managed new account opening processes, and supported staff with financial documentation.",
    tags: ["Banking Operations", "Customer Relations", "Documentation", "Communication"],
    icon: Briefcase,
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80
       h-80 bg-highlight/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Milestones &amp; Background
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold
           mt-3 sm:mt-4 mb-4 sm:mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience &amp;{" "}
            <span className="font-serif italic font-normal text-white">
              journey.
            </span>
          </h2>

          <p
            className="text-sm sm:text-base text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my academic background, professional internship
            experience, and university volunteer leadership activities.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Glow Line */}
          <div className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12">
            {journeyItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-6 sm:gap-8 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Timeline Node Dot / Icon */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface border border-primary/50 flex items-center justify-center text-primary shadow-lg shadow-primary/20">
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    {item.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`pl-11 sm:pl-14 md:pl-0 ${
                      idx % 2 === 0
                        ? "md:pr-14 md:text-right"
                        : "md:col-start-2 md:pl-14"
                    }`}
                  >
                    <div className="glass p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 glow-border group">
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider ${
                          idx % 2 === 0
                            ? "md:justify-end"
                            : "justify-start"
                        }`}
                      >
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {item.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted-foreground font-normal">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mt-2 text-foreground group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-primary/90 font-medium text-sm mt-0.5">
                        {item.organization}
                      </p>

                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div
                        className={`flex flex-wrap gap-2 mt-5 ${
                          idx % 2 === 0 ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 bg-surface/80 border border-border/50 text-xs rounded-full text-muted-foreground group-hover:border-primary/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};