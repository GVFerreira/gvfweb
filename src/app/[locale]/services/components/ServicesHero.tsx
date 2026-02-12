 import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Zap, Users } from "lucide-react"
import { Link } from "@/i18n/navigation"
 
 export function ServicesHero() {
   const t = useTranslations()
 
   return (
     <section className="relative pt-32 pb-24 overflow-hidden">
       {/* Background Effects */}
       <div className="absolute inset-0">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
         <div
           className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage:
               "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
             backgroundSize: "80px 80px",
           }}
         />
       </div>
 
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
           {/* Trust Indicators */}
           <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
             <div className="flex items-center gap-2 text-muted-foreground">
               <Globe className="w-4 h-4 text-primary" />
               <span className="text-sm">{t("servicesPage.hero.trustBadge1")}</span>
             </div>
             <div className="flex items-center gap-2 text-muted-foreground">
               <Zap className="w-4 h-4 text-primary" />
               <span className="text-sm">{t("servicesPage.hero.trustBadge2")}</span>
             </div>
             <div className="flex items-center gap-2 text-muted-foreground">
               <Users className="w-4 h-4 text-primary" />
               <span className="text-sm">{t("servicesPage.hero.trustBadge3")}</span>
             </div>
           </div>
 
           {/* Main Headline */}
           <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
             {t("servicesPage.hero.title")}{" "}
             <span className="text-primary text-glow">
               {t("servicesPage.hero.titleHighlight")}
             </span>
           </h1>
 
           {/* One-liner */}
           <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
             {t("servicesPage.hero.subtitle")}
           </p>
 
           {/* Primary CTA */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button variant="glow" size="xl" asChild>
               <Link href="/contact">
                 {t("servicesPage.hero.cta")}
                 <ArrowRight className="w-5 h-5 ml-2" />
               </Link>
             </Button>
             <Button variant="outline" size="xl" asChild>
               <Link href="/projects">
                 {t("servicesPage.hero.secondaryCta")}
               </Link>
             </Button>
           </div>
         </div>
       </div>
     </section>
   )
 }