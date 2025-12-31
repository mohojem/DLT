import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
  Phone,
  CheckCircle2,
} from "lucide-react";

const practiceAreas = [
  {
    id: "family-law",
    icon: Heart,
    title: "Family Law",
    subtitle: "Compassionate legal support for family matters",
    description:
      "We assist with divorce, child custody, maintenance, adoption, and mediation services to resolve family disputes efficiently and ethically.",
    services: [
      "Divorce and separation proceedings",
      "Child custody and access arrangements",
      "Maintenance applications and enforcement",
      "Adoption services",
      "Domestic violence protection orders",
      "Prenuptial and postnuptial agreements",
      "Mediation and alternative dispute resolution",
    ],
    whoWeHelp:
      "Individuals and families navigating difficult transitions, seeking fair resolutions while protecting the interests of all parties, especially children.",
  },
  {
    id: "property-conveyancing",
    icon: Home,
    title: "Property & Conveyancing",
    subtitle: "Expert property transaction services",
    description:
      "Our experts handle property transfers, lease agreements, disputes, and real estate transactions to ensure compliance with South African law.",
    services: [
      "Property transfers and registrations",
      "Bond registrations and cancellations",
      "Sectional title transfers",
      "Lease agreement drafting and review",
      "Property disputes and evictions",
      "Township development registrations",
      "Due diligence investigations",
    ],
    whoWeHelp:
      "Property buyers, sellers, developers, landlords, and tenants requiring professional conveyancing services and property law expertise.",
  },
  {
    id: "commercial-law",
    icon: Building2,
    title: "Commercial Law",
    subtitle: "Strategic legal solutions for business",
    description:
      "DTL Law advises businesses on contracts, corporate structuring, commercial disputes, and compliance matters for a strong legal foundation.",
    services: [
      "Contract drafting and negotiation",
      "Company registrations and structuring",
      "Mergers and acquisitions",
      "Commercial dispute resolution",
      "Regulatory compliance",
      "Shareholder agreements",
      "Business sale and purchase agreements",
    ],
    whoWeHelp:
      "Entrepreneurs, SMEs, and established businesses seeking reliable legal counsel to protect their interests and support growth.",
  },
  {
    id: "litigation",
    icon: Gavel,
    title: "Litigation",
    subtitle: "Strong courtroom representation",
    description:
      "Our litigation team represents clients in civil and commercial disputes, providing professional guidance from preparation to courtroom representation.",
    services: [
      "Civil litigation and dispute resolution",
      "Commercial and contractual disputes",
      "Debt recovery proceedings",
      "Interdict applications",
      "Appeals and reviews",
      "Alternative dispute resolution",
      "Arbitration and mediation",
    ],
    whoWeHelp:
      "Individuals and businesses involved in legal disputes requiring professional representation and strategic litigation support.",
  },
  {
    id: "estates-wills-trusts",
    icon: FileText,
    title: "Estates, Wills & Trusts",
    subtitle: "Protecting your legacy and loved ones",
    description:
      "We offer comprehensive services in drafting wills, estate planning, administration, and trusts to safeguard your assets and family legacy.",
    services: [
      "Will drafting and updates",
      "Estate planning and structuring",
      "Estate administration and winding up",
      "Trust formation and administration",
      "Living wills and advance directives",
      "Intestate succession matters",
      "Estate dispute resolution",
    ],
    whoWeHelp:
      "Individuals planning for the future, families managing inherited estates, and trustees requiring professional estate administration services.",
  },
  {
    id: "criminal-law",
    icon: Shield,
    title: "Criminal Law",
    subtitle: "Defending your rights at every stage",
    description:
      "Experienced attorneys provide defence in criminal matters, ensuring your rights are protected at every stage of the legal process.",
    services: [
      "Bail applications",
      "Criminal defence representation",
      "Trial preparation and advocacy",
      "Appeals against conviction or sentence",
      "Expungement of criminal records",
      "Consultations on criminal matters",
      "Victim representation",
    ],
    whoWeHelp:
      "Individuals facing criminal charges who require experienced legal defence and protection of their constitutional rights.",
  },
  {
    id: "labour-law",
    icon: Briefcase,
    title: "Labour Law",
    subtitle: "Workplace solutions for employers and employees",
    description:
      "We advise employers and employees on workplace disputes, contracts, terminations, and compliance with South African labour legislation.",
    services: [
      "Employment contract drafting",
      "Unfair dismissal disputes",
      "CCMA representation",
      "Disciplinary and grievance procedures",
      "Retrenchment and redundancy",
      "Workplace policy development",
      "Employment equity compliance",
    ],
    whoWeHelp:
      "Employers seeking HR legal support and employees requiring representation in workplace disputes or unfair treatment matters.",
  },
  {
    id: "debt-collections",
    icon: CreditCard,
    title: "Debt Review & Collections",
    subtitle: "Fair and lawful debt resolution",
    description:
      "Our team assists clients with debt review, negotiations, and collections to ensure legal compliance and fair outcomes.",
    services: [
      "Debt collection proceedings",
      "Debt review applications",
      "Credit agreement disputes",
      "Judgment enforcement",
      "Negotiated payment arrangements",
      "Asset attachment and execution",
      "Consumer protection matters",
    ],
    whoWeHelp:
      "Creditors requiring professional debt recovery and consumers seeking debt relief through lawful debt review processes.",
  },
];

const PracticeAreas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
                Our Expertise
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-6">
                Practice Areas
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80">
                Providing expert legal guidance across a wide range of practice
                areas in South Africa. Our experienced attorneys deliver
                professional, results-driven counsel tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Detailed */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="space-y-20">
              {practiceAreas.map((area, index) => (
                <article
                  key={area.id}
                  id={area.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-start ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                          <area.icon className="h-7 w-7 text-gold" />
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
                            {area.title}
                          </h2>
                          <p className="text-accent font-medium text-sm">
                            {area.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {area.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                          Who We Help
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {area.whoWeHelp}
                        </p>
                      </div>

                      <Button asChild>
                        <a href="#contact-cta" className="gap-2">
                          Discuss Your {area.title} Matter
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    {/* Services List */}
                    <div
                      className={`bg-muted/50 rounded-lg p-8 border border-border ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                        Our {area.title} Services
                      </h3>
                      <ul className="space-y-3">
                        {area.services.map((service, serviceIndex) => (
                          <li
                            key={serviceIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < practiceAreas.length - 1 && (
                    <div className="mt-16 border-t border-border" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact-cta" className="section-padding bg-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary-foreground mb-4">
              Ready to Discuss Your Legal Matter?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact our experienced attorneys today for professional legal
              advice and representation tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="gold" asChild>
                <a href="/contact" className="gap-2">
                  Request a Consultation
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <a
                href="tel:0514331415"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                051 433 1415
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PracticeAreas;
