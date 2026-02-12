'use client'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Shield } from "lucide-react"
import { useTranslations } from "next-intl"

export default function PrivacyPolicy() {
  const t = useTranslations()

  const sections = [
    "dataCollection",
    "dataUsage",
    "dataSecurity",
    "thirdParties",
    "userRights",
    "contact",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                {t("privacy.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("privacy.lastUpdated")}: {t("privacy.lastUpdatedDate")}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <p className="text-muted-foreground mb-8 text-lg">
                {t("privacy.intro")}
              </p>

              <div className="space-y-10">
                {sections.map((section, index) => (
                  <section key={section}>
                    <h2 className="font-display text-2xl text-foreground mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                        {index + 1}
                      </span>
                      {t(`privacy.sections.${section}.title`)}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed pl-11">
                      {t(`privacy.sections.${section}.content`)}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
