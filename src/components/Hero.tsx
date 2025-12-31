import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-primary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--gold)/0.1)_25%,hsl(var(--gold)/0.1)_50%,transparent_50%,transparent_75%,hsl(var(--gold)/0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 animate-fade-in">
            <span className="text-gold text-sm font-medium">
              Trusted Legal Counsel Since Establishment
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in [animation-delay:100ms]">
            Experienced Legal
            <span className="block text-gold">Representation</span>
            You Can Trust
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-10 animate-fade-in [animation-delay:200ms]">
            Du Toit Lambrechts Inc. provides comprehensive legal services across
            South Africa. From commercial litigation to family law, our dedicated
            attorneys deliver professional, results-driven counsel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms]">
            <Button size="lg" variant="gold" asChild>
              <a href="#contact" className="gap-2">
                Request a Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline-light" asChild>
              <a href="#practice-areas">Explore Practice Areas</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in [animation-delay:400ms]">
            <p className="text-sm text-primary-foreground/60 mb-4">
              Offices in
            </p>
            <div className="flex flex-wrap gap-6">
              {["Bloemfontein", "Mossel Bay", "Cape Town"].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-primary-foreground font-medium">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
