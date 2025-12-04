import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const TokenAddress = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = '0x5Caf484CB0C076C66D1A6F3ED362DE2Bce899754';

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-spacing cyber-grid bg-primary/5">
      <div className="container-grid">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary neon-text">Token Contract</p>
          <h2 className="section-title text-foreground">
            $CLIP Token Address
          </h2>

          <div className="relative inline-flex items-center">
            <span className="font-mono text-lg font-bold bg-card text-foreground px-4 py-3 rounded-l-lg border border-primary/30 border-r-0">
              {tokenAddress}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center justify-center h-full bg-primary hover:bg-primary/90 px-4 rounded-r-lg transition-colors border border-l-0 border-primary/30"
              aria-label={copied ? "Address copied" : "Copy address"}
            >
              {copied ? (
                <Check className="h-5 w-5 text-white" />
              ) : (
                <Copy className="h-5 w-5 text-white" />
              )}
            </button>
          </div>

          {copied && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-primary">
              <Check className="h-4 w-4" />
              <span>Address copied to clipboard!</span>
            </div>
          )}

          <div className="mt-8">
            <a
              href="https://pancakeswap.finance/swap?chain=bsc&chainOut=bsc&inputCurrency=BNB&outputCurrency=0x5Caf484CB0C076C66D1A6F3ED362DE2Bce899754&exactAmount=&exactField=INPUT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              BUY $CLIP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenAddress;