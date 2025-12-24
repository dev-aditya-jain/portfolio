import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  summary?: string;
}

export default function AboutSection({
  summary = "DevOps Engineer specializing in cloud-native platforms (Azure and AWS) with hands-on experience in Kubernetes and OpenShift workload management, Helm-based deployments, and Infrastructure as Code using Terraform. Skilled in building automated CI/CD pipelines through GitHub Actions and Azure DevOps to enable reliable, scalable delivery. Strong background in containerization and cloud optimization. Previously focused on .NET backend development and Web APIs, bringing a developer's mindset to platform engineering for building resilient, cost-efficient, and high-performing systems.",
}: AboutSectionProps) {
  return (
    <section id="about" className="py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center lg:text-left" data-testid="heading-about">
          About Me
        </h2>
        <Card className="max-w-4xl mx-auto lg:mx-0">
          <CardContent className="p-6 lg:p-8">
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="text-summary">
              {summary}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
