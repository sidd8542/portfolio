import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "siddhantmishra051@gmail.com",
    href: "mailto:siddhantmishra051@gmail.com",
    color: "text-blue-400"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-8542664751",
    href: "tel:+918542664751",
    color: "text-green-400"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Uttar Pradesh, India",
    href: "#",
    color: "text-purple-400"
  }
];

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    href: "#",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: "#",
    color: "hover:text-blue-400"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    href: "https://wa.me/918542664751",
    color: "hover:text-green-400"
  }
];

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const downloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon!",
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-primary/20" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-accent/20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 rounded-full border border-primary/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card
                    key={contact.title}
                    className={`glow-soft hover:glow-primary transition-all duration-500 hover-scale bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer ${
                      isVisible ? 'slide-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => contact.href !== "#" && window.open(contact.href, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <IconComponent className={`w-6 h-6 ${contact.color}`} />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{contact.title}</div>
                          <div className="text-muted-foreground">{contact.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card 
              className={`glow-soft hover:glow-accent transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 ${
                isVisible ? 'slide-up delay-500' : 'opacity-0'
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Follow Me</CardTitle>
                <CardDescription>Connect with me on social platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.title}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 hover-scale group ${social.color}`}
                        title={social.title}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card 
              className={`glow-soft hover:glow-primary transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 ${
                isVisible ? 'slide-up delay-600' : 'opacity-0'
              }`}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4">
                    <Download className="w-8 h-8 mx-auto text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Download Resume</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get a detailed overview of my experience and skills
                  </p>
                  <Button 
                    onClick={downloadResume}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card 
            className={`glow-soft hover:glow-accent transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 ${
              isVisible ? 'slide-up delay-300' : 'opacity-0'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
              <CardDescription>
                Have a project in mind? Let's discuss the details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow-accent group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};