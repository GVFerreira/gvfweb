export interface Project {
  id: string
  slug: string
  titleKey: string
  descriptionKey: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
  challenge?: string
  solution?: string
  results?: string[]
  publishedAt: string
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "panasonic-vrazor",
    titleKey: "projects.projectList.panasonic.title",
    descriptionKey: "projects.projectList.panasonic.description",
    technologies: ["PHP", "HTML", "MySQL", "JavaScript"],
    image: "/projects/panasonic-background.png",
    liveUrl: "#",
    githubUrl: "https://github.com/GVFerreira/vr-pana",
    challenge: "projects.projectList.panasonic.challenge",
    solution: "projects.projectList.panasonic.solution",
    results: [
      "projects.projectList.panasonic.result1",
      "projects.projectList.panasonic.result2",
      "projects.projectList.panasonic.result3"
    ],
    publishedAt: "2025-01-15",
  },
  {
    id: "2",
    slug: "flytop-travels",
    titleKey: "projects.projectList.flytop.title",
    descriptionKey: "projects.projectList.flytop.description",
    technologies: ["NextJS", "Prisma", "API", "TypeScript"],
    image: "/projects/flytop-background.png",
    liveUrl: "#",
    githubUrl: "https://github.com/GVFerreira/flytop-usa",
    challenge: "projects.projectList.flytop.challenge",
    solution: "projects.projectList.flytop.solution",
    results: [
      "projects.projectList.flytop.result1",
      "projects.projectList.flytop.result2",
      "projects.projectList.flytop.result3"
    ],
    publishedAt: "2025-01-15",
  },
  {
    id: "3",
    slug: "grupo-wehub",
    titleKey: "projects.projectList.wehub.title",
    descriptionKey: "projects.projectList.wehub.description",
    technologies: ["React", "Next-INTL", "PostreSQL", "TypeScript"],
    image: "/projects/wehub-background.png",
    liveUrl: "#",
    githubUrl: "https://github.com/GVFerreira/wehub",
    challenge: "projects.projectList.wehub.challenge",
    solution: "projects.projectList.wehub.solution",
    results: [
      "projects.projectList.wehub.result1",
      "projects.projectList.wehub.result2",
      "projects.projectList.wehub.result3"
    ],
    publishedAt: "2025-01-15",
  },
  {
    id: "4",
    slug: "uketa",
    titleKey: "projects.projectList.uketa.title",
    descriptionKey: "projects.projectList.uketa.description",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AppMax API", "Google Vision API"],
    image: "/projects/uketa-background.png",
    liveUrl: "#",
    githubUrl: "https://github.com/GVFerreira/uketatravel",
    challenge: "projects.projectList.uketa.challenge",
    solution: "projects.projectList.uketa.solution",
    results: [
      "projects.projectList.uketa.result1",
      "projects.projectList.uketa.result2",
      "projects.projectList.uketa.result3"
    ],
    publishedAt: "2025-01-15",
  },
  {
    id: "5",
    slug: "grupo-felipe-augusto",
    titleKey: "projects.projectList.gfa.title",
    descriptionKey: "projects.projectList.gfa.description",
    technologies: ["WordPress", "Elementor", "Contact Form"],
    image: "/projects/gfa-background.png",
    liveUrl: "https://grupofelipeaugusto.com.br/",
    githubUrl: "https://grupofelipeaugusto.com.br/",
    challenge: "projects.projectList.gfa.challenge",
    solution: "projects.projectList.gfa.solution",
    results: [
      "projects.projectList.gfa.result1",
      "projects.projectList.gfa.result2",
      "projects.projectList.gfa.result3"
    ],
    publishedAt: "2025-01-15",
  },
  {
    id: "6",
    slug: "somaxmed",
    titleKey: "projects.projectList.somaxmed.title",
    descriptionKey: "projects.projectList.somaxmed.description",
    technologies: ["WordPress", "Elementor"],
    image: "/projects/somaxmed-background.png",
    liveUrl: "https://somaxmed.com.br/",
    githubUrl: "https://somaxmed.com.br/",
    challenge: "projects.projectList.somaxmed.challenge",
    solution: "projects.projectList.somaxmed.solution",
    results: [
      "projects.projectList.somaxmed.result1",
      "projects.projectList.somaxmed.result2",
      "projects.projectList.somaxmed.result3"
    ],
    publishedAt: "2025-01-15",
  },
  {
    id: "7",
    slug: "macro-m8",
    titleKey: "projects.projectList.macrom8.title",
    descriptionKey: "projects.projectList.macrom8.description",
    technologies: ["Next.js", "Node.js", "Fastify", "Stripe"],
    image: "/projects/macrom8-background.png",
    liveUrl: "https://macrom8.com.au/",
    githubUrl: "https://macrom8.com.au/",
    challenge: "projects.projectList.macrom8.challenge",
    solution: "projects.projectList.macrom8.solution",
    results: [
      "projects.projectList.macrom8.result1",
      "projects.projectList.macrom8.result2",
      "projects.projectList.macrom8.result3"
    ],
    publishedAt: "2025-01-15",
  }
]

// export const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort()

export const allTechnologies = () => {
  const tags = new Set<string>()
  projects.forEach((project) => project.technologies.forEach((technology) => tags.add(technology)))
  return Array.from(tags).sort()
}