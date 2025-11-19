export const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Cape Town Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            We offer more than just transportation — we provide an exclusive journey through 
            one of the world's most beautiful cities. Each of our three premium VW vans comes 
            with a professional driver who knows Cape Town intimately.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you're exploring Table Mountain, touring the Winelands, or cruising along 
            Chapman's Peak, experience the Mother City in unparalleled comfort and style.
          </p>
        </div>
      </div>
    </section>
  );
};
