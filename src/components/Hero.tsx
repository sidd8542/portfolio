import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Terminal } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const downloadResume = () => {
    // In a real implementation, you'd link to an actual resume file
    console.log("Downloading resume...");
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden"
    >
      {/* Animated Background SVG */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="50" fill="url(#grad1)" className="animate-pulse">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0;50,100;0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="800" cy="200" r="30" fill="url(#grad1)" className="animate-pulse">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0;-30,50;0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="200" cy="800" r="40" fill="url(#grad1)" className="animate-pulse">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0;100,-50;0,0"
              dur="25s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Mouse-following gradient */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15), transparent 50%)`
        }}
      />

      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes with enhanced animations */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full opacity-50 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/30 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-border/20 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-primary/10 rotate-45 opacity-25 animate-spin" style={{ animationDuration: '30s' }}></div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0),
              radial-gradient(circle at 50px 50px, hsl(var(--accent)) 0.5px, transparent 0)
            `,
            backgroundSize: '60px 60px, 100px 100px'
          }} />
        </div>

        {/* Floating code symbols */}
        <div className="absolute top-1/4 left-1/3 text-primary/10 text-6xl font-mono animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>{'<}'}</div>
        <div className="absolute bottom-1/3 right-1/3 text-accent/10 text-5xl font-mono animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>{'</>'}</div>
        <div className="absolute top-2/3 left-1/5 text-primary/10 text-4xl font-mono animate-pulse">{'{}'}</div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Profile Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'} text-center lg:text-left`}>
            <div className="relative inline-block group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-500 backdrop-blur-sm bg-card/10">
                <img 
                  src={profilePhoto} 
                  alt="Siddhant Mishra" 
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground cursor-default relative">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  {"Siddhant Mishra".split("").map((char, index) => (
                    <span 
                      key={index}
                      className="inline-block transition-all duration-300 hover:scale-110 hover:text-primary professional-hover"
                      style={{ 
                        animationDelay: `${index * 0.05}s`
                      }}
                      onClick={(e) => {
                        e.currentTarget.classList.add('animate-bounce');
                        setTimeout(() => {
                          e.currentTarget.classList.remove('animate-bounce');
                        }, 600);
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
              <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
                Full Stack Developer
              </p>
              <p className="text-lg text-muted-foreground/90 mb-8 max-w-2xl leading-relaxed">
                3+ years of experience building scalable web applications with modern technologies.
                Passionate about creating efficient, user-friendly solutions that make a difference.
              </p>
              
              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'slide-up' : 'opacity-0'} flex flex-wrap gap-4 justify-center lg:justify-start mb-12`}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 professional-hover group relative overflow-hidden"
                onClick={downloadResume}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 professional-hover backdrop-blur-sm"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'slide-up' : 'opacity-0'} flex justify-center lg:justify-start gap-6`}>
              <a 
                href="mailto:siddhantmishra051@gmail.com"
                className="p-4 rounded-full bg-card/50 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl professional-hover group backdrop-blur-sm"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a 
                href="#" 
                className="p-4 rounded-full bg-card/50 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl professional-hover group backdrop-blur-sm"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a 
                href="#" 
                className="p-4 rounded-full bg-card/50 border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl professional-hover group backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'slide-up' : 'opacity-0'} mt-8 space-y-2`}>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>siddhantmishra051@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground">
                <span className="text-primary">📱</span>
                <span>+91-8542664751</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};