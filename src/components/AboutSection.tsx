const AboutSection = () => (
  <section id="apropos" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
    <div className="container px-4">
      <div className="scroll-animate max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">À propos de nous</h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
          Nous proposons des fruits et légumes frais, sélectionnés avec soin pour garantir qualité et fraîcheur à nos clients.
          Notre mission est de rendre accessible à tous une alimentation saine et naturelle, directement du producteur à votre table.
        </p>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          Depuis notre création, nous travaillons main dans la main avec des agriculteurs locaux passionnés,
          engagés dans une agriculture responsable et respectueuse de l'environnement.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
