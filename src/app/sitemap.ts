import { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog"
import { projects } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gvfwebdesign.com.br"

  // Páginas estáticas principais
  const staticRoutes = [
    "",
    "/services",
    "/blog",
    "/contact",
    "/project",
    "/projects",
    "/cookies",
    "/privacy",
  ]

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }))

  // Posts do blog
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Projects
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(project.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages, ...blogPages]
}
