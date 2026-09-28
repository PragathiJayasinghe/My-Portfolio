import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-2.5 shadow-lg shadow-black/10 dark:shadow-black/30"
          : "bg-transparent py-4 sm:py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight hover:text-primary transition-colors"
        >
          JPP<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav — centered pill */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-1.5 py-1 flex items-center gap-0.5">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-surface/80 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />
          <Button size="sm" href="#contact" className="text-[13px] px-4 py-1.5">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground cursor-pointer rounded-xl glass hover:bg-surface transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong border-b border-border/50 animate-fade-in shadow-2xl">
          <div className="container mx-auto px-6 py-5 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2.5 px-3 rounded-xl hover:bg-surface/50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <Button
                href="#contact"
                className="w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};