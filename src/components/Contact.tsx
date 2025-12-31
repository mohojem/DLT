import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "Bloemfontein",
    address: "15 Wilcocks Road, Noordhoek, Bloemfontein, Free State",
    phone: "051 433 1415",
    email: "infobfn@dtllaw.co.za",
  },
  {
    city: "Mossel Bay",
    address: "16 Marsh Street, Mossel Bay, Western Cape",
    phone: "044 690 3666",
    email: "infomsb@dtllaw.co.za",
  },
  {
    city: "Cape Town",
    address: "12 Melkboom Street, Bracken Heights, Brackenfell, Cape Town",
    phone: "081 618 9183",
    email: "infobfn@dtllaw.co.za",
  },
];

const practiceAreas = [
  "Commercial Law",
  "Litigation",
  "Property & Conveyancing",
  "Family Law",
  "Estates, Wills & Trusts",
  "Criminal Law",
  "Labour Law",
  "Debt Review & Collections",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted",
      description:
        "Thank you for contacting us. An attorney will be in touch shortly.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      practiceArea: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your legal matter? Contact us to schedule a
            consultation with one of our experienced attorneys.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Request a Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="practiceArea">Area of Legal Need</Label>
                <Select
                  value={formData.practiceArea}
                  onValueChange={(value) =>
                    setFormData({ ...formData, practiceArea: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a practice area" />
                  </SelectTrigger>
                  <SelectContent>
                    {practiceAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Brief Description of Your Matter *</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Please provide a brief overview of your legal matter..."
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                All enquiries are treated as strictly confidential.
              </p>
            </form>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Our Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-6 bg-muted/50 rounded-lg border border-border"
                  >
                    <h4 className="text-lg font-serif font-semibold text-foreground mb-3">
                      {office.city}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 bg-primary rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-gold" />
                <h4 className="text-lg font-serif font-semibold text-primary-foreground">
                  Office Hours
                </h4>
              </div>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday & Public Holidays</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
