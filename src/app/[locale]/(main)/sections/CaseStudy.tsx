"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Code2, BarChart3 } from "lucide-react"
import Image from "next/image"
import { ClientLogos } from "./ClientLogos"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"

const logos = [
  <Image key={1} src="/clients/davila.png" width={120} height={80} alt="Davila" className="w-8/12 aspect-[4/3] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300" />,
  <Image key={2}  src="/clients/etahub.svg" width={120} height={80} alt="eTA Hub" className="w-8/12 aspect-[4/3] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300" />,
  <Image key={3}  src="/clients/flytop.svg" width={120} height={80} alt="Flytop" className="w-8/12 aspect-[4/3] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300" />,
  <Image key={4}  src="/clients/mbaeachusp.png" width={120} height={80} alt="MBA Each USP" className="w-8/12 aspect-[4/3] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300" />,
  <Image key={5}  src="/clients/panasonic.svg" width={120} height={80} alt="Panasonic" className="w-8/12 aspect-[4/3] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300" />,
  <Image key={6}  src="/clients/wehub.png" width={120} height={80} alt="We Hub" className="w-8/12 aspect-[4/3] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300" />
]

const caseStudies = [
  {
    company: "Panasonic",
    problem: "panasonic.problem",
    solution: "panasonic.solution",
    result: "panasonic.result",
    resultMetrics: [
      { label: "panasonic.metric1.label", value: "panasonic.metric1.value" },
      { label: "panasonic.metric2.label", value: "panasonic.metric2.value" },
      { label: "panasonic.metric3.label", value: "panasonic.metric3.value" }
    ],
    color: "#0041C0",
  },
  {
    company: "FlyTop",
    problem: "flytop.problem",
    solution: "flytop.solution",
    result: "flytop.result",
    resultMetrics: [
      { label: "flytop.metric1.label", value: "flytop.metric1.value" },
      { label: "flytop.metric2.label", value: "flytop.metric2.value" },
      { label: "flytop.metric3.label", value: "flytop.metric3.value" }
    ],
    color: "#F26101",
  },
  {
    company: "Grupo WeHub",
    problem: "wehub.problem",
    solution: "wehub.solution",
    result: "wehub.result",
    resultMetrics: [
      { label: "wehub.metric1.label", value: "wehub.metric1.value" },
      { label: "wehub.metric2.label", value: "wehub.metric2.value" },
      { label: "wehub.metric3.label", value: "wehub.metric3.value" }
    ],
    color: "#FAD022",
  }
]

export function CaseStudy() {
  const t = useTranslations("casestudy")

  return (
    <section className="w-full pt-16 md:pt-24 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 uppercase">
            {t("hero.title1")}<span className="text-primary">{t("hero.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Logos Grid - Desktop */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 mb-16 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="group cursor-pointer transition-all duration-300">
              <div className="p-6 flex items-center justify-center bg-muted/50 rounded-lg border border-border/50 group-hover:border-border transition-all">
                {logo}
              </div>
            </div>
          ))}
        </div>

        {/* Logos Carousel - Mobile */}
        <ClientLogos logos={logos} />


        {/* Case Studies Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="p-6 group relative overflow-hidden border border-primary/50 transition-all duration-300 shadow-[0_0_30px_hsl(85_90%_64%/0.1)] hover:-translate-y-1 "
              >
                {/* Company name */}
                <div className="flex items-center gap-2 mb-6 mt-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: study.color }}
                  >
                    {study.company.charAt(0)}
                  </div>
                  <h4 className="font-bold text-foreground">{study.company}</h4>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {t("labels.problem")}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{t(study.problem)}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {t("labels.solution")}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{t(study.solution)}</p>
                </div>

                {/* Result Highlight */}
                <div className="mb-4 p-4 rounded-lg text-center bg-accent/5" >
                  <BarChart3 className="size-5 mx-auto mb-2 text-accent" />
                  <p className="font-bold text-lg text-primary">
                    {t(study.result)}
                  </p>
                </div>

                {/* Result Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/50">
                  {study.resultMetrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-foreground">{t(metric.value)}</div>
                      <div className="text-xs text-muted-foreground leading-tight">{t(metric.label)}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8 h-12 hover:scale-105 transition-transform shadow-lg">
              {t("cta.button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
