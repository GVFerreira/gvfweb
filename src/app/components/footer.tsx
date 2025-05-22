import { ArrowUp, ArrowUpRight, Envelope, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return(
    <footer className="bg-custom-black text-white px-4 pt-16 pb-4">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <div className="col-span-2 flex items-center w-fit gap-2 bg-main-green/20 text-main-green rounded-full px-3 py-1 text-xs mb-6">
            <div className="size-2 bg-main-green rounded-full animate-pulse"></div>
            Disponível para projetos
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/60">Voltar ao topo</span>
            <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <ArrowUp className="h-4 w-4 text-custom-black" />
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2 text-center space-y-4 py-8">
            <h2 className="font-heading text-8xl">Vamos criar algo incrível juntos.</h2>
            <p className="text-white/60">Vamos causar impacto</p>
          </div>

          <div className="w-1/2">
            <div className="flex flex-col items-center mt-8 mb-6">
              <div className="flex flex-row items-center gap-4 mb-6">
                <Image
                  src="/img/photo.png"
                  alt="Andrew Scott"
                  width={300}
                  height={300}
                  className="w-40"
                />
                <div className="space-y-2">
                  <h2 className="font-medium text-2xl">Gustavo V Ferreira</h2>
                  <p className="text-sm text-white/60">Web developer / Web designer</p>
                  <div className="flex gap-4 mt-1">
                    <Link href="#" className="text-white/60">
                      <Envelope className="size-5" />
                    </Link>
                    <Link href="#" className="text-white/60">
                      <InstagramLogo className="size-5" />
                    </Link>
                    <Link href="#" className="text-white/60">
                      <WhatsappLogo className="size-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl text-main-green mb-4">contato@gvfwebdesign.com.br</h3>
              <p className="text-white/60 text-sm mb-6">
                Desenvolvedor{" "}
                <span className="font-medium text-white">ágil, confiavel</span> e  que coloca vida em ideias.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-main-green text-custom-black px-6 py-3 rounded-full"
              >
                Agendar uma reunião
                <ArrowUpRight className="size-8 p-2 bg-white rounded-full" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex font-medium text-sm">Desenvolvido por <Image src="/img/gvf_white.svg" alt="GVF" width={100} height={100} className="ml-1 w-12"/></span>
            </div>
          </div>
          <p className="text-center text-xs text-white/60 mb-4">Copyright © Dev Gustavo, {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}