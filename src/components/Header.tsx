"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./LanguageSwitcher"
import Image from "next/image"
import { Link, usePathname } from "@/i18n/navigation"
import type { ComponentProps } from "react"

type HrefType = ComponentProps<typeof Link>["href"]

type Navlink = {
  href: string
  labelKey: string
  isAnchor?: boolean
}

const navLinks: Navlink[] = [
  { href: "/services", labelKey: "header.services" },
  { href: "#projects", labelKey: "header.projects", isAnchor: true },
  { href: "#process", labelKey: "header.process", isAnchor: true },
  { href: "#feedbacks", labelKey: "header.feedbacks", isAnchor: true },
  { href: "/blog", labelKey: "header.blog" },
]

export function Header() {
  const t = useTranslations()
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isHomePage = pathname === "/"

  const resolveHref = (link: Navlink): HrefType => {
    if (!link.isAnchor) return link.href as HrefType

    if (isHomePage) return link.href as HrefType

    return ("/" + link.href) as HrefType
  }

  // ─────────────────────────────────────────────────────
  // Scroll spy apenas na HOME
  // ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.filter(l => l.isAnchor).map(l => l.href.replace("#", ""))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)

        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // ─────────────────────────────────────────────────────
  // Scroll interno na home
  // ─────────────────────────────────────────────────────
  const handleClick = (href: string) => {
    if (!href.startsWith("#")) {
      setMobileMenuOpen(false)
      return
    }

    if (!isHomePage) {
      window.location.href = "/" + href
      return
    }

    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })

    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/img/gvf_white.svg"
              alt="GVF Logotype"
              width={120}
              height={80}
            />
          </Link>

          {/* ───────────────── DESKTOP ───────────────── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={resolveHref(link)}
                  onClick={() => handleClick(link.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>

          {/* ───────────────── AÇÕES ───────────────── */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />

            <Button variant="glow" asChild>
              <Link href="/contact">
                {t("header.cta")}
              </Link>
            </Button>
          </div>

          {/* ───────────────── MOBILE TOGGLE ───────────────── */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />

            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* ───────────────── MOBILE MENU ───────────────── */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b">
            <ul className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={resolveHref(link)}
                    onClick={() => handleClick(link.href)}
                    className={`block px-6 py-3 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}

              <li className="px-4 pt-4">
                <Button variant="glow" className="w-full" asChild>
                  <Link href="/contact">
                    {t("header.cta")}
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
