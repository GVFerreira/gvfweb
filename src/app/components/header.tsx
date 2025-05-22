import { TextAlignRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Header () {
  return(
    <header className="border-b border-b-slate-700">
      <div className="container p-4 flex justify-between items-center">
        <div>
          <Image
            src="/img/gvf_white.svg" 
            width={150}
            height={150}
            alt="GVF logotipo"
            className="w-24"
          />
        </div>
        <TextAlignRight className="rounded-full bg-slate-800 shadow-lg shadow-white/5 p-2 size-12 text-white"/>
        {/* <nav>
          <ul>
            <li>Projetos</li>
            <li>Sobre & Contato</li>
            <li>Contact Me</li>
          </ul>
        </nav> */}
      </div>
    </header>
  )
}