 import { useTranslations } from "next-intl"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ServicesHero } from "./components/ServicesHero"
import { ServicesList } from "./components/ServicesList"
import { ServicesProcess } from "./components/ServicesProcess"
import { ServicesProof } from "./components/ServicesProof"
import { ServicesCTA } from "./components/ServicesCTA"
 
 const Services = () => {
   const t = useTranslations()
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main>
         <ServicesHero />
         <ServicesList />
         <ServicesProcess />
         <ServicesProof />
         <ServicesCTA />
       </main>
       <Footer />
     </div>
   )
 }
 
 export default Services
