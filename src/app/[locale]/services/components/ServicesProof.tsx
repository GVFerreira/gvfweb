 import { useTranslations } from "next-intl";
import { TrendingUp, Clock, Percent, Users } from "lucide-react";
 
 const caseStudies = [
   {
     id: "case1",
     metrics: [
       { icon: TrendingUp, key: "metric1" },
       { icon: Clock, key: "metric2" },
     ],
   },
   {
     id: "case2",
     metrics: [
       { icon: Percent, key: "metric1" },
       { icon: Users, key: "metric2" },
     ],
   },
   {
     id: "case3",
     metrics: [
       { icon: TrendingUp, key: "metric1" },
       { icon: Clock, key: "metric2" },
     ],
   },
 ];
 
 export function ServicesProof() {
   const t = useTranslations()
 
   return (
     <section className="py-24 relative">
       <div className="container mx-auto px-4">
         {/* Section Header */}
         <div className="max-w-3xl mx-auto text-center mb-16">
           <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
             {t("servicesPage.proof.badge")}
           </span>
           <h2 className="font-display text-3xl md:text-5xl mb-6">
             {t("servicesPage.proof.title")}{" "}
             <span className="text-primary">{t("servicesPage.proof.titleHighlight")}</span>
           </h2>
           <p className="text-muted-foreground text-lg">
             {t("servicesPage.proof.description")}
           </p>
         </div>
 
         {/* Case Studies Grid */}
         <div className="grid md:grid-cols-3 gap-8">
           {caseStudies.map((caseStudy) => (
             <div
               key={caseStudy.id}
               className="group bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(166,247,80,0.1)]"
             >
               {/* Client/Project Type */}
               <span className="text-primary text-sm font-medium">
                 {t(`servicesPage.proof.cases.${caseStudy.id}.type`)}
               </span>
 
               {/* Title */}
               <h3 className="font-display text-xl text-foreground mt-2 mb-4">
                 {t(`servicesPage.proof.cases.${caseStudy.id}.title`)}
               </h3>
 
               {/* Description */}
               <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                 {t(`servicesPage.proof.cases.${caseStudy.id}.description`)}
               </p>
 
               {/* Metrics */}
               <div className="flex gap-6 pt-6 border-t border-border">
                 {caseStudy.metrics.map((metric, index) => {
                   const Icon = metric.icon
                   return (
                     <div key={index} className="flex-1">
                       <div className="flex items-center gap-2 mb-1">
                         <Icon className="w-4 h-4 text-primary" />
                         <span className="font-display text-2xl text-foreground">
                           {t(`servicesPage.proof.cases.${caseStudy.id}.${metric.key}.value`)}
                         </span>
                       </div>
                       <span className="text-xs text-muted-foreground">
                         {t(`servicesPage.proof.cases.${caseStudy.id}.${metric.key}.label`)}
                       </span>
                     </div>
                   )
                 })}
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   )
 }