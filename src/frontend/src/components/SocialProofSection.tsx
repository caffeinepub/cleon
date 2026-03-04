import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 12847, suffix: "+", label: "Semnale Livrate" },
  { end: 3200, suffix: "+", label: "Traderi Activi" },
  { end: 78, suffix: "%", label: "Rată de Succes" },
];

const testimonials = [
  {
    name: "Alexandru M.",
    initials: "AM",
    role: "Trader independent",
    text: "Am început cu CLEON acum 3 luni și am reușit să-mi cresc portofoliul cu 34%. Semnalele sunt extrem de precise!",
    rating: 5,
    plan: "PRO",
  },
  {
    name: "Maria P.",
    initials: "MP",
    role: "Crypto investor",
    text: "Cel mai bun serviciu de semnale pe care l-am folosit. Setup-urile sunt clare și ușor de urmărit, chiar și pentru un începător.",
    rating: 5,
    plan: "PRO",
  },
  {
    name: "Bogdan T.",
    initials: "BT",
    role: "Full-time trader",
    text: "ULTRA planul merită fiecare leu. Analizele exclusive m-au ajutat să evit mai multe pierderi majore și să fiu mereu cu un pas înaintea pieței.",
    rating: 5,
    plan: "ULTRA",
  },
];

function useCountUp(end: number, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return count;
}

function StatCounter({
  end,
  suffix,
  label,
}: { end: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(end, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const display =
    end >= 1000
      ? count.toLocaleString("ro-RO").replace(/\./g, ",")
      : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-5xl sm:text-6xl font-display font-bold tabular-nums"
        style={{
          color: "oklch(var(--gold))",
          textShadow: "0 0 25px oklch(var(--gold) / 0.4)",
        }}
      >
        {display}
        {suffix}
      </div>
      <div className="mt-3 text-xs text-[oklch(var(--muted-foreground))] font-semibold tracking-[0.15em] uppercase">
        {label}
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="py-24 relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-0 mb-20 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid oklch(var(--navy-border))",
            background: "oklch(var(--card))",
            boxShadow:
              "0 4px 40px oklch(0 0 0 / 0.3), inset 0 1px 0 oklch(1 0 0 / 0.04)",
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className="relative py-10 px-6"
              style={{
                borderRight:
                  idx < stats.length - 1
                    ? "1px solid oklch(var(--navy-border))"
                    : "none",
              }}
            >
              {/* Subtle top accent on first */}
              {idx === 1 && (
                <div
                  className="absolute top-0 inset-x-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(var(--gold) / 0.4), transparent)",
                  }}
                />
              )}
              <StatCounter end={s.end} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-16"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(var(--navy-border)), transparent)",
          }}
        />

        {/* Section label */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            Ce Spun <span className="text-gold">Utilizatorii Noștri</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "oklch(var(--card))",
                borderColor: "oklch(var(--navy-border))",
                boxShadow: "0 4px 20px oklch(0 0 0 / 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "oklch(0.84 0.155 85 / 0.3)";
                e.currentTarget.style.boxShadow =
                  "0 8px 40px oklch(0 0 0 / 0.4), 0 0 20px oklch(0.84 0.155 85 / 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "oklch(var(--navy-border))";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px oklch(0 0 0 / 0.25)";
              }}
            >
              {/* Top sheen */}
              <div
                className="absolute inset-x-6 top-0 h-px rounded-full opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.08), transparent)",
                }}
              />
              {/* Plan badge */}
              <div
                className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
                style={{
                  background:
                    t.plan === "ULTRA"
                      ? "oklch(0.84 0.155 85 / 0.12)"
                      : "oklch(0.72 0.19 210 / 0.12)",
                  color:
                    t.plan === "ULTRA"
                      ? "oklch(var(--gold))"
                      : "oklch(var(--cyan))",
                  border: `1px solid ${
                    t.plan === "ULTRA"
                      ? "oklch(0.84 0.155 85 / 0.3)"
                      : "oklch(0.72 0.19 210 / 0.3)"
                  }`,
                }}
              >
                {t.plan}
              </div>

              {/* Stars */}
              <div
                className="flex gap-1"
                aria-label={`${t.rating} din 5 stele`}
              >
                <Star className="h-4 w-4 fill-current text-gold" />
                <Star className="h-4 w-4 fill-current text-gold" />
                <Star className="h-4 w-4 fill-current text-gold" />
                <Star className="h-4 w-4 fill-current text-gold" />
                <Star className="h-4 w-4 fill-current text-gold" />
              </div>

              {/* Quote */}
              <p className="text-sm text-[oklch(var(--muted-foreground))] leading-relaxed italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[oklch(var(--navy-border))]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: "oklch(0.84 0.155 85 / 0.12)",
                    color: "oklch(var(--gold))",
                    border: "1px solid oklch(0.84 0.155 85 / 0.2)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-[oklch(var(--muted-foreground))]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
