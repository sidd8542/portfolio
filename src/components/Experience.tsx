import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Application Engineer",
    company: "UrbanIQ Pvt Ltd",
    duration: "Feb 2025 - Present",
    location: "Remote",
    type: "Full-time",
    description: "Developing waste management systems for municipalities, creating efficient solutions for urban sanitation and resource management.",
    responsibilities: [
      "Developing full-stack waste management applications for municipal officers",
      "Building scalable backend APIs using Python FastAPI framework",
      "Creating responsive frontend interfaces with React TypeScript",
      "Managing containerized applications using Docker for PostgreSQL databases",
      "Implementing data analytics for waste collection optimization"
    ],
    keyContributions: [
      "Designed microservices architecture for municipal waste tracking",
      "Implemented real-time dashboard for waste collection analytics",
      "Optimized database queries reducing response time by 40%"
    ],
    technologies: [
      "Python", "FastAPI", "React", "TypeScript", "Docker", 
      "PostgreSQL", "RESTful APIs", "Microservices"
    ]
  },
  {
    id: 2,
    title: "Web Developer (P&G via Tranzita System)",
    company: "Tranzita System",
    duration: "May 2022 - Jan 2025",
    location: "Remote",
    type: "Full-time",
    description: "Developed and optimized web-based applications for dashboard management with a focus on data visualization, automation, and process automation.",
    responsibilities: [
      "Developed and optimized multiple web-based applications for dashboard management",
      "Implemented data visualization, automation, and process automation solutions",
      "Integrated OAuth 2.0 authentication for secure data access and role-based access controls (RBAC)",
      "Led full-stack development efforts, ensuring efficient data processing and workflow automation",
      "Enhanced user experience improvements by implementing automated surveys analytics"
    ],
    keyContributions: [
      "Designed and deployed scalable web apps with Angular, React, Node.js, and SQL Server",
      "Improved frontend performance by 30% through code optimization and caching strategies",
      "Implemented automated survey analytics, reducing manual workload by 60%"
    ],
    technologies: [
      "Angular", "React", "Node.js", "TypeScript", "JavaScript", 
      "SQL Server", "OAuth 2.0", "RESTful APIs", "PowerBI", "Azure"
    ]
  }
];

const achievements = [
  {
    icon: TrendingUp,
    title: "Performance Improvement",
    value: "40%",
    description: "Improved database query performance"
  },
  {
    icon: Briefcase,
    title: "Workload Reduction", 
    value: "60%",
    description: "Reduced manual workload via automation"
  },
  {
    icon: Calendar,
    title: "Experience",
    value: "3+",
    description: "Years of professional development experience"
  }
];


export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(-45deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and driving digital transformation
          </p>
        </div>

        <div className="space-y-8">
          {/* Experience Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.id}
                className={`glow-soft hover:glow-primary transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 ${
                  isVisible ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-primary">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-base leading-relaxed">
                    {exp.description}
                  </CardDescription>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li 
                            key={respIndex} 
                            className={`flex items-start gap-3 text-muted-foreground transition-all duration-500 delay-${respIndex * 100} ${
                              isVisible ? 'slide-up' : 'opacity-0'
                            }`}
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="leading-relaxed text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Contributions */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Key Contributions</h4>
                      <ul className="space-y-2">
                        {exp.keyContributions.map((contribution, contIndex) => (
                          <li 
                            key={contIndex} 
                            className={`flex items-start gap-3 text-muted-foreground transition-all duration-500 delay-${(contIndex + 3) * 100} ${
                              isVisible ? 'slide-up' : 'opacity-0'
                            }`}
                          >
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="leading-relaxed text-sm">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className={`hover-scale transition-all duration-300 delay-${techIndex * 50} ${
                            isVisible ? 'slide-up' : 'opacity-0'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements and Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index}
                  className={`glow-soft hover:glow-accent transition-all duration-500 hover-scale bg-card/50 backdrop-blur-sm border-border/50 ${
                    isVisible ? 'slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-accent/10">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Education Card */}
            <Card 
              className={`glow-soft hover:glow-primary transition-all duration-500 hover-scale bg-card/50 backdrop-blur-sm border-border/50 ${
                isVisible ? 'slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '800ms' }}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">B Tech (ECE)</div>
                  <div className="text-sm text-muted-foreground">
                    Bodhia Institute of Technology
                  </div>
                  <div className="text-sm text-muted-foreground">
                    AKTU University (2022)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};