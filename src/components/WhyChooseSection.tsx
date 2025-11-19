import { Shield, Award, MapPin, Heart } from "lucide-react";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Professional Drivers",
      description: "Experienced, licensed chauffeurs who prioritize your safety and comfort",
    },
    {
      icon: Award,
      title: "Comfort & Safety",
      description: "Premium vehicles maintained to the highest standards with full insurance",
    },
    {
      icon: MapPin,
      title: "Scenic Routes",
      description: "Local expertise to show you Cape Town's most breathtaking destinations",
    },
    {
      icon: Heart,
      title: "Local Experience",
      description: "Authentic Cape Town culture and insider knowledge of hidden gems",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={reason.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4 shadow-luxury group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
