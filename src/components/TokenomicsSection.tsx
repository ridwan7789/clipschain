import { Wallet, Zap, Gift, ArrowUpRight } from "lucide-react";

const distribution = [
  { label: "Ecosystem", percentage: 38, color: "hsl(180, 100%, 50%)" },
  { label: "Treasury", percentage: 20, color: "hsl(280, 100%, 60%)" },
  { label: "Team", percentage: 15, color: "hsl(320, 100%, 60%)" },
  { label: "Seed/Private", percentage: 12, color: "hsl(152, 100%, 50%)" },
  { label: "Public", percentage: 10, color: "hsl(200, 100%, 60%)" },
  { label: "Liquidity", percentage: 5, color: "hsl(60, 100%, 50%)" },
];

const utilities = [
  { icon: Wallet, title: "Governance", description: "Vote on protocol upgrades and treasury allocation" },
  { icon: Zap, title: "Staking Rewards", description: "Stake $CLIP to earn protocol fees" },
  { icon: Gift, title: "Creator Rewards", description: "Earn tokens through content creation" },
  { icon: ArrowUpRight, title: "Fee Discounts", description: "Reduced marketplace fees for holders" },
];

const TokenomicsSection = () => {
  const createPieSlice = (startAngle: number, endAngle: number, color: string) => {
    const radius = 80;
    const cx = 100;
    const cy = 100;
    
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;
    
    const x1 = cx + radius * Math.cos(startRad);
    const y1 = cy + radius * Math.sin(startRad);
    const x2 = cx + radius * Math.cos(endRad);
    const y2 = cy + radius * Math.sin(endRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  let currentAngle = 0;
  const slices = distribution.map(item => {
    const startAngle = currentAngle;
    const sliceAngle = (item.percentage / 100) * 360;
    currentAngle += sliceAngle;
    return {
      ...item,
      path: createPieSlice(startAngle, currentAngle, item.color),
    };
  });

  return (
    <section id="tokenomics" className="section-spacing cyber-grid">
      <div className="container-grid">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary neon-text">Tokenomics</p>
          <h2 className="section-title text-foreground">
            $CLIP Token Distribution
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A balanced allocation designed for long-term ecosystem growth and sustainability.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Pie Chart */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg viewBox="0 0 200 200" className="h-64 w-64 lg:h-80 lg:w-80" style={{ filter: 'drop-shadow(0 0 20px hsl(180 100% 50% / 0.3))' }}>
                {slices.map((slice, index) => (
                  <path
                    key={index}
                    d={slice.path}
                    fill={slice.color}
                    className="transition-opacity hover:opacity-80"
                    style={{ filter: `drop-shadow(0 0 8px ${slice.color})` }}
                  />
                ))}
                <circle cx="100" cy="100" r="45" fill="hsl(240, 15%, 5%)" />
                <text x="100" y="95" textAnchor="middle" className="fill-primary font-display text-lg font-bold" style={{ filter: 'drop-shadow(0 0 10px hsl(180 100% 50%))' }}>
                  $CLIP
                </text>
                <text x="100" y="115" textAnchor="middle" className="fill-muted-foreground text-xs uppercase tracking-wider">
                  Total Supply
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {distribution.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span 
                    className="h-3 w-3 rounded-sm"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.label} <span className="font-bold text-foreground">{item.percentage}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">Token Utilities</h3>
            <p className="mt-2 text-muted-foreground">
              $CLIP powers the entire Clipchain ecosystem with multiple use cases.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {utilities.map((utility, index) => (
                <div key={index} className="card-cyber p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 border border-primary/30">
                    <utility.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground uppercase tracking-wider">{utility.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{utility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
