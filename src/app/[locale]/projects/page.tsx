'use client'

import { useState, useMemo } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Github, ArrowUpRight, ArrowLeft, Filter } from "lucide-react"
import { projects, allTechnologies } from "@/data/projects"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import Image from "next/image"

const Projects = () => {
  const t = useTranslations()
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects
    return projects.filter((p) => p.technologies.includes(selectedTech))
  }, [selectedTech])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
                  <ArrowLeft className="w-4 h-4" />
                  {t("projectPage.backHome")}
                </Link>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
                  {t("projectPage.title")} <span className="text-primary">{t("projectPage.titleHighlight")}</span>
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl">
                  {t("projectPage.description")}
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filtrar por tecnologia:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTech(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    !selectedTech
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(85_90%_64%/0.3)]"
                      : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {t("projects.filterAll")}
                </button>
                {allTechnologies().map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedTech === tech
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(85_90%_64%/0.3)]"
                        : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(85_90%_64%/0.15)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={t(project.titleKey)}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <Link
                      href={{
                        pathname: '/project/[projectSlug]',
                        params: { projectSlug: project.slug}
                      }}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Button variant="glow" size="icon" className="rounded-full">
                        <ArrowUpRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {t(project.descriptionKey)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link 
                          href={{
                            pathname: '/project/[projectSlug]',
                            params: { projectSlug: project.slug}
                          }}
                        >
                          {t("projectPage.viewDetails")}
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Nenhum projeto encontrado com esta tecnologia.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSelectedTech(null)}>
                  Limpar filtro
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Projects
