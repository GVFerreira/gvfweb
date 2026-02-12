import { marked } from "marked"

marked.setOptions({
  breaks: true, // respeita quebra de linha
})

export function parseMarkdown(content: string) {
  return marked.parse(content)
}
