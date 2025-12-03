const partners = [
  { name: "Binance", logo: "Binance" },
  { name: "Ankr", logo: "Ankr" },
  { name: "Chainlink", logo: "Chainlink" },
  { name: "The Graph", logo: "The Graph" },
  { name: "Arweave", logo: "Arweave" },
  { name: "Filecoin", logo: "Filecoin" },
  { name: "IPFS", logo: "IPFS" },
  { name: "Pocket Network", logo: "Pocket" },
];

const PartnersSection = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Partners</p>
          <h2 className="section-title text-foreground">
            Backed by Industry Leaders
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Collaborating with the best in blockchain infrastructure and technology.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex h-24 items-center justify-center rounded-2xl border border-border bg-card transition-colors hover:border-primary/30 lg:h-28"
            >
              <span className="font-display text-lg font-semibold text-muted-foreground">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
