import { useEffect, useState, useRef } from "react";
import { Users, Briefcase, MapPin, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 25,
    suffix: "+",
    label: "Years Combined Experience",
  },
  {
    icon: Briefcase,
    value: 5000,
    suffix: "+",
    label: "Matters Handled",
  },
  {
    icon: MapPin,
    value: 3,
    suffix: "",
    label: "Office Locations",
  },
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Clients Assisted",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-serif font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 lg:py-20 bg-cream border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
