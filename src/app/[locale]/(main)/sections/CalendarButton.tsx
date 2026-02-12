'use client'

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import {
  Dialog, DialogContent,
  DialogDescription, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import { Presentation } from "lucide-react"

export default function CalendarButton() {
  const t = useTranslations()
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"quick-meeting"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#005C53"},"dark":{"cal-brand":"#A6F750"}},"hideEventTypeDetails":false,"layout":"month_view"})
    })()
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hidden lg:block relative h-48 rounded-2xl overflow-hidden animate-pulse cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(166,247,80,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,92,83,0.4),transparent_50%)]" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-10 items-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Presentation className="w-6 h-6 text-primary" />
            </div>
            Agendar reunião
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>
            Description
          </DialogDescription>
        </DialogHeader>
        <Cal namespace="quick-meeting"
          calLink="gustavo-ferreira-6sn7nk/quick-meeting"
          style={{width:"100%",height:"100%",overflow:"scroll"}}
          config={{"layout":"month_view","theme":"dark"}}    
        />
      </DialogContent>
    </Dialog>
  )
}
  