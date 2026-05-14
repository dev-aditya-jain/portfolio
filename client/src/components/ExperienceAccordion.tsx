import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Briefcase, Calendar, Cloud, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  type: "cloud" | "development" | "both";
  achievements: string[];
  techStack: string[];
}

interface ExperienceAccordionProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    company: "Siemens Technology and Services",
    role: "Senior Developer",
    period: "Apr 2023 - Present",
    type: "cloud",
    achievements: [
      "Owned the design and operation of cloud infrastructure across AWS using Terraform, provisioning production-grade VPCs, EKS clusters, RDS, and Transit Gateways to support scalable enterprise workloads.",
      "Led OpenShift and Kubernetes cost optimization initiatives, reducing infrastructure spend by 35–40% through right-sizing, workload tuning, and cluster-level optimizations without impacting availability.",
      "Built and standardized Helm-based deployment strategies, enabling consistent, repeatable releases across environments and reducing manual deployment errors.",
      "Designed and operated a large-scale SonarQube platform (5,000+ projects, ~1TB database), directly improving code quality governance across multiple engineering teams.",
      "Identified database growth bottlenecks and implemented automated maintenance workflows, reducing SonarQube database size by ~40% and improving platform stability.",
      "Acted as a bridge between application teams and platform infrastructure, applying backend engineering knowledge to design resilient, developer-friendly cloud environments,",
    ],
    techStack: ["AWS", "Kubernetes", "OpenShift", "Helm", "Docker", "SonarQube", "PostgreSQL"],
  },
  {
    company: "CitiusTech Healthcare",
    role: "Software Engineer",
    period: "Dec 2021 - Mar 2023",
    type: "both",
    achievements: [
      "Designed and developed secure, high-performance REST APIs using ASP.NET Core, EF Core, JWT, and LINQ, improving interoperability across healthcare systems.",
      "Built microservices for a Practice Management System, supporting core workflows such as patient management, doctor scheduling, reporting, and administration.",
      "Implemented background job processing using Hangfire, enabling reliable event notifications and asynchronous task execution for business-critical workflows.",
      "Containerized backend services using Docker and Docker Compose, laying the foundation for future cloud-native and Kubernetes-based deployments.",
      "Collaborated closely with QA and product teams to improve API reliability and reduce regression issues through structured testing and cleaner service boundaries.",
    ],
    techStack: ["C#", "ASP.NET Core", "Web API", "EF Core", "SQL Server", "Hangfire", "NUnit", "Angular", "Docker"],
  },
  {
    company: "Sagitec Solutions",
    role: "Jr. Software Engineer",
    period: "Jun 2019 - Dec 2021",
    type: "development",
    achievements: [
      "Contributed to the Ohio Unemployment Insurance System, a mission-critical platform supporting unemployment claims and payments for U.S. state agencies.",
      "Developed dashboards and reporting modules for wages, benefits, and eligibility checks used by thousands of claimants and administrators.",
      "Optimized SQL queries and LINQ-based data access to support high-volume transactional workloads with strict performance requirements.",
      "Progressed from Intern to Full-Time Engineer, demonstrating strong ownership and consistent delivery on a large-scale government system.",
    ],
    techStack: ["C#", ".NET Framework", "MVC 5.0", "LINQ", "SQL Server", "Git"],
  },
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const typeIcon = experience.type === "cloud" ? (
    <Cloud className="w-4 h-4" />
  ) : experience.type === "development" ? (
    <Code className="w-4 h-4" />
  ) : (
    <>
      <Cloud className="w-4 h-4" />
      <Code className="w-4 h-4" />
    </>
  );

  const typeLabel = experience.type === "cloud" ? "Cloud & DevOps" : experience.type === "development" ? "Development" : "Cloud & Development";

  return (
    <div
      className="group"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsOpen(false);
      }}
    >
      <div
        className={`relative border border-border rounded-lg overflow-hidden transition-all duration-300 ${
          isHovered ? "border-primary/50 bg-card shadow-lg shadow-primary/5" : "bg-card/50"
        }`}
        data-testid={`card-experience-${index}`}
      >
        <button
          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
          onClick={() => setIsOpen(!isOpen)}
          data-testid={`button-experience-${index}`}
        >
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className={`p-2.5 rounded-lg ${isHovered ? "bg-primary/20" : "bg-muted"} transition-colors`}>
              <Briefcase className={`w-5 h-5 ${isHovered ? "text-primary" : "text-muted-foreground"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-lg font-semibold truncate" data-testid={`text-role-${index}`}>
                  {experience.role}
                </h3>
                <Badge variant="outline" className="text-xs gap-1 shrink-0">
                  {typeIcon}
                  {typeLabel}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mt-1" data-testid={`text-company-${index}`}>
                {experience.company}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-border/50">
                <div className="pt-5">
                  <span className="sm:hidden flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </span>
                  
                  <ul className="space-y-3 mb-5">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-muted-foreground text-sm flex items-start gap-3"
                      >
                        <span className="text-primary mt-1 shrink-0">
                          <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs"
                        data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ExperienceAccordion({ experiences = defaultExperiences }: ExperienceAccordionProps) {
  return (
    <section id="experience" className="py-8 lg:py-12 scroll-mt-12 lg:scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left" data-testid="heading-experience">
          Work Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
