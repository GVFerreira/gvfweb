"use client"

import { useEffect, useRef, useState } from "react"

export function ClientLogos({ logos }: { logos: React.ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (trackRef.current) {
      setWidth(trackRef.current.scrollWidth / 2)
    }
  }, [])

  return (
    <div className="md:hidden mb-12 overflow-hidden relative">
      {/* Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="relative w-full">
        <div
          ref={trackRef}
          className="flex gap-4"
          style={{
            animation: `logo-scroll ${width / 40}s linear infinite`,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-28 h-14 flex items-center justify-center
                         bg-muted/50 rounded-lg border border-border/50
                         opacity-80"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${width}px);
          }
        }
      `}</style>
    </div>
  )
}
