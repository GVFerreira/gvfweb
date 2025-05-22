import Image from "next/image";


export default function Projects () {

  return (
    <article className="border-y border-y-slate-700 w-full space-y-5 py-5">
      <div className="space-y-2">
        <p>Web App <span>03/03/2023</span></p>
        <h1>Nome do projeto</h1>
        <p>Categoria</p>
      </div>

      <Image 
        src="/img/sample.jpg" width={200} height={110} alt="Project Thumbnail"
        className="w-full rounded-3xl"
      />
    </article>
  )
}