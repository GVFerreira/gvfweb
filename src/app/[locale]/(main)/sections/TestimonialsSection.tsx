import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialKeys = ["carlos", "ana", "roberto", "marina"];

export function TestimonialsSection() {
  const t = useTranslations();

  return (
    <section id="feedbacks" className="py-24 md:py-32 relative bg-muted/30">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {t("testimonials.title")} <span className="text-primary">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialKeys.map((key) => (
                <CarouselItem key={key} className="pl-4 md:basis-1/2">
                  <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(85_90%_64%/0.1)] h-full">
                    <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                      <Quote className="w-12 h-12" />
                    </div>

                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>

                    <p className="text-foreground mb-6 relative z-10">
                      &quot;{t(`testimonials.list.${key}.content`)}&quot;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                        {t(`testimonials.list.${key}.name`).charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {t(`testimonials.list.${key}.name`)}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(`testimonials.list.${key}.role`)}
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/50 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-primary/50 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
