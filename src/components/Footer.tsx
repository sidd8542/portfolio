import { Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/sidd8542",
    label: "GitHub",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/siddhant-mishra-06a826220/",
    label: "LinkedIn", 
    color: "hover:text-blue-400"
  },
  {
    icon: Mail,
    href: "mailto:siddhantmishra51@gmail.com",
    label: "Email",
    color: "hover:text-green-400"
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-3">
              Siddhant Mishra
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and driving digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 siddhantmishra51@gmail.com</p>
              <p>📱 +91-8542866475</p>
              <p>📍 Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover-scale group ${social.color}`}
                aria-label={social.label}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Siddhant Mishra. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>&</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
              <span>using</span>
              <Code className="w-4 h-4 text-blue-500" />
              <span>React + TypeScript + TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};