'use client'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, CheckCircle, ArrowUpRight } from "lucide-react"
import { projects } from "@/data/projects"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { useParams } from "next/navigation"
import Image from "next/image"

const ProjectDetail = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>()
  const t = useTranslations()

  const project = projects.find((p) => p.slug === projectSlug)
  const otherProjects = projects.filter((p) => p.slug !== projectSlug).slice(0, 3)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Projeto não encontrado</h1>
          <Button asChild>
            <Link href="/projects">Ver todos os projetos</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <Image
            src={project.image}
            alt={t(project.titleKey)}
            width={800}
            height={680}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                {t("projectPage.backHome")}
              </Link>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
                {t(project.titleKey)}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {t(project.descriptionKey)}
                  </p>
                </div>

                {/* Challenge */}
                {project.challenge && (
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <h2 className="font-display text-2xl text-foreground mb-4">
                      {t("projectPage.challenge")}
                    </h2>
                    <p className="text-muted-foreground">{t(project.challenge)}</p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <h2 className="font-display text-2xl text-foreground mb-4">
                      {t("projectPage.solution")}
                    </h2>
                    <p className="text-muted-foreground">{t(project.solution)}</p>
                  </div>
                )}

                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <h2 className="font-display text-2xl text-foreground mb-4">
                      {t("projectPage.results")}
                    </h2>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(result)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Actions */}
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-28">
                  <h3 className="font-display text-xl text-foreground mb-4">
                    {t("projectPage.techUsed")}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button variant="hero" className="w-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("projectPage.visitSite")}
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t("projectPage.viewCode")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
              {t("projectPage.otherProjects")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((proj) => (
                <Link
                  key={proj.id}
                  href={{
                    pathname: "/project/[projectSlug]",
                    params: { projectSlug: proj.slug}
                  }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(85_90%_64%/0.15)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={t(proj.titleKey)}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(proj.titleKey)}
                    </h3>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm">{t("projectPage.viewDetails")}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail
