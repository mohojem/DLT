import { Shield, Scale, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest ethical standards in all legal matters.",
  },
  {
    icon: Scale,
    title: "Excellence",
    description: "Delivering superior legal services with meticulous attention to detail.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Building lasting relationships through dedicated representation.",
  },
  {
    icon: Award,
    title: "Results",
    description: "Achieving favourable outcomes through strategic legal expertise.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              About DTL Law
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              A Legacy of Legal
              <span className="text-accent"> Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Du Toit Lambrechts Inc. is a full-service South African law firm
              committed to providing professional, ethical, and results-oriented
              legal services. With offices in Bloemfontein, Mossel Bay, and Cape
              Town, we serve clients across the nation.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our attorneys combine extensive legal knowledge with a deep
              understanding of our clients' needs. We believe in clear
              communication, transparent fee structures, and building lasting
              relationships based on trust and mutual respect.
            </p>
            <Button asChild>
              <a href="#contact">Schedule a Consultation</a>
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-muted/50 border border-border hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
