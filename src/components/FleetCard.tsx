import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Wind, Shield } from "lucide-react";

interface FleetCardProps {
  name: string;
  image: string;
  seating: string;
  features: string[];
  description: string;
}

export const FleetCard = ({ name, image, seating, features, description }: FleetCardProps) => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card className="bg-gradient-card border-border/50 overflow-hidden shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold mb-2 bg-gradient-gold bg-clip-text text-transparent">
          {name}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>{seating}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-primary" />
            <span>Climate Control</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>Insured</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span 
                key={index}
                className="text-xs px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full border border-border/30"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button 
          onClick={scrollToBooking}
          className="w-full bg-primary hover:bg-primary/90 text-background font-semibold transition-all"
        >
          Hire This Van
        </Button>
      </div>
    </Card>
  );
};
