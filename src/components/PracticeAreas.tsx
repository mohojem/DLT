import { Link } from "react-router-dom";
import {
  Building2,
  Gavel,
  Home,
  Heart,
  FileText,
  Shield,
  Briefcase,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  {
    id: "commercial-law",
    icon: Building2,
    title: "Commercial Law",
    description:
      "Comprehensive legal support for businesses, including contracts, corporate governance, and commercial transactions.",
  },
  {
    id: "litigation",
    icon: Gavel,
    title: "Litigation",
    description:
      "Strategic representation in civil disputes, from negotiation through to trial and enforcement.",
  },
  {
    id: "property-conveyancing",
    icon: Home,
    title: "Property & Conveyancing",
    description:
      "Expert handling of property transfers, bond registrations, and real estate transactions.",
  },
  {
    id: "family-law",
    icon: Heart,
    title: "Family Law",
    description:
      "Sensitive guidance through divorce, custody matters, maintenance, and domestic disputes.",
  },
  {
    id: "estates-wills-trusts",
    icon: FileText,
    title: "Estates, Wills & Trusts",
    description:
      "Comprehensive estate planning, will drafting, trust formation, and estate administration.",
  },
  {
    id: "criminal-law",
    icon: Shield,
    title: "Criminal Law",
    description:
      "Robust defence and representation in criminal matters, protecting your rights at every stage.",
  },
  {
    id: "labour-law",
    icon: Briefcase,
    title: "Labour Law",
    description:
      "Expert advice on employment contracts, disputes, CCMA matters, and workplace compliance.",
  },
  {
    id: "debt-collections",
    icon: CreditCard,
    title: "Debt Review & Collections",
    description:
      "Professional debt collection services and guidance through debt review processes.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Practice Areas
          </h2>
          <p className="text-muted-foreground text-lg">
            Our experienced legal team provides comprehensive services across a
            wide range of practice areas, ensuring expert representation for all
            your legal needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area) => (
            <Link
              key={area.id}
              to={`/practice-areas#${area.id}`}
              className="group p-6 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <area.icon className="h-7 w-7 text-accent group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {area.description}
              </p>
              <span className="text-accent text-sm font-medium group-hover:underline flex items-center gap-1">
                Learn More
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/practice-areas" className="gap-2">
              View All Practice Areas
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;