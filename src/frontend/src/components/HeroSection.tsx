import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import CandlestickChart from "./CandlestickChart";

const signalCards = [
  {
    pair: "BTC/USDT",
    type: "BUY",
    isBuy: true,
    change: "+4.2%",
    entry: "42,150",
    sl: "41,200",
    tp: "44,800",
    delay: "0s",
  },
  {
    pair: "ETH/USDT",
    type: "SELL",
    isBuy: false,
    change: "-2.1%",
    entry: "2,640",
    sl: "2,710",
    tp: "2,450",
    delay: "0.3s",
  },
  {
    pair: "SOL/USDT",
    type: "BUY",
    isBuy: true,
    change: "+7.8%",
    entry: "98.40",
    sl: "94.00",
    tp: "108.00",
    delay: "0.6s",
  },
];

export default function HeroSection() {
  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 hero-gradient" />

      {/* Radial atmospherics */}
      <div
        className="absolute right-[-10%] top-1/3 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 210 / 0.12) 0%, oklch(0.72 0.19 210 / 0.04) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-[-5%] bottom-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.84 0.155 85 / 0.1) 0%, oklch(0.84 0.155 85 / 0.03) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-1/3 top-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.84 0.155 85 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  background: "oklch(0.84 0.155 85 / 0.08)",
                  borderColor: "oklch(0.84 0.155 85 / 0.3)",
                  color: "oklch(var(--gold))",
                }}
              >
                <span className="animate-pulse-gold">🚀</span>
                Semnale Crypto în Timp Real
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-display font-bold leading-[1.05] tracking-tight text-foreground">
                Tranzacționează <br className="hidden sm:block" />
                <span className="text-gold glow-gold-text">Cu Încredere</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[oklch(var(--muted-foreground))] leading-relaxed max-w-lg">
              Semnale buy/sell cu intrare, TP și SL. Analiză AI a pieței pe
              limba ta. Știri cu scor de sentiment. Watchlist, alerte și
              portofoliu conectat la Binance, OKX, BingX, Bitget și MEXC.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                className="bg-gold text-[oklch(var(--navy-deep))] font-bold hover:bg-gold-bright glow-gold transition-all duration-200 text-base px-8 h-12"
                onClick={() => {
                  document
                    .getElementById("planuri")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Începe Gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                data-ocid="hero.secondary_button"
                size="lg"
                variant="outline"
                className="border-[oklch(var(--navy-border))] text-foreground hover:bg-[oklch(var(--navy-light))] hover:border-[oklch(var(--gold)/0.4)] text-base px-8 h-12 transition-all duration-200"
                onClick={() => {
                  document
                    .getElementById("planuri")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Vezi Planuri
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { num: "12,847+", label: "Semnale livrate" },
                { num: "3,200+", label: "Traderi activi" },
                { num: "78%", label: "Rată succes" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-xl font-display font-bold text-gold">
                    {stat.num}
                  </span>
                  <span className="text-sm text-[oklch(var(--muted-foreground))]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: chart + floating signal cards */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Chart card */}
            <div
              className="relative w-full max-w-lg rounded-2xl border overflow-hidden"
              style={{
                background: "oklch(0.13 0.028 255)",
                borderColor: "oklch(0.72 0.19 210 / 0.25)",
                boxShadow:
                  "0 0 40px oklch(0.72 0.19 210 / 0.1), 0 20px 60px oklch(0 0 0 / 0.5)",
              }}
            >
              {/* Chart header */}
              <div className="flex items-center justify-between px-5 pt-4 pb-2">
                <div>
                  <span className="text-sm font-semibold text-foreground">
                    BTC/USDT
                  </span>
                  <span className="ml-2 text-xs text-[oklch(var(--muted-foreground))]">
                    4H
                  </span>
                </div>
                <Badge
                  className="text-xs font-bold"
                  style={{
                    background: "oklch(0.72 0.19 210 / 0.15)",
                    color: "oklch(var(--cyan))",
                    border: "1px solid oklch(0.72 0.19 210 / 0.3)",
                  }}
                >
                  +4.2%
                </Badge>
              </div>
              <div className="px-2 pb-4">
                <CandlestickChart />
              </div>
            </div>

            {/* Floating signal cards */}
            {signalCards.map((card, i) => (
              <div
                key={card.pair}
                className={`absolute rounded-xl border p-3 shadow-card-dark ${
                  i === 0
                    ? "-left-6 top-8 animate-float"
                    : i === 1
                      ? "-right-4 top-1/2 animate-float-delay"
                      : "-left-4 bottom-8 animate-float"
                }`}
                style={{
                  background: "oklch(var(--navy-mid))",
                  borderColor: card.isBuy
                    ? "oklch(0.72 0.19 210 / 0.4)"
                    : "oklch(0.65 0.22 25 / 0.4)",
                  animationDelay: card.delay,
                  minWidth: 160,
                  zIndex: 10,
                }}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-foreground font-mono">
                    {card.pair}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                      card.isBuy
                        ? "bg-[oklch(0.72 0.19 210 / 0.15)] text-cyan-cleon"
                        : "bg-[oklch(0.65 0.22 25 / 0.15)] text-sell-red"
                    }`}
                  >
                    {card.isBuy ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {card.type}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs gap-4">
                    <span className="text-[oklch(var(--muted-foreground))]">
                      Entry
                    </span>
                    <span className="font-mono font-medium text-foreground">
                      ${card.entry}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs gap-4">
                    <span className="text-[oklch(var(--muted-foreground))]">
                      SL
                    </span>
                    <span className="font-mono text-sell-red">${card.sl}</span>
                  </div>
                  <div className="flex justify-between text-xs gap-4">
                    <span className="text-[oklch(var(--muted-foreground))]">
                      TP
                    </span>
                    <span className="font-mono text-cyan-cleon">
                      ${card.tp}
                    </span>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-[oklch(var(--navy-border))]">
                  <span
                    className={`text-xs font-bold ${
                      card.isBuy ? "text-cyan-cleon" : "text-sell-red"
                    }`}
                  >
                    {card.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(var(--background)))",
        }}
      />
    </section>
  );
}
