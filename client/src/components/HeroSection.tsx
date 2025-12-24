import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Linkedin, Download, Cloud, Code } from "lucide-react";
import { SiKubernetes, SiTerraform, SiDocker } from "react-icons/si";
import headshotImage from "@assets/generated_images/Aditya_studio_Image_cropped.png";

interface HeroSectionProps {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  linkedInUrl?: string;
  resumeUrl?: string;
}

export default function HeroSection({
  name = "Aditya Jain",
  title = "DevOps Engineer",
  email = "adityaj518@gmail.com",
  phone = "+91-9808321655",
  linkedInUrl = "https://www.linkedin.com/in/aditya-jain-9808321655/",
  resumeUrl = "/attached_assets/Aditya_Jain_Resume.pdf",
}: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8 lg:py-12 w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-2xl" />
            <Avatar className="w-48 h-48 lg:w-72 lg:h-72 border-4 border-primary/20 shadow-2xl shadow-primary/10 relative">
              <AvatarImage src={headshotImage} alt={name} className="object-cover" />
              <AvatarFallback className="text-4xl font-semibold bg-primary text-primary-foreground">
                {name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                <Cloud className="w-4 h-4" />
                Cloud
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                <Code className="w-4 h-4" />
                Development
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4" data-testid="text-name">
              {name}
            </h1>
            <p className="text-xl lg:text-2xl text-primary font-medium mb-6" data-testid="text-title">
              {title}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Specializing in cloud-native platforms with hands-on experience in Kubernetes, 
              OpenShift, Helm-based deployments, and Infrastructure as Code using Terraform. 
              Building resilient, cost-efficient, and high-performing systems.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted">
                <SiKubernetes className="w-5 h-5 text-blue-400" />
                <SiTerraform className="w-5 h-5 text-purple-400" />
                <SiDocker className="w-5 h-5 text-blue-300" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild size="lg" data-testid="button-hero-download-resume">
                <a href={resumeUrl} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("experience");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-view-experience"
              >
                View Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
