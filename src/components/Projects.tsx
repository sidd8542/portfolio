import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, BarChart3, ShoppingCart, Brain, Palette, Shield, Eye, EyeOff } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Waste Management System",
    description: "Smart waste management platform with IoT integration for real-time monitoring, route optimization, and environmental impact tracking with automated reporting.",
    technologies: ["React", "Node.js", "IoT", "MongoDB", "Python"],
    category: "Environmental",
    icon: Shield,
    features: [
      "Real-time waste monitoring with IoT sensors",
      "Optimized collection route planning",
      "Environmental impact analytics and reporting"
    ]
  },
  {
    id: 3,
    title: "Seller Dashboard for ONDC",
    description: "Advanced seller platform with API integration for fast brand and product catalog management, focusing on seamless API integration and efficient listing workflows.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "E-commerce",
    icon: ShoppingCart,
    features: [
      "Seller API integration",
      "Product catalog management",
      "ONDC platform compatibility"
    ]
  },

  {
    id: 2,
    title: "Digital Spine",
    description: "A comprehensive portal for personalized dashboard access using PowerBI embedding, featuring like re-caching, and seamless API integration with optimized listing workflows.",
    technologies: ["Angular", "Node.js", "SQL Server", "PowerBI"],
    category: "Enterprise",
    icon: BarChart3,
    features: [
      "OAuth 2.0 authentication for secure data access",
      "PowerBI dashboard integration",
      "Optimized API performance"
    ]
  },
  {
    id: 7,
    title: "BeautyHub",
    description: "Survey-based analytics platform for the IT care department with interactive dashboards using D3.js for data visualization and real-time insights.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    category: "Visualization",
    icon: Palette,
    features: [
      "Interactive D3.js dashboards",
      "Real-time data visualization",
      "Survey analytics for IT care"
    ]
  },

  {
    id: 4,
    title: "PIPO",
    description: "Dynamic user dashboard with features like dynamic form handling, workflows, SLA tracking, and Excel integration for comprehensive data management.",
    technologies: ["Angular", "Node.js", "SQL Server"],
    category: "Productivity",
    icon: Database,
    features: [
      "Dynamic form handling",
      "SLA tracking system",
      "Excel integration for data management"
    ]
  },
  {
    id: 5,
    title: "Consumer Survey Analytics",
    description: "Automated survey analytics platform generating PDF reports with insights like trend analysis and rankings, utilizing MSAL authentication for secure access.",
    technologies: ["React", "Python", "MySQL"],
    category: "Analytics",
    icon: BarChart3,
    features: [
      "Automated PDF report generation",
      "Trend analysis and rankings",
      "MSAL authentication"
    ]
  },
  {
    id: 6,
    title: "IDAS",
    description: "AI-powered decision-making tool for supply chain planners with automated production adjustments, supplier PO amendments, and predictive analytics.",
    technologies: ["React", "Node.js", "SQL Server"],
    category: "AI/ML",
    icon: Brain,
    features: [
      "AI-powered decision automation",
      "Supply chain optimization",
      "Predictive analytics for efficiency"
    ]
  },

  {
    id: 8,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with payment gateway integration, inventory management, and real-time order tracking capabilities.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    category: "E-commerce",
    icon: ShoppingCart,
    features: [
      "Secure payment processing",
      "Real-time inventory management",
      "Advanced order tracking system"
    ]
  },
  {
    id: 9,
    title: "Social Media Analytics Dashboard",
    description: "Comprehensive social media monitoring tool with sentiment analysis, engagement metrics, and automated reporting for brand management.",
    technologies: ["Vue.js", "Python", "TensorFlow", "AWS"],
    category: "Analytics",
    icon: BarChart3,
    features: [
      "Real-time sentiment analysis",
      "Cross-platform engagement tracking",
      "Automated performance reports"
    ]
  }
];

const categoryColors = {
  "Enterprise": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "E-commerce": "bg-green-500/10 text-green-400 border-green-500/20",
  "Productivity": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Analytics": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "AI/ML": "bg-red-500/10 text-red-400 border-red-500/20",
  "Visualization": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Environmental": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
};

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllProjects, setShowAllProjects] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Define recent projects (first 6 projects)
  const recentProjects = projects.slice(0, 3);
  const displayedProjects = showAllProjects ? projects : recentProjects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border border-primary/20 rounded-full liquid-blob" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-accent/20 rounded-full liquid-blob" />
      </div>

      {/* Mouse-following gradient */}
      <div 
        className="absolute inset-0 opacity-25 transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.1), transparent 40%)`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing innovative solutions built with modern technologies
          </p>
          
          {/* Toggle Button */}
          <div className="flex justify-center">
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              className="group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {showAllProjects ? (
                <>
                  <EyeOff className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Show Recent Only
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  View All Projects ({projects.length})
                </>
              )}
            </Button>
          </div>
          
          {/* Project Count Indicator */}
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Showing {displayedProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 tilt-effect morphing-border cursor-pointer ${
                  isVisible ? 'slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Icon Background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-all duration-300 magnetic">
                  <IconComponent className="w-16 h-16 group-hover:animate-pulse" />
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 magnetic pulse-ring">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold transition-all duration-300 ">
                          {project.title}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`mt-1 elastic-bounce ${categoryColors[project.category as keyof typeof categoryColors]}`}
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Professional Project Badge */}
                  <div className="pt-2">
                    <div className="text-sm text-muted-foreground px-3 py-2 rounded-md bg-muted/50 text-center">
                      Professional Project
                    </div>
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};