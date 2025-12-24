import { Cloud, Code, Server, Database, GitBranch, Container } from "lucide-react";
import { SiKubernetes, SiTerraform, SiDocker, SiAmazonwebservices, SiGithubactions} from "react-icons/si";

export default function ExpertiseShowcase() {
  return (
    <section id="about" className="py-8 lg:py-12 relative overflow-hidden scroll-mt-12 lg:scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="heading-expertise">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bridging the gap between development and operations with cloud-native solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative p-8 rounded-xl border border-border bg-card/80 backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                  <Cloud className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold">Cloud & DevOps</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Building and managing cloud infrastructure at scale. From Kubernetes clusters to 
                Terraform modules, I create resilient, cost-efficient platforms that empower teams 
                to ship faster.
              </p>
              <div className="mt-auto">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <SiKubernetes className="w-8 h-8 text-blue-400" />
                    <span className="text-xs text-muted-foreground">Kubernetes</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <SiTerraform className="w-8 h-8 text-purple-400" />
                    <span className="text-xs text-muted-foreground">Terraform</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <SiDocker className="w-8 h-8 text-blue-300" />
                    <span className="text-xs text-muted-foreground">Docker</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <SiAmazonwebservices className="w-8 h-8 text-orange-400" />
                    <span className="text-xs text-muted-foreground">AWS</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Cloud className="w-8 h-8 text-blue-500" />
                    <span className="text-xs text-muted-foreground">Azure</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <SiGithubactions className="w-8 h-8 text-cyan-400" />
                    <span className="text-xs text-muted-foreground">CI/CD</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  35-40% infrastructure cost reduction at Siemens
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400/40 to-emerald-500/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 rounded-xl border border-border bg-card/80 backdrop-blur-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Backend Development</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Crafting robust APIs and microservices with a focus on performance and 
                maintainability. My developer background ensures I build platforms that 
                developers actually want to use.
              </p>

              <div className="mt-auto">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Code className="w-8 h-8 text-purple-500" />
                    <span className="text-xs text-muted-foreground">C# / .NET</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Server className="w-8 h-8 text-blue-400" />
                    <span className="text-xs text-muted-foreground">REST APIs</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Database className="w-8 h-8 text-yellow-500" />
                    <span className="text-xs text-muted-foreground">SQL Server</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <GitBranch className="w-8 h-8 text-orange-500" />
                    <span className="text-xs text-muted-foreground">Git</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Database className="w-8 h-8 text-blue-300" />
                    <span className="text-xs text-muted-foreground">PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Server className="w-8 h-8 text-green-500" />
                    <span className="text-xs text-muted-foreground">Microservices</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  5,000+ projects managed via SonarQube
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
