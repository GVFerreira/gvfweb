'use client'

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts, getAllTags } from "@/data/blog"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
 
 const Blog = () => {
   const t = useTranslations()
   const [activeTag, setActiveTag] = useState<string | null>(null)
   const allTags = getAllTags()
 
   const filteredPosts = activeTag
     ? blogPosts.filter((post) => post.tags.includes(activeTag))
     : blogPosts
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
 
       <main>
         {/* Hero Section */}
         <section className="relative pt-32 pb-16 overflow-hidden">
           <div className="absolute inset-0">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
             <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
           </div>
 
           <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-3xl mx-auto text-center">
               <h1 className="font-display text-4xl md:text-6xl mb-6">
                 {t("blog.title")}{" "}
                 <span className="text-primary text-glow">{t("blog.titleHighlight")}</span>
               </h1>
               <p className="text-lg text-muted-foreground">
                 {t("blog.description")}
               </p>
             </div>
           </div>
         </section>
 
         {/* Tags Filter */}
         <section className="py-8 border-b border-border">
           <div className="container mx-auto px-4">
             <div className="flex flex-wrap gap-3 justify-center">
               <button
                 onClick={() => setActiveTag(null)}
                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                   activeTag === null
                     ? "bg-primary text-primary-foreground"
                     : "bg-muted text-muted-foreground hover:bg-muted/80"
                 }`}
               >
                 {t("blog.allPosts")}
               </button>
               {allTags.map((tag) => (
                 <button
                   key={tag}
                   onClick={() => setActiveTag(tag)}
                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                     activeTag === tag
                       ? "bg-primary text-primary-foreground"
                       : "bg-muted text-muted-foreground hover:bg-muted/80"
                   }`}
                 >
                   {tag}
                 </button>
               ))}
             </div>
           </div>
         </section>
 
         {/* Blog Posts Grid */}
         <section className="py-16">
           <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredPosts.map((post) => (
                 <article
                   key={post.slug}
                   className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(166,247,80,0.1)]"
                 >
                   {/* Cover Image */}
                   <div className="aspect-video bg-muted relative overflow-hidden">
                     <Image
                       src={post.coverImage}
                       alt={post.title}
                       width={400}
                       height={320}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute top-4 left-4 flex gap-2">
                       {post.tags.slice(0, 2).map((tag) => (
                         <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-sm">
                           {tag}
                         </Badge>
                       ))}
                     </div>
                   </div>
 
                   {/* Content */}
                   <div className="p-6">
                     {/* Meta */}
                     <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                       <span className="flex items-center gap-1">
                         <Calendar className="w-4 h-4" />
                         {new Date(post.publishedAt).toLocaleDateString("en-AU")}
                       </span>
                       <span className="flex items-center gap-1">
                         <Clock className="w-4 h-4" />
                         {post.readingTime} {t("blog.minRead")}
                       </span>
                     </div>
 
                     {/* Title */}
                     <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                       {post.title}
                     </h2>
 
                     {/* Description */}
                     <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                       {post.description}
                     </p>
 
                     {/* Read More */}
                     <Link
                       href={{
                        pathname: '/blog/[postSlug]',
                        params: { postSlug: post.slug}
                      }}
                       className="inline-flex items-center text-primary font-medium text-sm group/link"
                     >
                       {t("blog.readMore")}
                       <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                     </Link>
                   </div>
                 </article>
               ))}
             </div>
 
             {filteredPosts.length === 0 && (
               <div className="text-center py-16">
                 <p className="text-muted-foreground">{t("blog.noPostsFound")}</p>
               </div>
             )}
           </div>
         </section>
       </main>
 
       <Footer />
     </div>
   )
 }
 
 export default Blog