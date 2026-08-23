import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/PragathiJayasinghe", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/pragathi-jayasinghe-821662302", label: "LinkedIn" },

];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 border-t border-border/60 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors inline-block"
            >
              JPP<span className="text-primary">.</span>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              © {currentYear} Pragathi Jayasinghe. All rights reserved.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1 px-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-sm"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};