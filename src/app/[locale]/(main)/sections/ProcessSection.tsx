import { useTranslations } from "next-intl";
import { MessageSquare, FileText, Code, Rocket } from "lucide-react";

export function ProcessSection() {
  const t = useTranslations();

  const steps = [
    { number: "01", titleKey: "process.steps.briefing.title", descriptionKey: "process.steps.briefing.description", icon: MessageSquare },
    { number: "02", titleKey: "process.steps.proposal.title", descriptionKey: "process.steps.proposal.description", icon: FileText },
    { number: "03", titleKey: "process.steps.development.title", descriptionKey: "process.steps.development.description", icon: Code },
    { number: "04", titleKey: "process.steps.delivery.title", descriptionKey: "process.steps.delivery.description", icon: Rocket },
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("process.badge")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {t("process.title")} <span className="text-primary">{t("process.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("process.description")}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative lg:flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-16" : "lg:pl-16"}`}>
                    <div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(85_90%_64%/0.1)]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_30px_hsl(85_90%_64%/0.4)] transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="flex-1">
                          <span className="font-display text-5xl text-primary/20 absolute -top-2 right-4 lg:hidden">
                            {step.number}
                          </span>
                          <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                            {t(step.titleKey)}
                          </h3>
                          <p className="text-muted-foreground">
                            {t(step.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center shadow-[0_0_20px_hsl(85_90%_64%/0.4)]">
                    <span className="font-display text-sm text-primary">{step.number}</span>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
