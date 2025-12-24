import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
  location?: string;
}

interface EducationSectionProps {
  education?: Education[];
}

const defaultEducation: Education[] = [
  {
    degree: "B.Tech - Computer Science and Engineering",
    institution: "GLA University",
    period: "2016 - 2020",
    specialization: "Cloud Computing and Virtualization",
    location: "Mathura, India",
  },
];

export default function EducationSection({ education = defaultEducation }: EducationSectionProps) {
  return (
    <section id="education" className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center lg:text-left" data-testid="heading-education">
          Education
        </h2>

        <div className="grid gap-6 max-w-3xl mx-auto lg:mx-0">
          {education.map((edu, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-education-${index}`}>
              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold" data-testid={`text-degree-${index}`}>
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-foreground font-medium mb-2" data-testid={`text-institution-${index}`}>
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      {edu.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      )}
                    </div>
                    {edu.specialization && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Specialization:</span>
                        <Badge variant="secondary" className="font-mono text-xs whitespace-normal break-words">
                          {edu.specialization}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
