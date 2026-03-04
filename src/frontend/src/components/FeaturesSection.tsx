import {
  BarChart2,
  BookOpen,
  Brain,
  Newspaper,
  Star,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: BarChart2,
    tag: "SEMNALE",
    title: "Semnale Buy & Sell",
    description:
      "Semnale clare cu punct de intrare precis, niveluri de Take Profit și Stop Loss. Fiecare setup include contextul tehnic, astfel știi exact ce faci și de ce.",
    color: "cyan",
    detail: ["Entry Price", "Take Profit", "Stop Loss"],
  },
  {
    icon: BookOpen,
    tag: "SETUP-URI",
    title: "Setup-uri de Tranzacționare",
    description:
      "Analize complete cu grafice, niveluri cheie de suport și rezistență. Fiecare setup este explicat pas cu pas, indiferent de nivelul tău de experiență.",
    color: "gold",
    detail: ["Grafice detaliate", "Suport & Rezistență", "Plan de tranzacție"],
  },
  {
    icon: Brain,
    tag: "ANALIZĂ AI",
    title: "Analiză AI a Monedei",
    description:
      "Inteligența artificială analizează fiecare monedă și îți prezintă situația actuală a pieței pe limba ta. Înțelegi ce se întâmplă chiar dacă nu ești un expert tehnic.",
    color: "cyan",
    detail: ["Explicații simple", "Context de piață", "Recomandări clare"],
  },
  {
    icon: Newspaper,
    tag: "ȘTIRI & SENTIMENT",
    title: "Știri Analizate cu AI",
    description:
      "Principalele știri ale momentului sunt procesate automat de AI, care calculează un scor de sentiment al pieței. Știi în timp real dacă piața este optimistă sau pesimistă.",
    color: "gold",
    detail: ["Scor sentiment", "Știri filtrate", "Impact pe piață"],
  },
  {
    icon: Star,
    tag: "WATCHLIST",
    title: "Watchlist Personalizat",
    description:
      "Urmărești monedele care te interesează într-un singur loc. Prețuri live, variații și alerte instant când o monedă din watchlist atinge un nivel important.",
    color: "cyan",
    detail: ["Prețuri live", "Alerte instant", "Variații în timp real"],
  },
  {
    icon: Wallet,
    tag: "PORTOFOLIU",
    title: "Portofoliu Conectat prin API",
    description:
      "Conectezi contul tău de exchange prin API și vezi toate pozițiile tale într-un singur dashboard. Suportăm Binance, OKX, BingX, Bitget și MEXC.",
    color: "gold",
    detail: ["5 exchange-uri", "Date în timp real", "Dashboard unificat"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="functionalitati" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--gold)/0.3), transparent)",
        }}
      />
      {/* Atmospheric glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.72 0.19 210 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: "oklch(0.84 0.155 85 / 0.08)",
              border: "1px solid oklch(0.84 0.155 85 / 0.25)",
              color: "oklch(var(--gold))",
            }}
          >
            Funcționalități complete
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold tracking-tight text-foreground">
            Tot Ce Ai Nevoie{" "}
            <span className="text-gold">Într-o Singură Platformă</span>
          </h2>
          <p className="mt-4 text-[oklch(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
            De la semnale precise la analiza AI a pieței -- CLEON îți oferă
            toate instrumentele pentru decizii mai bune de tranzacționare.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            const isCyan = f.color === "cyan";
            return (
              <div
                key={f.title}
                data-ocid="features.card"
                className="group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 cursor-default flex flex-col"
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--navy-border))",
                  boxShadow: "0 4px 20px oklch(0 0 0 / 0.2)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = isCyan
                    ? "oklch(0.72 0.19 210 / 0.4)"
                    : "oklch(0.84 0.155 85 / 0.4)";
                  el.style.boxShadow = isCyan
                    ? "0 12px 40px oklch(0 0 0 / 0.35), 0 0 20px oklch(0.72 0.19 210 / 0.08)"
                    : "0 12px 40px oklch(0 0 0 / 0.35), 0 0 20px oklch(0.84 0.155 85 / 0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "oklch(var(--navy-border))";
                  el.style.boxShadow = "0 4px 20px oklch(0 0 0 / 0.2)";
                }}
              >
                {/* Inner top-light sheen */}
                <div
                  className="absolute inset-x-4 top-0 h-px rounded-full opacity-50"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.07), transparent)",
                  }}
                />

                {/* Tag + Icon row */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-md"
                    style={{
                      background: isCyan
                        ? "oklch(0.72 0.19 210 / 0.1)"
                        : "oklch(0.84 0.155 85 / 0.1)",
                      color: isCyan
                        ? "oklch(var(--cyan))"
                        : "oklch(var(--gold))",
                    }}
                  >
                    {f.tag}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: isCyan
                        ? "oklch(0.72 0.19 210 / 0.1)"
                        : "oklch(0.84 0.155 85 / 0.1)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{
                        color: isCyan
                          ? "oklch(var(--cyan))"
                          : "oklch(var(--gold))",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-display font-semibold text-foreground mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-[oklch(var(--muted-foreground))] leading-relaxed flex-1">
                  {f.description}
                </p>

                {/* Detail pills */}
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-[oklch(var(--navy-border))]">
                  {f.detail.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "oklch(var(--navy-light))",
                        color: "oklch(var(--muted-foreground))",
                        border: "1px solid oklch(var(--navy-border))",
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isCyan
                      ? "linear-gradient(90deg, transparent, oklch(var(--cyan)), transparent)"
                      : "linear-gradient(90deg, transparent, oklch(var(--gold)), transparent)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
