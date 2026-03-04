import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  badge?: string;
  highlighted: boolean;
  dataOcid: string;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "FREE",
    price: "0",
    period: "RON/lună",
    description: "Descoperă platforma fără niciun cost",
    features: [
      { text: "Semnale buy/sell limitate", included: true },
      { text: "Analiză AI de bază", included: true },
      { text: "Watchlist până la 5 monede", included: true },
      { text: "Setup-uri de tranzacționare", included: false },
      { text: "Știri analizate cu AI + sentiment", included: false },
      { text: "Portofoliu conectat prin API", included: false },
      { text: "Alerte instant", included: false },
    ],
    cta: "Începe Gratuit",
    highlighted: false,
    dataOcid: "pricing.free.button",
  },
  {
    id: "pro",
    name: "PRO",
    price: "99",
    period: "RON/lună",
    description: "Ales de traderii activi care vor mai mult",
    features: [
      { text: "Semnale buy/sell nelimitate", included: true },
      { text: "Setup-uri cu intrare, TP și SL", included: true },
      { text: "Analiză AI completă per monedă", included: true },
      { text: "Știri + scor sentiment piață", included: true },
      { text: "Watchlist nelimitat + alerte instant", included: true },
      { text: "Portofoliu API (Binance, OKX, BingX)", included: true },
      { text: "Portofoliu Bitget & MEXC", included: false },
    ],
    cta: "Alege PRO",
    badge: "Recomandat",
    highlighted: true,
    dataOcid: "pricing.pro.button",
  },
  {
    id: "ultra",
    name: "ULTRA",
    price: "249",
    period: "RON/lună",
    description: "Acces complet pentru traderii serioși",
    features: [
      { text: "Tot ce include PRO", included: true },
      { text: "Portofoliu API toate 5 exchange-uri", included: true },
      { text: "Semnale prioritare (primii în alertă)", included: true },
      { text: "Rapoarte lunare de performanță", included: true },
      { text: "Suport dedicat 24/7", included: true },
      { text: "Acces beta la funcții noi", included: true },
      { text: "Sesiuni de analiză 1-on-1", included: true },
    ],
    cta: "Alege ULTRA",
    highlighted: false,
    dataOcid: "pricing.ultra.button",
  },
];

