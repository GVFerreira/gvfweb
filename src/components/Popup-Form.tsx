"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { useTranslations } from "next-intl"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { sendContactForm } from "@/app/action"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Your name is too short'
  }),
  telephone: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string()
})

export function PopupForm() {
  const t = useTranslations()
  const [open, setOpen] = useState(false)

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
        setOpen(false)
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="hero" size="xl" className="uppercase"  onClick={() => setOpen(true)}>
          {t("footer.cta")}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t("contact.form.title")}</DialogTitle>
          <DialogDescription>
            {t("contact.description")}
          </DialogDescription>
        </DialogHeader>

        {/* FORMULÁRIO DENTRO DO POPUP */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form.name")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form.email")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
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
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form.subject")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
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
                      rows={5}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="flex gap-3">
              <DialogClose asChild>
                <Button variant="outline">{t("contact.form.cancel")}</Button>
              </DialogClose>

              <Button type="submit" variant="hero" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                {!form.formState.isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

