import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/clipchain-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container-grid">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <img src={logo} alt="Clipchain" className="h-9 w-9" />
            <span className="font-display text-xl font-bold text-foreground">clipchain</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#" className="btn-ghost text-sm">
              Whitepaper
            </a>
            <a href="#" className="btn-primary text-sm">
              Launch App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                <a href="#" className="btn-secondary text-sm">
                  Whitepaper
                </a>
                <a href="#" className="btn-primary text-sm">
                  Launch App
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
