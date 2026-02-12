'use client'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Cookie } from "lucide-react"
import { useTranslations } from "next-intl"

export default function CookiesPolicy() {
  const t = useTranslations()

  const cookieTypes = ["essential", "analytics", "marketing", "preferences"]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Cookie className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                {t("cookies.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("cookies.lastUpdated")}: {t("cookies.lastUpdatedDate")}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <p className="text-muted-foreground mb-8 text-lg">
                {t("cookies.intro")}
              </p>

              <section className="mb-10">
                <h2 className="font-display text-2xl text-foreground mb-4">
                  {t("cookies.whatAreCookies.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cookies.whatAreCookies.content")}
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl text-foreground mb-6">
                  {t("cookies.typesTitle")}
                </h2>
                <div className="grid gap-4">
                  {cookieTypes.map((type) => (
                    <div
                      key={type}
                      className="bg-background rounded-xl p-6 border border-border"
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        {t(`cookies.types.${type}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t(`cookies.types.${type}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl text-foreground mb-4">
                  {t("cookies.management.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cookies.management.content")}
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  {t("cookies.contact.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("cookies.contact.content")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
