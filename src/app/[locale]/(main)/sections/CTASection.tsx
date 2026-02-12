'use client'

import { ArrowRight, Zap, Clock, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function CTASection() {
  const t = useTranslations()

  const benefits = [
    { icon: Zap, labelKey: "cta.benefits.fast" },
    { icon: Shield, labelKey: "cta.benefits.secure" },
    { icon: Clock, labelKey: "cta.benefits.onTime" },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative group">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl border border-primary/30 p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />
              
              {/* Floating sparkles */}
              <Sparkles className="absolute top-8 right-8 w-6 h-6 text-primary/40 animate-pulse" />
              <Sparkles className="absolute bottom-12 left-12 w-4 h-4 text-secondary/40 animate-pulse" style={{ animationDelay: "0.5s" }} />

              <div className="text-center relative z-10">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  {t("cta.badge")}
                </span>

                {/* Headline */}
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                  {t("cta.title")}
                  <span className="block text-primary mt-2">{t("cta.titleHighlight")}</span>
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  {t("cta.description")}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm md:text-base">{t(benefit.labelKey)}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="xl"
                    variant="glow"
                    className="group/btn"
                    asChild
                  >
                    <Link href="/contact">
                      {t("cta.primaryButton")}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="xl"
                    variant="heroOutline"
                    asChild
                  >
                    <Link href="/projects">
                      {t("cta.secondaryButton")}
                    </Link>
                  </Button>
                </div>

                {/* Trust indicator */}
                <p className="mt-8 text-sm text-muted-foreground">
                  {t("cta.trustIndicator")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
