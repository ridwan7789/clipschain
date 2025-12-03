import { Shield, FileCheck, Database, Users, Fingerprint } from "lucide-react";

const securityFeatures = [
  {
    icon: FileCheck,
    title: "Smart Contract Audits",
    description: "Multiple third-party security audits",
  },
  {
    icon: Shield,
    title: "BEP-721 & BEP-1155",
    description: "Industry-standard token protocols",
  },
  {
    icon: Database,
    title: "IPFS/Arweave Storage",
    description: "Decentralized, permanent storage",
  },
  {
    icon: Users,
    title: "Multi-sig Treasury",
    description: "Secure fund management",
  },
  {
    icon: Fingerprint,
    title: "Anti-Copy Fingerprinting",
    description: "Content originality verification",
  },
];

const SecuritySection = () => {
  return (
    <section className="section-spacing">
      <div className="container-grid">
        <div className="card-cyber overflow-hidden p-8 lg:p-12" style={{ boxShadow: '0 0 40px hsl(180 100% 50% / 0.1)' }}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary neon-text">Security</p>
              <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl uppercase tracking-wider">
                Built for Trust
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Clipchain prioritizes security at every layer, from smart contracts to content storage. Your assets are protected by industry-leading standards.
              </p>

              {/* Security badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-sm border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Audited
                </span>
                <span className="rounded-sm border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-secondary">
                  Non-Custodial
                </span>
                <span className="rounded-sm border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent">
                  Open Source
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 rounded-sm bg-muted/50 p-4 border border-primary/20 ${
                    index === securityFeatures.length - 1 ? 'sm:col-span-2 sm:max-w-[50%]' : ''
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary/10 border border-primary/30">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground uppercase tracking-wider text-sm">{feature.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
