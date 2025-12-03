import { Play, Coins, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-grid">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">About Clipchain</p>
            <h2 className="section-title text-foreground">
              The Future of Creator Ownership
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Clipchain is a decentralized SocialFi platform that empowers creators to mint their short-form video content as Digital Clip Assets (DCA). Every clip becomes a verifiable on-chain asset with transparent royalty distribution.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Built on BNB Smart Chain, Clipchain combines the virality of social media with blockchain-powered monetization, giving creators true ownership over their content.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-3">
                <div className="icon-box">
                  <Play className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">Mint Clips</h3>
                <p className="text-sm text-muted-foreground">Transform any video into an on-chain asset</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="icon-box">
                  <Coins className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">Earn Royalties</h3>
                <p className="text-sm text-muted-foreground">Automated revenue distribution on every trade</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="icon-box">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">Own Forever</h3>
                <p className="text-sm text-muted-foreground">Permanent, verifiable on-chain ownership</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card-base relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative space-y-6 p-2">
                {/* Mock UI Element */}
                <div className="flex items-center gap-4 rounded-xl bg-secondary p-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                    <Play className="h-6 w-6 text-primary" fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Digital Clip Asset</p>
                    <p className="text-sm text-muted-foreground">BEP-721 Standard</p>
                  </div>
                  <span className="rounded-lg bg-primary/20 px-3 py-1 text-xs font-medium text-primary">Minted</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-secondary p-4">
                    <p className="text-sm text-muted-foreground">Total Views</p>
                    <p className="font-display text-2xl font-bold text-foreground">2.4M</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-4">
                    <p className="text-sm text-muted-foreground">Royalties Earned</p>
                    <p className="font-display text-2xl font-bold text-primary">$12,400</p>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Royalty Distribution</p>
                    <p className="text-sm font-medium text-foreground">10%</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-3/4 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
