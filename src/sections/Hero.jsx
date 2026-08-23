import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const particles = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${((index * 17 + 7) % 97) + 1.5}%`,
  top: `${((index * 23 + 13) % 95) + 2.5}%`,
  duration: `${15 + ((index * 3) % 15)}s`,
  delay: `${(index * 0.3) % 4}s`,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Violet Glowing Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#a855f7",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-7 text-center lg:text-left flex flex-col justify-center">
            <div className="animate-fade-in flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-xs sm:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                IT Undergraduate • University of Moratuwa
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.1] animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200 leading-relaxed">
                Hi, I'm Pragathi Jayasinghe — an IT undergraduate at the
                University of Moratuwa with a passion for software development.
                I love turning complex challenges into clean, scalable
                solutions that make a real-world impact.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="#contact" className="w-full sm:w-auto">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="#contact" className="w-full sm:w-auto">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in animation-delay-400 pt-1">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: GithubIcon, href: "https://github.com/PragathiJayasinghe", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/pragathi-jayasinghe-821662302", label: "LinkedIn" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300 px-4 sm:px-0 flex items-center justify-center">
            {/* Profile Image Card */}
            <div className="relative max-w-[270px] xs:max-w-xs sm:max-w-sm lg:max-w-[360px] w-full mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-picture.jpg"
                  alt="Pragathi Jayasinghe"
                  className="w-full aspect-[4/4.8] max-h-[460px] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-3 sm:-right-3 glass rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 animate-float shadow-xl border border-border/60">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-violet-700 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-3 -left-2 sm:-top-3 sm:-left-3 glass rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 animate-float animation-delay-500 shadow-xl border border-border/60">
                  <div className="text-xs sm:text-sm font-bold text-primary">Pragathi</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    Jayasinghe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-500 z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[11px] uppercase tracking-wider font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce text-primary" />
        </a>
      </div>
    </section>
  );
};