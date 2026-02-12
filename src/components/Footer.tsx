import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Github, Heart } from "lucide-react"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { PopupForm } from "./Popup-Form"

const contactLinks = [
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/610435977540", descKey: "footer.contact.whatsapp", color: "hover:text-green-400 hover:border-green-400/50" },
  { name: "Email", icon: Mail, href: "mailto:contato@gvfwebdesign.com.br", descKey: "footer.contact.email", color: "hover:text-blue-400 hover:border-blue-400/50" },
  { name: "GitHub", icon: Github, href: "https://github.com/gvferreira", descKey: "footer.contact.github", color: "hover:text-purple-400 hover:border-purple-400/50" },
]

export function Footer() {
  const t = useTranslations()

  return (
    <footer id="contact" className="relative pt-24 pb-8 bg-muted/50">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {t("footer.title")} <span className="text-primary text-glow">{t("footer.titleHighlight")}</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            {t("footer.description")}
          </p>
          <PopupForm />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg ${link.color}`}
              >
                <Icon className="w-8 h-8 mb-3 text-muted-foreground group-hover:scale-110 transition-all" />
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-inherit transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(link.descKey)}
                </p>
              </a>
            )
          })}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              href="/"
              className="font-display text-2xl md:text-3xl text-primary hover:text-glow transition-all"
            >
              <Image
                src="/img/gvf_white.svg"
                alt="GVF Logotype"
                width={80}
                height={60}
              />
            </Link>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                {t("legalLinks.contact")}
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                {t("legalLinks.privacy")}
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                {t("legalLinks.cookies")}
              </Link>
            </div>

            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {new Date().getFullYear()} Dev Gustavo. {t("footer.copyright")} <Heart className="w-4 h-4 text-primary fill-primary" />
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Button variant="glow" size="icon" className="rounded-full size-14 shadow-2xl animate-glow-pulse" asChild>
          <a href="https://wa.me/610435977540" target="_blank" rel="noopener noreferrer">
            <MessageCircle />
          </a>
        </Button>
      </div>
    </footer>
  )
}
