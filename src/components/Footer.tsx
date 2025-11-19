import { Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/30 py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
                Cape Town Vans
              </h3>
              <p className="text-muted-foreground">
                Luxury VW van rentals with professional drivers. Experience Cape Town in style.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#fleet" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-muted-foreground hover:text-primary transition-colors">
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="tel:+27123456789" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                </a>
                <a 
                  href="mailto:info@capetownvans.co.za" 
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Cape Town Luxury Vans. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
