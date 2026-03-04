const exchanges = [
  {
    name: "Binance",
    logo: "B",
    color: "#F0B90B",
    volume: "#1 Mondial",
    desc: "Cel mai mare exchange din lume",
  },
  {
    name: "OKX",
    logo: "O",
    color: "#FFFFFF",
    volume: "Top 3 Global",
    desc: "Exchange de top cu lichiditate ridicată",
  },
  {
    name: "BingX",
    logo: "BX",
    color: "#2C9CDB",
    volume: "Exchange în creștere",
    desc: "Copy trading și futures avansate",
  },
  {
    name: "Bitget",
    logo: "BG",
    color: "#00F0FF",
    volume: "Top 5 Global",
    desc: "Lider în copy trading",
  },
  {
    name: "MEXC",
    logo: "M",
    color: "#2354E6",
    volume: "500+ perechi",
    desc: "Cea mai mare varietate de altcoin-uri",
  },
];

export default function ExchangesSection() {
  return (
    <section id="exchange-uri" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(var(--background)) 0%, oklch(var(--navy-mid)) 50%, oklch(var(--background)) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--navy-border)), transparent)",
        }}
      />
      {/* Atmospheric glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.84 0.155 85 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{
                background: "oklch(0.84 0.155 85 / 0.08)",
                border: "1px solid oklch(0.84 0.155 85 / 0.25)",
                color: "oklch(var(--gold))",
              }}
            >
              Integrare API
            </span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
              Portofoliu Conectat{" "}
              <span className="text-gold">La Exchange-urile Tale</span>
            </h2>
            <p className="text-lg text-[oklch(var(--muted-foreground))] leading-relaxed mb-8">
              Conectezi contul tău prin API în câteva secunde și vezi toate
              pozițiile, balanța și profitul/pierderea în timp real. Un singur
              dashboard pentru toate exchange-urile tale.
            </p>

            {/* Feature list */}
            <ul className="space-y-4">
              {[
                "Conexiune securizată prin API (read-only)",
                "Balanță și poziții deschise în timp real",
                "Istoricul tranzacțiilor și performanța",
                "Suport pentru 5 exchange-uri majore",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style={{
                      background: "oklch(0.84 0.155 85 / 0.15)",
                      boxShadow: "0 0 8px oklch(var(--gold) / 0.2)",
                    }}
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="oklch(0.84 0.155 85)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: exchange cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exchanges.map((ex, i) => (
              <div
                key={ex.name}
                data-ocid="exchanges.card"
                className={`group relative rounded-2xl border p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 ${
                  i === 4 ? "sm:col-span-2" : ""
                }`}
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--navy-border))",
                  boxShadow: "0 4px 20px oklch(0 0 0 / 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.84 0.155 85 / 0.35)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px oklch(0 0 0 / 0.35), 0 0 15px oklch(0.84 0.155 85 / 0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(var(--navy-border))";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px oklch(0 0 0 / 0.2)";
                }}
              >
                {/* Exchange logo placeholder */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
                  style={{
                    background: "oklch(0.14 0.03 255)",
                    border: "1px solid oklch(var(--navy-border))",
                    color: ex.color,
                    fontFamily: "monospace",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {ex.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-display font-bold text-foreground text-sm">
                      {ex.name}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "oklch(0.72 0.19 210 / 0.1)",
                        color: "oklch(var(--cyan))",
                        border: "1px solid oklch(0.72 0.19 210 / 0.2)",
                      }}
                    >
                      {ex.volume}
                    </span>
                  </div>
                  <p className="text-xs text-[oklch(var(--muted-foreground))] truncate">
                    {ex.desc}
                  </p>
                </div>
                {/* Connection indicator */}
                <div className="shrink-0 flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse-gold"
                    style={{ background: "oklch(0.72 0.19 210)" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "oklch(var(--cyan))" }}
                  >
                    API
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
