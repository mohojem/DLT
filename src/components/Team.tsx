import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "Adv. Johan du Toit",
    title: "Director",
    focus: "Commercial Law, Litigation",
    qualifications: "BA LLB (UFS), Admitted Advocate",
  },
  {
    name: "Marius Lambrechts",
    title: "Director",
    focus: "Property Law, Conveyancing",
    qualifications: "B.Proc (UFS)",
  },
  {
    name: "Annemarie van der Merwe",
    title: "Associate Attorney",
    focus: "Family Law, Estates",
    qualifications: "LLB (UFS)",
  },
  {
    name: "Pieter Botha",
    title: "Associate Attorney",
    focus: "Labour Law, Criminal Law",
    qualifications: "LLB (NWU)",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Legal Professionals
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-muted-foreground text-lg">
            Our attorneys bring extensive experience and dedication to every
            matter. Each client works directly with qualified legal
            professionals committed to achieving the best possible outcomes.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Avatar Placeholder */}
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-serif font-bold text-gold">
                  {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>

              <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-2">
                {member.title}
              </p>
              <p className="text-muted-foreground text-sm mb-1">
                {member.focus}
              </p>
              <p className="text-muted-foreground/70 text-xs">
                {member.qualifications}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 bg-primary rounded-lg text-center">
          <h3 className="text-2xl font-serif font-semibold text-primary-foreground mb-4">
            Speak Directly With an Attorney
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            All consultations are handled by qualified attorneys who take personal
            responsibility for your matter from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0514331415"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>051 433 1415</span>
            </a>
            <span className="hidden sm:block text-primary-foreground/40">|</span>
            <a
              href="mailto:infobfn@dtllaw.co.za"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>infobfn@dtllaw.co.za</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