export default function PricingSection() {
  return (
    <section id="planuri" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--gold)/0.3), transparent)",
        }}
      />

      {/* Gold radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.84 0.155 85 / 0.04) 0%, transparent 70%)",
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
            Planuri și prețuri
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold tracking-tight text-foreground">
            Alege Planul <span className="text-gold">Potrivit Ție</span>
          </h2>
          <p className="mt-4 text-[oklch(var(--muted-foreground))] text-lg max-w-xl mx-auto">
            Fără contracte pe termen lung. Anulează oricând, fără penalizări.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              data-ocid="pricing.card"
              className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                plan.highlighted ? "sm:-mt-6 sm:mb-2" : ""
              }`}
              style={
                plan.highlighted
                  ? {
                      background:
                        "linear-gradient(160deg, oklch(0.17 0.038 78 / 0.85) 0%, oklch(0.145 0.03 255) 55%, oklch(0.12 0.025 255) 100%)",
                      border: "1px solid oklch(var(--gold) / 0.65)",
                      boxShadow:
                        "0 0 0 1px oklch(var(--gold) / 0.15), 0 0 40px oklch(var(--gold) / 0.22), 0 0 90px oklch(var(--gold) / 0.08), 0 24px 80px oklch(0 0 0 / 0.55)",
                    }
                  : {
                      background: "oklch(var(--card))",
                      border: "1px solid oklch(var(--navy-border))",
                      boxShadow: "0 4px 20px oklch(0 0 0 / 0.3)",
                    }
              }
            >
              {/* Inner top-light sheen for PRO */}
              {plan.highlighted && (
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 5%, oklch(var(--gold) / 0.8) 50%, transparent 95%)",
                  }}
                />
              )}

              {/* Recommended badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span
                    className="shimmer-badge inline-flex items-center gap-1.5 text-xs font-bold px-5 py-1.5 rounded-full tracking-wider"
                    style={{
                      color: "oklch(0.1 0.02 80)",
                      boxShadow: "0 2px 12px oklch(var(--gold) / 0.5)",
                    }}
                  >
                    ⭐ {plan.badge}
                  </span>
                </div>
              )}

              <div className={`p-7 ${plan.highlighted ? "pt-10" : ""}`}>
                {/* Plan name */}
                <div className="mb-6">
                  <span
                    className="text-xs font-bold tracking-[0.2em] uppercase"
                    style={{
                      color: plan.highlighted
                        ? "oklch(var(--gold))"
                        : "oklch(var(--muted-foreground))",
                    }}
                  >
                    {plan.name}
                  </span>
                  <div className="mt-3 flex items-end gap-1.5">
                    <span
                      className={`font-display font-bold text-foreground ${
                        plan.highlighted ? "text-6xl" : "text-4xl"
                      }`}
                      style={
                        plan.highlighted
                          ? {
                              textShadow: "0 0 30px oklch(var(--gold) / 0.3)",
                              color: "oklch(0.97 0.05 85)",
                            }
                          : {}
                      }
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm text-[oklch(var(--muted-foreground))] pb-2">
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: plan.highlighted
                        ? "oklch(0.75 0.04 85)"
                        : "oklch(var(--muted-foreground))",
                    }}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-6"
                  style={{
                    background: plan.highlighted
                      ? "linear-gradient(90deg, transparent, oklch(var(--gold) / 0.3), transparent)"
                      : "oklch(var(--navy-border))",
                  }}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: feature.included
                            ? plan.highlighted
                              ? "oklch(0.84 0.155 85 / 0.18)"
                              : "oklch(0.72 0.19 210 / 0.1)"
                            : "oklch(var(--navy-light))",
                          boxShadow:
                            feature.included && plan.highlighted
                              ? "0 0 8px oklch(var(--gold) / 0.2)"
                              : "none",
                        }}
                      >
                        {feature.included ? (
                          <Check
                            className="h-3 w-3"
                            style={{
                              color: plan.highlighted
                                ? "oklch(var(--gold))"
                                : "oklch(var(--cyan))",
                            }}
                          />
                        ) : (
                          <X className="h-3 w-3 text-[oklch(var(--muted-foreground))]" />
                        )}
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          color: feature.included
                            ? plan.highlighted
                              ? "oklch(0.9 0.02 85)"
                              : "oklch(var(--foreground))"
                            : "oklch(var(--muted-foreground))",
                        }}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  data-ocid={plan.dataOcid}
                  className={`w-full font-bold transition-all duration-200 ${
                    plan.highlighted ? "h-13 text-base py-3.5" : "h-11"
                  }`}
                  style={
                    plan.highlighted
                      ? {
                          background:
                            "linear-gradient(135deg, oklch(var(--gold-bright)) 0%, oklch(var(--gold)) 100%)",
                          color: "oklch(0.08 0.02 80)",
                          boxShadow:
                            "0 4px 20px oklch(var(--gold) / 0.45), 0 0 40px oklch(var(--gold) / 0.15)",
                          border: "none",
                        }
                      : {
                          background: "transparent",
                          color: "oklch(var(--foreground))",
                          border: "1px solid oklch(var(--navy-border))",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "oklch(0.84 0.155 85 / 0.45)";
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "oklch(var(--navy-light))";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "oklch(var(--navy-border))";
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                    }
                  }}
                  variant="default"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-sm text-[oklch(var(--muted-foreground))]">
          Toate prețurile sunt fără TVA. Poți anula oricând, fără penalizări.
        </p>
      </div>
    </section>
  );
}
