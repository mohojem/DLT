import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/dtl-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <img
                src={logo}
                alt="DTL Law"
                className="h-24 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Du Toit Lambrechts Inc. is a trusted South African law firm
              providing professional legal services across multiple practice
              areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Practice Areas", href: "/practice-areas" },
                { label: "Our Team", href: "/#team" },
                { label: "Contact", href: "/#contact" },
              ].map((link) =>
                link.href.startsWith("/practice") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">
              Practice Areas
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Commercial Law", id: "commercial-law" },
                { label: "Litigation", id: "litigation" },
                { label: "Property & Conveyancing", id: "property-conveyancing" },
                { label: "Family Law", id: "family-law" },
                { label: "Estates & Wills", id: "estates-wills-trusts" },
              ].map((area) => (
                <Link
                  key={area.label}
                  to={`/practice-areas#${area.id}`}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {area.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-foreground">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  15 Wilcocks Road, Noordhoek, Bloemfontein
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="tel:0514331415"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  051 433 1415
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:infobfn@dtllaw.co.za"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  infobfn@dtllaw.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Du Toit Lambrechts Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Legal Disclaimer
              </a>
              <a href="/#faq" className="hover:text-accent transition-colors">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;