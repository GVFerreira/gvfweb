'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";

type Category = "frontend" | "backend" | "tools";

interface Technology {
  name: string;
  icon: string;
  category: Category;
  descriptionKey: string;
}

const technologies: Technology[] = [
  { name: "React", icon: "⚛️", category: "frontend", descriptionKey: "technologies.techList.react" },
  { name: "Next.js", icon: "▲", category: "frontend", descriptionKey: "technologies.techList.nextjs" },
  { name: "TypeScript", icon: "📘", category: "frontend", descriptionKey: "technologies.techList.typescript" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend", descriptionKey: "technologies.techList.tailwind" },
  { name: "Vue.js", icon: "💚", category: "frontend", descriptionKey: "technologies.techList.vuejs" },
  { name: "Framer Motion", icon: "✨", category: "frontend", descriptionKey: "technologies.techList.framer" },
  { name: "Node.js", icon: "🟢", category: "backend", descriptionKey: "technologies.techList.nodejs" },
  { name: "Python", icon: "🐍", category: "backend", descriptionKey: "technologies.techList.python" },
  { name: "PostgreSQL", icon: "🐘", category: "backend", descriptionKey: "technologies.techList.postgresql" },
  { name: "MongoDB", icon: "🍃", category: "backend", descriptionKey: "technologies.techList.mongodb" },
  { name: "GraphQL", icon: "◈", category: "backend", descriptionKey: "technologies.techList.graphql" },
  { name: "Firebase", icon: "🔥", category: "backend", descriptionKey: "technologies.techList.firebase" },
  { name: "Git", icon: "📦", category: "tools", descriptionKey: "technologies.techList.git" },
  { name: "Docker", icon: "🐳", category: "tools", descriptionKey: "technologies.techList.docker" },
  { name: "AWS", icon: "☁️", category: "tools", descriptionKey: "technologies.techList.aws" },
  { name: "Figma", icon: "🎯", category: "tools", descriptionKey: "technologies.techList.figma" },
  { name: "Vercel", icon: "▲", category: "tools", descriptionKey: "technologies.techList.vercel" },
  { name: "Linux", icon: "🐧", category: "tools", descriptionKey: "technologies.techList.linux" },
];

export function TechnologiesSection() {
  const t = useTranslations()
  const [activeCategory, setActiveCategory] = useState<Category>("frontend");

  const categories = [
    { id: "frontend" as Category, labelKey: "technologies.frontend", icon: "🎨" },
    { id: "backend" as Category, labelKey: "technologies.backend", icon: "⚙️" },
    { id: "tools" as Category, labelKey: "technologies.tools", icon: "🛠️" },
  ];

  const filteredTechnologies = technologies.filter(
    (tech) => tech.category === activeCategory
  );

  return (
    <section id="technologies" className="py-24 md:py-32 relative bg-muted/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(166,247,80,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(166,247,80,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("technologies.badge")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {t("technologies.title")} <span className="text-primary">{t("technologies.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("technologies.description")}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_30px_hsl(85_90%_64%/0.3)]"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {t(category.labelKey)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(85_90%_64%/0.1)] hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t(tech.descriptionKey)}
              </p>
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
