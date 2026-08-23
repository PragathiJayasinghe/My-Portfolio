import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-sm sm:text-base leading-relaxed">
              <p>
                I am an Information Technology undergraduate at the University of
                Moratuwa with a strong passion for software engineering, full-stack
                development, and problem-solving. My journey began with a
                curiosity for how technology works, which has grown into a drive
                to build impactful, reliable digital products.
              </p>
              <p>
                I enjoy working across the stack — from developing interactive
                frontends with React &amp; Tailwind CSS to engineering robust
                backends with Java (Spring Boot), Python, and Node.js. Whether
                it's robotics and computer vision like SortMaster or full-stack web
                apps, I love turning ideas into working prototypes.
              </p>
              <p>
                Currently, I am actively seeking a Software Engineering Internship
                where I can contribute my technical skills, collaborate with
                experienced teams, and tackle real-world engineering challenges.
              </p>
            </div>

            <div className="glass rounded-2xl p-4 sm:p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-base sm:text-lg font-medium italic text-foreground leading-relaxed">
                "Passionate about turning complex real-world challenges into
                clean, scalable, and impactful software solutions."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-5 sm:p-6 rounded-2xl animate-fade-in hover:border-primary/40 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};