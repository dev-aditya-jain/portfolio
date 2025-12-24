import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Container,
  Activity,
  Network,
  Database,
  Shield,
  Code,
  HardDrive,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    name: "DevOps & IaC",
    icon: <Container className="w-5 h-5" />,
    skills: ["Kubernetes", "EKS", "AKS", "OpenShift", "Helm", "Docker", "Terraform", "Azure Resource Manager", "GitHub Actions"],
  },
  {
    name: "Cloud Platforms",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Microsoft Azure", "AWS"],
  },
  {
    name: "Monitoring",
    icon: <Activity className="w-5 h-5" />,
    skills: ["Prometheus", "Grafana", "Opensearch", "Logstash", "Azure Monitor", "AWS CloudWatch"],
  },
  {
    name: "Networking",
    icon: <Network className="w-5 h-5" />,
    skills: ["Azure VNet", "AWS VPC", "Application Gateway", "Hub and Spoke", "Transit Gateway"],
  },
  {
    name: "Storage",
    icon: <HardDrive className="w-5 h-5" />,
    skills: ["Azure Blob Storage", "AWS S3"],
  },
  {
    name: "Security",
    icon: <Shield className="w-5 h-5" />,
    skills: ["Azure Key Vault", "Service Principal", "Managed Identity", "Access Control (IAM)"],
  },
  {
    name: "Backend Development",
    icon: <Code className="w-5 h-5" />,
    skills: ["C#", "ASP.NET Core", "Web API", "EF Core", "LINQ", "Microservices"],
  },
  {
    name: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["SQL Server", "PostgreSQL", "Crunchy Operator"],
  },
];

export default function SkillsSection({ categories = defaultCategories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-8 lg:py-12 scroll-mt-12 lg:scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left" data-testid="heading-skills">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-skill-${index}`}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="text-primary">{category.icon}</span>
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-mono text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
