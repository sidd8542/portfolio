import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = {
  "Frontend": {
    skills: [
      { name: "React.js", level: 90, color: "bg-blue-500" },
      { name: "Angular", level: 85, color: "bg-red-500" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "JavaScript", level: 92, color: "bg-yellow-500" },
      { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
      { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
      { name: "Bootstrap", level: 85, color: "bg-purple-500" }
    ]
  },
  "Backend": {
    skills: [
      { name: "Python", level: 90, color: "bg-blue-600" },
      { name: "FastAPI", level: 88, color: "bg-teal-500" },
      { name: "Node.js", level: 88, color: "bg-green-500" },
      { name: "Express.js", level: 85, color: "bg-gray-600" },
      { name: "RESTful APIs", level: 92, color: "bg-blue-500" },
      { name: "GraphQL", level: 78, color: "bg-pink-500" },
      { name: "JWT/OAuth", level: 85, color: "bg-indigo-500" }
    ]
  },
  "Database": {
    skills: [
      { name: "MongoDB", level: 85, color: "bg-green-600" },
      { name: "MySQL", level: 88, color: "bg-blue-600" },
      { name: "PostgreSQL", level: 82, color: "bg-blue-700" },
      { name: "Firebase", level: 80, color: "bg-orange-600" },
      { name: "SQL Server", level: 85, color: "bg-red-600" }
    ]
  },
  "Cloud & DevOps": {
    skills: [
      { name: "Docker", level: 85, color: "bg-blue-400" },
      { name: "Azure", level: 75, color: "bg-blue-500" },
      { name: "GCP", level: 70, color: "bg-red-500" },
      { name: "Microservices", level: 80, color: "bg-purple-500" },
      { name: "CI/CD", level: 80, color: "bg-green-500" }
    ]
  },
  "Tools": {
    skills: [
      { name: "Git/GitLab", level: 90, color: "bg-orange-600" },
      { name: "WebStorm", level: 85, color: "bg-blue-600" },
      { name: "VS Code", level: 95, color: "bg-blue-500" },
      { name: "Postman", level: 88, color: "bg-orange-500" }
    ]
  }
};

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars with staggered delays
          Object.values(skillCategories).forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedBars(prev => new Set([...prev, skill.name]));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      observer.disconnect();
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          <polygon points="0,0 100,50 0,100" fill="url(#skillGrad)" className="animate-pulse">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0;900,0;0,0"
              dur="30s"
              repeatCount="indefinite"
            />
          </polygon>
          <polygon points="900,900 950,800 1000,900" fill="url(#skillGrad)" className="animate-pulse">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0;-900,0;0,0"
              dur="25s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0),
            linear-gradient(45deg, transparent 40%, hsl(var(--accent) / 0.1) 50%, transparent 60%)
          `,
          backgroundSize: '40px 40px, 80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full stack development lifecycle with modern technologies
          </p>
        </div>

        {/* Mouse-following gradient */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-300 ease-out pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent) / 0.1), transparent 50%)`
          }}
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
            <Card 
              key={category}
              className={`group relative overflow-hidden transition-all duration-500 bg-card/80 backdrop-blur-lg border-primary/20 shadow-lg hover:shadow-2xl hover:border-primary/40 hover:scale-105 professional-hover click-ripple ${
                isVisible ? 'slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-all duration-300 flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 shadow-lg">
                      <span className="text-primary font-bold text-lg">{category.charAt(0)}</span>
                    </div>
                    {hoveredCategory === category && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-md animate-pulse"></div>
                    )}
                  </div>
                  <div>
                    <div className="text-xl font-bold">{category}</div>
                    <div className="text-xs text-muted-foreground">{data.skills.length} technologies</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-2">
                  {data.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill relative">
                      <div className="relative overflow-hidden">
                        <Badge 
                          variant="secondary" 
                          className="w-full text-xs font-medium px-3 py-2 bg-muted/50 border border-border/50 text-foreground  transition-all duration-300  cursor-pointer  justify-center"
                          style={{ animationDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill.name}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Floating particles effect */}
              {hoveredCategory === category && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping opacity-75"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Azure Fundamentals (AZ-900)",
                issuer: "Microsoft",
                icon: "🏆"
              },
              {
                title: "Google Cloud Associate",
                issuer: "Google Cloud",
                icon: "☁️"
              },
              {
                title: "Full-Stack Web Development",
                issuer: "Certified Developer",
                icon: "💻"
              }
            ].map((cert, index) => (
              <div
                key={cert.title}
                className="group p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/40 hover:bg-card/80 transition-all duration-300 professional-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};