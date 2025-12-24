import { Mail, Phone, Linkedin, Github } from "lucide-react";

interface FooterProps {
  name?: string;
  email?: string;
  phone?: string;
  linkedInUrl?: string;
}

export default function Footer({
  name = "Aditya Jain",
  email = "adityaj518@gmail.com",
  phone = "+91-9808321655",
  linkedInUrl = "https://www.linkedin.com/in/aditya-jain-9808321655/",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              {currentYear} {name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
              data-testid="link-footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${phone}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Phone"
              data-testid="link-footer-phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
