import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  techStack: string[];
}

interface ExperienceSectionProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    company: "Siemens Technology and Services",
    role: "Senior Developer",
    period: "Apr 2023 - Present",
    achievements: [
      "Provisioned resources like VPC, RDS, EKS, TransitGateway using Terraform, deepening expertise in cloud infrastructure.",
      "Reduced infra costs by 35-40% by managing and optimizing OpenShift and Kubernetes clusters and workloads.",
      "Deployed multiple applications using Helm charts, ensuring scalability and streamlined release management.",
      "Set up and maintained SonarQube (5,000+ projects, 2TB DB) to enforce enterprise code quality.",
      "Reduced DB size by 50% and automated DB maintenance tasks (vacuuming, archiving) via CronJobs.",
    ],
    techStack: ["Terraform", "AWS", "Kubernetes", "OpenShift", "Helm", "Docker", "SonarQube"],
  },
  {
    company: "CitiusTech Healthcare",
    role: "Software Engineer",
    period: "Dec 2021 - Mar 2023",
    achievements: [
      "Developed and optimized REST APIs with ASP.NET Core, EF Core, LINQ, JWT, enhancing interoperability.",
      "Implemented Hangfire background jobs for event notifications and task automation.",
      "Built microservices for Practice Management System (patients, doctors, admin) including scheduling and reporting.",
      "Containerized microservices with Docker Compose, strengthening understanding of Microservice architecture.",
    ],
    techStack: ["C#", "ASP.NET Core", "Web API", "EF Core", "SQL Server", "Hangfire", "NUnit", "Angular", "Docker"],
  },
  {
    company: "Sagitec Solutions",
    role: "Jr. Software Engineer",
    period: "Jun 2019 - Dec 2021",
    achievements: [
      "Contributed to Ohio Unemployment Insurance System, streamlining unemployment claims and payments for U.S. states.",
      "Built dashboards and reports for wages, benefits, eligibility checks, used by thousands of claimants.",
      "Wrote optimized SQL queries and LINQ expressions to handle high-volume transactions.",
      "Started as Intern on same project before promotion.",
    ],
    techStack: ["C#", ".NET Framework", "MVC 5.0", "LINQ", "SQL Server", "Git"],
  },
];

export default function ExperienceSection({ experiences = defaultExperiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-8 lg:py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left" data-testid="heading-experience">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative lg:pl-20">
                <div className="hidden lg:flex absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />

                <Card className="hover-elevate transition-all duration-300" data-testid={`card-experience-${index}`}>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl lg:text-2xl flex items-center gap-2 flex-wrap">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.role}
                        </CardTitle>
                        <p className="text-muted-foreground font-medium mt-1" data-testid={`text-company-${index}`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`text-period-${index}`}>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
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
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
