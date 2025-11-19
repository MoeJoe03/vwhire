import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";

export const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroVan} 
          alt="Luxury VW Van in Cape Town" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
          Luxury Van Rentals
        </h1>
        <p className="font-serif text-3xl md:text-4xl mb-4 text-foreground/90">
          in Cape Town
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Travel in comfort and style — three VW vans, each with your personal driver.
        </p>
        <Button 
          onClick={scrollToBooking}
          size="lg"
          className="bg-gradient-gold hover:opacity-90 text-background font-semibold text-lg px-8 py-6 shadow-luxury transition-all hover:scale-105"
        >
          Book Your Ride
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};
