import type { Metadata } from "next"

import { notFound } from "next/navigation"
import { useTranslations } from "next-intl"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPostBySlug, blogPosts } from "@/data/blog"
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { parseMarkdown } from "@/lib/markdown"

type BlogPostPageProps = {
  params: {
    postSlug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.postSlug)

  if (!post) {
    return {}
  }

  const url = `https://gvfwebdesign.com.br/blog/${post.slug}`

  return {
    title: `${post.title} | Gustavo Ferreira`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  }
}
 
export default function BlogPostPage({ params }: BlogPostPageProps) {
   const t = useTranslations()
   const post = getPostBySlug(params.postSlug)
 
   if (!post) {
    notFound()
  }
 
  // Find related posts (same tags, excluding current)
  const relatedPosts = blogPosts
  .filter((p) => p.slug !== post.slug)
  .map((p) => ({
    post: p,
    score: p.tags.filter((tag) => post.tags.includes(tag)).length
  }))
  .filter((item) => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 3)
  .map((item) => item.post)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Gustavo Ferreira",
      logo: {
        "@type": "ImageObject",
        url: "https://gvfwebdesign.com.br/img/gvf_white.svg",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gvfwebdesign.com.br/blog/${post.slug}`,
    },
  }
 
   return (
    <div className="min-h-screen bg-background">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* Hero */}
        <header className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
 
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("blog.backToBlog")}
              </Link>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8">
                {post.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
                <address className="not-italic flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span itemProp="author">{post.author.name}</span>
                </address>

                <time
                  dateTime={post.publishedAt}
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {post.readingTime} {t("blog.minRead")}
                </span>
              </div>
            </div>
          </div>
        </header>
 
         {/* Content */}
         <section aria-label="Article content" className="py-12">
           <div className="container mx-auto px-4">
            <article itemScope itemType="https://schema.org/Article"
              className="max-w-3xl mx-auto
              prose prose-lg prose-invert
              prose-headings:font-display
              prose-headings:font-semibold
              prose-h2:text-3xl
              prose-h3:text-2xl
              prose-p:text-muted-foreground
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary
              prose-a:no-underline
              prose-ul:pl-6
              prose-ol:pl-6
              prose-blockquote:border-l-primary">
              <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
            </article>
           </div>
         </section>
 
         {/* Related Posts */}
         {relatedPosts.length > 0 && (
           <aside aria-label="Related posts" className="py-16 border-t border-border">
             <div className="container mx-auto px-4">
               <div className="max-w-3xl mx-auto">
                 <h2 className="font-display text-2xl mb-8">{t("blog.relatedPosts")}</h2>
                 <div className="grid md:grid-cols-2 gap-6">
                   {relatedPosts.map((relatedPost) => (
                     <Link
                       key={relatedPost.slug}
                       href={{
                        pathname: "/blog/[postSlug]",
                        params: {postSlug: relatedPost.slug}
                       }}
                       className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all"
                     >
                       <span className="text-primary text-sm">{relatedPost.tags[0]}</span>
                       <h3 className="font-display text-lg text-foreground mt-2 group-hover:text-primary transition-colors">
                         {relatedPost.title}
                       </h3>
                       <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                         {relatedPost.description}
                       </p>
                     </Link>
                   ))}
                 </div>
               </div>
             </div>
           </aside>
         )}
 
         {/* CTA */}
         <section className="py-16 bg-muted/30">
           <div className="container mx-auto px-4">
             <div className="max-w-2xl mx-auto text-center">
               <h2 className="font-display text-2xl md:text-3xl mb-4">
                 {t("blog.ctaTitle")}
               </h2>
               <p className="text-muted-foreground mb-8">
                 {t("blog.ctaDescription")}
               </p>
               <Button variant="glow" size="lg" asChild>
                 <Link href="/contact">
                   {t("blog.ctaButton")}
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
               </Button>
             </div>
           </div>
         </section>
       </main>
 
       <Footer />
     </div>
   )
 }
