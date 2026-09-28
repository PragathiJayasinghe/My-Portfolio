import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

// Reduced from 30 to 12 strategically placed particles
const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${((index * 23 + 11) % 90) + 5}%`,
  top: `${((index * 31 + 7) % 85) + 7}%`,
  size: index % 3 === 0 ? "w-1 h-1" : "w-1.5 h-1.5",
  duration: `${20 + ((index * 4) % 20)}s`,
  delay: `${(index * 0.5) % 6}s`,
  opacity: index % 2 === 0 ? "opacity-30" : "opacity-20",
}));

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — subtle, non-competing */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10 dark:opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
      </div>

      {/* Subtle ambient glow — single, soft */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/[0.04] dark:bg-primary/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/[0.03] dark:bg-primary/[0.05] rounded-full blur-[120px]" />
      </div>

      {/* Floating particles — reduced count and opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((dot) => (
          <div
            key={dot.id}
            className={`absolute rounded-full ${dot.size} ${dot.opacity}`}
            style={{
              backgroundColor: "var(--color-primary)",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 lg:pt-0 pb-20 md:pb-24 lg:pb-0 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center">
          {/* Left Column — 7 cols (~58%) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col justify-center">
            {/* Status badge — small contextual label */}
            <div className="animate-fade-in flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-primary bg-primary/[0.08] dark:bg-primary/[0.12] border border-primary/20">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                IT Undergraduate · University of Moratuwa
              </span>
            </div>

            {/* Headline — editorial typography */}
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4rem] font-extrabold leading-[1.08] tracking-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400 dark:from-primary dark:to-violet-300">
                  digital
                </span>
                <br className="hidden sm:block" />{" "}
                <span className="sm:hidden"> </span>
                experiences with
                <br />
                <span className="font-serif italic font-normal text-foreground/85">
                  precision.
                </span>
              </h1>

              <p className="text-[15px] sm:text-base md:text-[17px] text-muted-foreground max-w-md mx-auto lg:mx-0 animate-fade-in animation-delay-200 leading-[1.7]">
                Hi, I'm <strong className="font-semibold text-foreground">Pragathi Jayasinghe</strong> — an
                IT undergraduate at the University of Moratuwa passionate about{" "}
                <span className="text-foreground/80">software development</span> and{" "}
                <span className="text-foreground/80">full-stack engineering</span>. I turn complex
                challenges into clean, scalable solutions with real-world impact.
              </p>
            </div>

            {/* CTAs — clear hierarchy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                href="#contact"
                className="w-full sm:w-auto hover:-translate-y-0.5 transition-transform duration-200"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
              <AnimatedBorderButton
                href="/Pragathi_Jayasinghe_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social links — properly spaced */}
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in animation-delay-400">
              <span className="text-xs sm:text-sm text-muted-foreground/80 font-medium">
                Follow me
              </span>
              <div className="w-6 h-px bg-border" />
              {[
                {
                  icon: GithubIcon,
                  href: "https://github.com/PragathiJayasinghe",
                  label: "GitHub",
                },
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/pragathi-jayasinghe-821662302",
                  label: "LinkedIn",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full border border-border/60 hover:border-primary/50 hover:bg-primary/[0.06] hover:text-primary hover:scale-110 transition-all duration-300 text-muted-foreground"
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — 5 cols (~42%) */}
          <div className="lg:col-span-5 relative animate-fade-in animation-delay-300 flex items-center justify-center">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[330px] xl:max-w-[360px] mx-auto">
              {/* Subtle background glow */}
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-primary/10 dark:from-primary/20 dark:to-primary/10 blur-2xl opacity-60"
                aria-hidden="true"
              />

              {/* Profile card */}
              <div className="relative rounded-[1.5rem] p-1.5 bg-card/60 dark:bg-card/40 backdrop-blur-xl border border-border/40 shadow-xl shadow-primary/[0.06] dark:shadow-primary/[0.12]">
                <img
                  src="/profile-picture.jpg"
                  alt="Pragathi Jayasinghe"
                  className="w-full aspect-[3/3.8] max-h-[440px] object-cover rounded-[1.25rem]"
                />

                {/* Name label — inside upper-left corner */}
                <div className="absolute top-4 left-4 bg-card/70 dark:bg-card/80 backdrop-blur-md rounded-lg px-3 py-2 border border-border/40 shadow-md animate-fade-in animation-delay-600">
                  <div className="text-xs sm:text-sm font-bold text-primary leading-tight">
                    Pragathi
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                    Jayasinghe
                  </div>
                </div>

                {/* Available badge — inside bottom-right corner */}
                <div className="absolute bottom-4 right-4 bg-card/70 dark:bg-card/80 backdrop-blur-md rounded-lg px-3 py-1.5 border border-border/40 shadow-md animate-fade-in animation-delay-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-medium text-foreground/80">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600 z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-muted-foreground/60 hover:text-primary transition-colors duration-300 group"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
        </a>
      </div>
    </section>
  );
};