'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MessageCircle, MapPin, Sparkles, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import CalendarButton from "../(main)/sections/CalendarButton"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { sendContactForm } from "@/app/action"


const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Your name is too short'
  }),
  telephone: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string()
})


export default function Contact() {
  const t = useTranslations()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      subject: '',
      message: ''
    }
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const sending = await sendContactForm(data)

      if(sending.status) {
        toast('Success ✅',{
          description: 'This from has been sent successfully. As soon as possible our team will get in touch.',
          duration: 7000
        })

        form.reset()
      } else {
        toast('Error ❌', {
          description: 'Error to send this form. Please review your information and try again later.',
          duration: 7000
        })
      }
    } catch(e) {
      console.log(e)
      toast('Error ❌', {
        description: 'Error to send this form. Please review your information and try again later.',
        duration: 7000
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(166,247,80,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(166,247,80,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{t("contact.info.locationValue")}</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in">
              {t("contact.title")}{" "}
              <span className="text-primary text-glow">{t("contact.titleHighlight")}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              {t("contact.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-20 relative ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact Cards */}
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <a
                  href="mailto:contato@gvfwebdesign.com.br"
                  className="relative flex items-center gap-5 bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">Email</h3>
                    <p className="text-muted-foreground">contato@gvfwebdesign.com.br</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <a
                  href="https://wa.me/610435977540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-5 bg-card rounded-2xl p-6 border border-border hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">WhatsApp</h3>
                    <p className="text-muted-foreground">+61 0435 977 540</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Info Cards */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t("contact.info.location")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("contact.info.locationValue")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <CalendarButton />
              
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative">
                {/* Form Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-xl opacity-50" />
                
                <div className="relative bg-card rounded-3xl p-8 md:p-10 border border-border">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">
                      {t("contact.form.title")}
                    </h2>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.name")}</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="h-12 bg-background/50 border-border focus:border-primary focus:ring-primary/20 transition-all"
                                  placeholder={t("contact.form.namePlaceholder")}
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.email")}</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="h-12 bg-background/50 border-border focus:border-primary focus:ring-primary/20 transition-all"
                                  placeholder={t("contact.form.emailPlaceholder")}
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="telephone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.telephone")}</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="h-12 bg-background/50 border-border focus:border-primary focus:ring-primary/20 transition-all"
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.subject")}</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="h-12 bg-background/50 border-border focus:border-primary focus:ring-primary/20 transition-all"
                                  placeholder={t("contact.form.subjectPlaceholder")}
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("contact.form.message")}</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder={t("contact.form.messagePlaceholder")}
                                  rows={6}
                                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 resize-none transition-all"
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                      

                      

                      <Button
                        type="submit"
                        variant="outline"
                        size="xl"
                        className="w-full group"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                            {t("contact.form.sending")}
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            {t("contact.form.submit")}
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
