'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import {
  Globe,
  ShoppingCart,
  Rocket,
  Settings,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Search,
  BarChart3,
  Palette,
  Code2,
  RefreshCw,
  Headphones,
} from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function Services() {
  const t = useTranslations()

  const services = [
    {
      id: "website",
      icon: Globe,
      gradient: "from-primary/20 to-teal-500/20",
      borderGlow: "group-hover:shadow-[0_0_40px_rgba(166,247,80,0.3)]",
      features: [
        { icon: Search, key: "seo" },
        { icon: Zap, key: "speed" },
        { icon: Palette, key: "design" },
        { icon: Shield, key: "security" },
      ],
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderGlow: "group-hover:shadow-[0_0_40px_rgba(0,92,83,0.4)]",
      features: [
        { icon: ShoppingCart, key: "cart" },
        { icon: BarChart3, key: "analytics" },
        { icon: Shield, key: "payments" },
        { icon: TrendingUp, key: "conversion" },
      ],
    },
    {
      id: "landing",
      icon: Rocket,
      gradient: "from-primary/20 to-yellow-500/20",
      borderGlow: "group-hover:shadow-[0_0_40px_rgba(166,247,80,0.3)]",
      features: [
        { icon: Zap, key: "fast" },
        { icon: TrendingUp, key: "conversion" },
        { icon: Code2, key: "optimized" },
        { icon: Sparkles, key: "animations" },
      ],
    },
    {
      id: "maintenance",
      icon: Settings,
      gradient: "from-cyan-500/20 to-primary/20",
      borderGlow: "group-hover:shadow-[0_0_40px_rgba(0,92,83,0.4)]",
      features: [
        { icon: RefreshCw, key: "updates" },
        { icon: Shield, key: "security" },
        { icon: Headphones, key: "support" },
        { icon: BarChart3, key: "monitoring" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("services.badge")}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
              {t("services.title")}{" "}
              <span className="text-primary text-glow">
                {t("services.titleHighlight")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center`}
              >
                {/* Icon/Visual Side */}
                <div className="flex-1 w-full">
                  <div
                    className={`group relative bg-gradient-to-br ${service.gradient} border border-border rounded-3xl p-12 transition-all duration-500 ${service.borderGlow}`}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-teal-500/5 rounded-full blur-xl group-hover:bg-teal-500/10 transition-all" />

                    <div className="relative flex items-center justify-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                      </div>
                    </div>

                    {/* Feature Icons Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-border/50"
                        >
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {t(`services.${service.id}.features.${feature.key}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full">
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    {t(`services.${service.id}.label`)}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 mb-6">
                    {t(`services.${service.id}.title`)}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {t(`services.${service.id}.description`)}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-4 mb-8">
                    {[1, 2, 3].map((num) => (
                      <li key={num} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">
                          {t(`services.${service.id}.benefits.b${num}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="glow" size="lg" asChild>
                    <Link href="/contact">
                      {t("services.cta")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
