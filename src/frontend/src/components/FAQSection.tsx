import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: { question: string; answer: string }[] = [
  {
    question: "Ce sunt semnalele de tranzacționare?",
    answer:
      "Semnalele de tranzacționare sunt recomandări de cumpărare sau vânzare pentru o criptomonedă specifică, incluzând punctul de intrare, stop-loss și take-profit. Ele sunt generate de analiști experți și algoritmi avansați.",
  },
  {
    question: "Cât de precise sunt semnalele CLEON?",
    answer:
      "Rata noastră de succes se menține constant peste 78%, bazată pe analiza a peste 12,000 de semnale livrate. Fiecare semnal este verificat de echipa noastră înainte de a fi trimis.",
  },
  {
    question: "Pot anula abonamentul oricând?",
    answer:
      "Da, poți anula abonamentul în orice moment, fără penalizări. Accesul rămâne activ până la sfârșitul perioadei plătite, iar noi nu percepem taxe de anulare.",
  },
  {
    question: "Am nevoie de experiență anterioară?",
    answer:
      "Nu! CLEON este conceput atât pentru începători cât și pentru traderi experimentați. Fiecare semnal vine cu instrucțiuni clare despre cum să îl urmărești, indiferent de nivelul tău de experiență.",
  },
  {
    question: "Pe ce exchange-uri funcționează semnalele?",
    answer:
      "Semnalele CLEON sunt compatibile cu cele mai populare exchange-uri: Binance, Bybit, OKX și Coinbase. Instrucțiunile sunt adaptate pentru fiecare platformă în parte.",
  },
  {
    question: "Cum primesc semnalele?",
    answer:
      "Semnalele sunt livrate instant prin canalul nostru privat de Telegram și prin email, imediat ce sunt generate. Abonații PRO și ULTRA primesc alertele cu prioritate față de ceilalți.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold tracking-tight text-foreground">
            Întrebări <span className="text-gold">Frecvente</span>
          </h2>
          <p className="mt-4 text-[oklch(var(--muted-foreground))] text-lg">
            Tot ce trebuie să știi despre CLEON
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i + 1}`}
              data-ocid={`faq.item.${i + 1}`}
              className="rounded-xl border overflow-hidden"
              style={{
                background: "oklch(var(--card))",
                borderColor: "oklch(var(--navy-border))",
              }}
            >
              <AccordionTrigger className="px-6 py-5 text-left font-display font-semibold text-foreground hover:text-gold hover:no-underline text-sm sm:text-base transition-colors">
                <span className="flex items-start gap-3">
                  <span
                    className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "oklch(0.84 0.155 85 / 0.1)",
                      color: "oklch(var(--gold))",
                    }}
                  >
                    {i + 1}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <div className="pl-8">
                  <p className="text-sm text-[oklch(var(--muted-foreground))] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
