import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    van: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Booking Request:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Preferred Van: ${formData.van}%0A
Date: ${formData.date}%0A
Message: ${formData.message}`;
    
    window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      van: "",
      date: "",
      message: "",
    });
  };

  return (
    <section id="booking" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Book Your Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience Cape Town in luxury? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-card p-8 rounded-lg border border-border/50 shadow-card animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <select
                    value={formData.van}
                    onChange={(e) => setFormData({ ...formData, van: e.target.value })}
                    required
                    className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md text-foreground"
                  >
                    <option value="">Select a Van</option>
                    <option value="The Explorer">The Explorer</option>
                    <option value="The Coastal">The Coastal</option>
                    <option value="The Executive">The Executive</option>
                  </select>
                </div>
                <div>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="bg-background/50 border-border/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Additional details or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border/50 min-h-24"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-gold hover:opacity-90 text-background font-semibold shadow-luxury"
                >
                  Send Booking Request
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-gradient-card p-8 rounded-lg border border-border/50 shadow-card">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Cape Town, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Call or WhatsApp</p>
                      <a href="tel:+27123456789" className="text-muted-foreground hover:text-primary transition-colors">
                        +27 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@capetownvans.co.za" className="text-muted-foreground hover:text-primary transition-colors">
                        info@capetownvans.co.za
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/30">
                  <Button
                    onClick={() => window.open('https://wa.me/27123456789', '_blank')}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold"
                  >
                    Quick Book via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
