import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ClickEffect } from "@/components/ClickEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ClickEffect />
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
