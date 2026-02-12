 import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
 
 export function ServicesCTA() {
   const t = useTranslations()
 
   return (
     <section className="py-24 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
 
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-4xl mx-auto">
           <div className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
             {/* Decorative elements */}
             <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
 
             <div className="relative z-10">
               <h2 className="font-display text-3xl md:text-5xl mb-6">
                 {t("servicesPage.cta.title")}{" "}
                 <span className="text-primary text-glow">
                   {t("servicesPage.cta.titleHighlight")}
                 </span>
               </h2>
 
               <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                 {t("servicesPage.cta.description")}
               </p>
 
               {/* Trust Indicators */}
               <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Clock className="w-4 h-4 text-primary" />
                   <span className="text-sm">{t("servicesPage.cta.trust1")}</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Shield className="w-4 h-4 text-primary" />
                   <span className="text-sm">{t("servicesPage.cta.trust2")}</span>
                 </div>
                 <div className="flex items-center gap-2 text-muted-foreground">
                   <Sparkles className="w-4 h-4 text-primary" />
                   <span className="text-sm">{t("servicesPage.cta.trust3")}</span>
                 </div>
               </div>
 
               {/* CTA Button */}
               <Button variant="glow" size="xl" asChild>
                 <Link href="/contact">
                   {t("servicesPage.cta.button")}
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </Link>
               </Button>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 }