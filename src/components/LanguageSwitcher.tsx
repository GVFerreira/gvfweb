"use client"

import { useLocale } from "next-intl"
import { usePathname, Link } from "@/i18n/navigation"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import type { ComponentProps } from "react"
type HrefType = ComponentProps<typeof Link>["href"]

const languages = [
  { locale: "pt", label: "Português (Brasil)", flag: "🇧🇷" },
  { locale: "en", label: "English (Australia)", flag: "🇦🇺" }
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const currentLang = languages.find((l) => l.locale === locale) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {languages.map(lang => {
          // construindo href seguro
          const href: HrefType = pathname as HrefType

          return (
            <Link key={lang.locale} href={href} locale={lang.locale}>
              <DropdownMenuItem
                className={`cursor-pointer ${
                  locale === lang.locale ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.label}
              </DropdownMenuItem>
            </Link>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
