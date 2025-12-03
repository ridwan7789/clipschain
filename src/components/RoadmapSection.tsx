import { Check, Clock } from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    items: [
      "Core protocol development",
      "Smart contract deployment",
      "Whitepaper release",
      "Community building",
    ],
  },
  {
    phase: "Phase 2",
    title: "Launch",
    status: "current",
    items: [
      "Testnet launch",
      "Security audits",
      "Token generation event",
      "DEX listing",
    ],
  },
  {
    phase: "Phase 3",
    title: "Growth",
    status: "upcoming",
    items: [
      "Mainnet launch",
      "DCA minting platform",
      "Marketplace beta",
      "Creator partnerships",
    ],
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    status: "upcoming",
    items: [
      "AI Clip Studio",
      "Mobile app launch",
      "Cross-chain support",
      "Enterprise integrations",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="section-spacing border-t border-border">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Roadmap</p>
          <h2 className="section-title text-foreground">
            Building the Future
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Our strategic roadmap for transforming the creator economy.
          </p>
        </div>

        <div className="mt-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-6 h-px bg-border" />
              
              <div className="grid grid-cols-4 gap-6">
                {roadmap.map((phase, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className={`relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                      phase.status === 'completed' 
                        ? 'border-primary bg-primary' 
                        : phase.status === 'current'
                        ? 'border-primary bg-background'
                        : 'border-border bg-background'
                    }`}>
                      {phase.status === 'completed' ? (
                        <Check className="h-5 w-5 text-primary-foreground" />
                      ) : phase.status === 'current' ? (
                        <Clock className="h-5 w-5 text-primary" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                      )}
                    </div>

                    <div className="card-base text-center">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {phase.phase}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                        {phase.title}
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="space-y-6 lg:hidden">
            {roadmap.map((phase, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    phase.status === 'completed' 
                      ? 'border-primary bg-primary' 
                      : phase.status === 'current'
                      ? 'border-primary bg-background'
                      : 'border-border bg-background'
                  }`}>
                    {phase.status === 'completed' ? (
                      <Check className="h-4 w-4 text-primary-foreground" />
                    ) : phase.status === 'current' ? (
                      <Clock className="h-4 w-4 text-primary" />
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                    )}
                  </div>
                  {index < roadmap.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>

                <div className="card-base mb-0 flex-1 pb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {phase.phase}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                    {phase.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
