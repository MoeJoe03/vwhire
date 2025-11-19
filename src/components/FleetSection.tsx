import { FleetCard } from "./FleetCard";
import vanLuxury from "@/assets/van-luxury.jpg";
import vanCoastal from "@/assets/van-coastal.jpg";
import vanUrban from "@/assets/van-urban.jpg";

export const FleetSection = () => {
  const fleet = [
    {
      name: "The Explorer",
      image: vanLuxury,
      seating: "7 Passengers",
      description: "Perfect for wine tours and scenic adventures",
      features: ["Leather Seats", "Professional Driver", "Premium Sound", "Cooler Box"],
    },
    {
      name: "The Coastal",
      image: vanCoastal,
      seating: "8 Passengers",
      description: "Ideal for beach trips and coastal drives",
      features: ["Panoramic Windows", "Experienced Driver", "WiFi Onboard", "USB Charging"],
    },
    {
      name: "The Executive",
      image: vanUrban,
      seating: "6 Passengers",
      description: "Luxury transport for business and events",
      features: ["VIP Seating", "Chauffeur Service", "Climate Control", "Privacy Glass"],
    },
  ];

  return (
    <section id="fleet" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from three meticulously maintained VW vans, each designed for your comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {fleet.map((van, index) => (
            <div 
              key={van.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FleetCard {...van} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
