 import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Layers,
  Gauge,
  Link2,
  Headphones,
  Check,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
 
 const services = [
   {
     id: "websites",
     icon: Globe,
     gradient: "from-primary/15 to-secondary/10",
   },
   {
     id: "saas",
     icon: Layers,
     gradient: "from-secondary/15 to-primary/10",
   },
   {
     id: "performance",
     icon: Gauge,
     gradient: "from-primary/15 to-secondary/10",
   },
   {
     id: "integrations",
     icon: Link2,
     gradient: "from-secondary/15 to-primary/10",
   },
   {
     id: "support",
     icon: Headphones,
     gradient: "from-primary/15 to-secondary/10",
   },
 ];
 
 export function ServicesList() {
   const t = useTranslations()
 
   return (
     <section className="py-24 relative">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="max-w-3xl mx-auto text-center mb-20">
           <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
             {t("servicesPage.services.badge")}
           </span>
           <h2 className="font-display text-3xl md:text-5xl mb-6">
             {t("servicesPage.services.title")}{" "}
             <span className="text-primary">{t("servicesPage.services.titleHighlight")}</span>
           </h2>
           <p className="text-muted-foreground text-lg">
             {t("servicesPage.services.description")}
           </p>
         </div>
 
         {/* Services Grid */}
         <div className="space-y-8">
           {services.map((service, index) => {
             const Icon = service.icon;
             const isReversed = index % 2 !== 0;
 
             return (
               <div
                 key={service.id}
                 className={`group relative bg-gradient-to-br ${service.gradient} border border-border rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(166,247,80,0.1)]`}
               >
                 <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-start`}>
                   {/* Icon */}
                   <div className="flex-shrink-0">
                     <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                       <Icon className="w-8 h-8 text-primary" />
                     </div>
                   </div>
 
                   {/* Content */}
                   <div className="flex-1">
                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                       <div className="flex-1">
                         <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                           {t(`servicesPage.services.${service.id}.title`)}
                         </h3>
                         
                         <p className="text-primary text-sm font-medium mb-4">
                           {t(`servicesPage.services.${service.id}.forWho`)}
                         </p>
 
                         <p className="text-muted-foreground mb-6 leading-relaxed">
                           {t(`servicesPage.services.${service.id}.problems`)}
                         </p>
 
                         {/* Outcomes */}
                         <div className="space-y-3">
                           <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                             {t("servicesPage.services.outcomesLabel")}
                           </p>
                           <ul className="grid sm:grid-cols-2 gap-3">
                             {[1, 2, 3, 4].map((num) => (
                               <li key={num} className="flex items-start gap-2">
                                 <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                 <span className="text-sm text-muted-foreground">
                                   {t(`servicesPage.services.${service.id}.outcomes.o${num}`)}
                                 </span>
                               </li>
                             ))}
                           </ul>
                         </div>
                       </div>
 
                       {/* CTA */}
                       <div className="flex-shrink-0">
                         <Button variant="outline" size="lg" asChild className="group/btn">
                           <Link href="/contact">
                             {t("servicesPage.services.cta")}
                             <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                           </Link>
                         </Button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )
           })}
         </div>
       </div>
     </section>
   )
 }