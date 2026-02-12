 import { useTranslations } from "next-intl";
import { MessageSquare, Code, Rocket, TrendingUp } from "lucide-react";
 
 const steps = [
   { id: "discovery", icon: MessageSquare, number: "01" },
   { id: "build", icon: Code, number: "02" },
   { id: "launch", icon: Rocket, number: "03" },
   { id: "scale", icon: TrendingUp, number: "04" },
 ];
 
 export function ServicesProcess() {
   const t = useTranslations()
 
   return (
     <section className="py-24 relative overflow-hidden bg-muted/30">
       {/* Background */}
       <div className="absolute inset-0">
         <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
       </div>
 
       <div className="container mx-auto px-4 relative z-10">
         {/* Section Header */}
         <div className="max-w-3xl mx-auto text-center mb-16">
           <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
             {t("servicesPage.process.badge")}
           </span>
           <h2 className="font-display text-3xl md:text-5xl mb-6">
             {t("servicesPage.process.title")}{" "}
             <span className="text-primary">{t("servicesPage.process.titleHighlight")}</span>
           </h2>
           <p className="text-muted-foreground text-lg">
             {t("servicesPage.process.description")}
           </p>
         </div>
 
         {/* Process Steps */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {steps.map((step, index) => {
             const Icon = step.icon;
             
             return (
               <div key={step.id} className="relative group">
                 {/* Connector Line */}
                 {index < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent z-0" />
                 )}
 
                 <div className="relative bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(166,247,80,0.1)]">
                   {/* Step Number */}
                   <span className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-[0_0_20px_rgba(166,247,80,0.4)]">
                     {step.number}
                   </span>
 
                   {/* Icon */}
                   <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                     <Icon className="w-7 h-7 text-primary" />
                   </div>
 
                   {/* Content */}
                   <h3 className="font-display text-xl text-foreground mb-3">
                     {t(`servicesPage.process.steps.${step.id}.title`)}
                   </h3>
                   <p className="text-muted-foreground text-sm leading-relaxed">
                     {t(`servicesPage.process.steps.${step.id}.description`)}
                   </p>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     </section>
   );
 }