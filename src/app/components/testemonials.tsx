"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  rating: number
  text: string
  image?: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Desire",
      rating: 5,
      text: "Emily delivered a complex web application ahead of schedule. Her coding prowess and problem-solving abilities were evident in the seamless functionality and robust features she implemented.",
      image: "/placeholder.svg?height=48&width=48"
    },
    {
      id: 2,
      name: "Tom Shawn",
      rating: 5,
      text: "Tom's redesign of our outdated website was nothing short of miraculous. He modernized our online presence while maintaining our core identity. The positive feedback from our clients has been overwhelming.",
      image: "/placeholder.svg?height=48&width=48"
    },
    {
      id: 3,
      name: "Andrew Mathews",
      rating: 4.5,
      text: "Andrew transformed my business idea into a stunning website in just two weeks, and I couldn't be happier! His attention to detail and quick turnaround time were impressive.",
      image: "/placeholder.svg?height=48&width=48"
    },
    {
      id: 4,
      name: "Sarah Taller",
      rating: 5,
      text: "Attention to detail is evident in the responsive layouts, ensuring seamless performance across all devices.",
      image: "/placeholder.svg?height=48&width=48"
    },
    {
      id: 5,
      name: "Michael Rodriguez",
      rating: 5,
      text: "Please believe me when I say I can't imagine working with anyone else for my web design needs.",
      image: "/placeholder.svg?height=48&width=48"
    }
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  useEffect(() => {
    const handleMouseUpOutside = () => {
      setIsDragging(false)
    }

    document.addEventListener("mouseup", handleMouseUpOutside)
    return () => {
      document.removeEventListener("mouseup", handleMouseUpOutside)
    }
  }, [])

  return (
    <section className="bg-custom-black text-white px-4 py-12">
      <div className="container">
        <div className="flex items-center gap-2 mb-4">
          <div className="size-2 rounded-full bg-main-green animate-pulse"/>
          {`{ 04 } — Feedback`}
        </div>
        <h2 className="font-heading text-6xl mb-2">
          Não são minhas palavras<span className="text-main-green"> *</span>
        </h2>
        <p className="text-white/60 text-sm mb-12">* São as deles</p>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-[300px] max-w-[300px] border border-white/10 rounded-lg p-6 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(testimonial.rating) ? "#A6F750" : (i < testimonial.rating ? "url(#half-star)" : "none")}
                    stroke="#A6F750"
                    className="mr-1"
                  >
                    <defs>
                      <linearGradient id="half-star">
                        <stop offset="50%" stopColor="#A6F750" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-white/60">{testimonial.rating}/5</span>
              </div>
              
              <div className="flex-1 mb-6">
                <svg className="text-white/20 h-10 w-10 mb-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/80">{testimonial.text}</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 mr-3">
                  <Image 
                    src={testimonial.image || "/placeholder.svg?height=40&width=40"} 
                    alt={testimonial.name} 
                    width={40} 
                    height={40} 
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
