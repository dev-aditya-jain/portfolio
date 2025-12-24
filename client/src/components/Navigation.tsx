import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  resumeUrl?: string;
}

export default function Navigation({ resumeUrl = "/attached_assets/Aditya_Jain_Resume.pdf" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-semibold text-lg tracking-tight"
            data-testid="link-home"
          >
            Aditya Jain
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <ThemeToggle />
            <Button asChild data-testid="button-download-resume">
              <a href={resumeUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  data-testid={`link-mobile-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
              <div className="px-4 pt-2 flex items-center gap-2">
                <Button asChild className="flex-1" data-testid="button-mobile-download-resume">
                  <a href={resumeUrl} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
