const partners = [
  { name: "Binance", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.svg" },
  { name: "Ankr", logo: "https://cryptologos.cc/logos/ankr-ankr-logo.svg" },
  { name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg" },
  { name: "The Graph", logo: "https://cryptologos.cc/logos/the-graph-grt-logo.svg" },
  { name: "Arweave", logo: "https://cryptologos.cc/logos/arweave-ar-logo.svg" },
  { name: "Filecoin", logo: "https://cryptologos.cc/logos/filecoin-fil-logo.svg" },
  { name: "IPFS", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png" },
  { name: "Pocket Network", logo: "https://cryptologos.cc/logos/pocket-network-pokt-logo.svg" },
];

const PartnersSection = () => {
  return (
    <section className="section-spacing border-t border-primary/20">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">Partners</p>
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
              className="group flex h-24 items-center justify-center rounded-sm border border-primary/20 bg-card transition-all hover:border-primary/50 hover:bg-primary/5 lg:h-28"
              style={{ transition: 'all 0.3s ease' }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-10 w-auto max-w-[120px] opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 lg:h-12"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-display text-lg font-semibold text-muted-foreground group-hover:text-primary">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
