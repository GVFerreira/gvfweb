import type React from "react"
import type { Metadata } from "next"
import { Anton, Open_Sans } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from "next/navigation"
import { Toaster } from "sonner"

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Web Developer - Gustavo Ferreira",
  description: "Professional web design and development services",
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
 
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/icon.png" type="image/png" sizes="512x512" />
      </head>
      <body className={`${anton.variable} ${openSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
