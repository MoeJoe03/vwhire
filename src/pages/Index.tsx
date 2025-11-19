import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FleetSection } from "@/components/FleetSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <HeroSection />
      <AboutSection />
      <FleetSection />
      <WhyChooseSection />
      <BookingSection />
      <Footer />
    </main>
  );
};

export default Index;
