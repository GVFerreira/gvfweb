import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Testemonials from "../components/testemonials"
import Footer from "../components/footer"
import Header from "../components/header"
import { ArrowUpRight, Clock, Envelope, EnvelopeSimple, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import Statistics from "../components/statistics"
import JavaScript from "devicons-react/icons/JavascriptOriginal"
import Node from "devicons-react/icons/NodejsOriginal"
import TypeScript from "devicons-react/icons/TypescriptOriginal"
import React from "devicons-react/icons/ReactOriginal"
import MongoDB from "devicons-react/icons/MongodbOriginal"
import Services from "../components/services"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-custom-black">
        {/* Profile Section */}
        <section
          className="bg-custom-black text-white px-4 py-32"
          style={{backgroundImage: "url('/background/curly_bracket_left_grey.svg')", backgroundRepeat: 'no-repeat', backgroundPosition: '105%', backgroundSize: '515px', }}
        >
          <div className="container md:grid md:grid-cols-3">
            <div className="col-span-1"></div>

            <div className="col-span-2 flex items-center w-fit gap-2 bg-main-green/20 text-main-green rounded-full px-3 py-1 text-xs mb-6">
              <div className="size-2 bg-main-green rounded-full animate-pulse"></div>
              Disponível para projetos
            </div>

            <div className="col-span-1">
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

            <div className="col-span-2">
              <h1 className="font-normal text-6xl leading-snug">
                Olá, eu sou <span className="inline-block text-[2.75rem] leading-tight p-2 bg-gray-800 rounded">Gustavo</span>. 
                Um <span className="inline-block text-[2.75rem] leading-tight p-2 bg-gray-800 rounded">Desenvolvedor Web</span> que transforma a sua ideia em realidade.
              </h1>
              <p className="text-sm text-white/60 mt-4">( 2021 - PRESENTE )</p>
              <p className="mt-4">
                Dedicado em criar websites que traz vida para as ideias, combinando <cite>beleza</cite>, <cite>velocidade</cite> e <cite>resultados impactantes</cite>.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-main-green text-custom-black px-6 py-3 rounded-full mt-10"
              >
                Veja o que eu faço
                <ArrowUpRight className="size-8 p-2 bg-white rounded-full" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative bg-black py-6">
          <div className="absolute top-0 left-0 z-10 w-64 h-full bg-gradient-to-l from-transparent to-black"></div>
          <div className="absolute top-0 right-0 z-10 w-64 h-full bg-gradient-to-r from-transparent to-black"></div>
          <Services />
        </section>

        {/* Projects Section */}
        <section className="bg-custom-black text-white px-4 py-32">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-2 rounded-full bg-main-green animate-pulse"/>
              {`{ 01 } — Meus Projetos`}
            </div>

            <h2 className="font-heading leading-tight text-6xl w-1/2 mb-8">Trabalho misturando a criatividade com a expertise.</h2>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-main-green text-custom-black px-6 py-3 rounded-full mt-8"
            >
              Seja um cliente
              <ArrowUpRight className="size-8 p-2 bg-white rounded-full" />
            </Link>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="w-1/2 border-[0.1px] border-slate-700 px-6 py-10">
              <div className="text-sm text-white/60 flex items-center gap-2 h-4">
                <LeftBracket />Primary artist portfolio<RightBracket /> 5/31/24
              </div>
              <h3 className="font-heading text-3xl my-4">SilverLynx Technologies</h3>
              <p className="text-sm text-white/60 mb-4">Web design & Web development</p>
              <div className="rounded-lg overflow-hidden h-60 bg-gray-800">
                <Image
                  src="/img/sample.jpg"
                  alt="SilverLynx Technologies"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-1/2 border-[0.1px] border-slate-700 px-6 py-10">
              <div className="text-xs text-white/60 mb-1">[Artist Portfolio] • 8/15/24</div>
              <h3 className="font-heading text-2xl mb-2">Evergreen Solutions</h3>
              <p className="text-sm text-white/60 mb-4">Web design & Web development</p>
              <div className="rounded-lg overflow-hidden h-60 bg-gray-800">
                <Image
                  src="/img/sample.jpg"
                  alt="Evergreen Solutions"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-1/3 border-[0.1px] border-slate-700 px-6 py-10">
              <div className="text-xs text-white/60 mb-1">[Mobile app] • 6/20/24</div>
              <h3 className="font-heading text-2xl mb-2">EchoStream Entertainment</h3>
              <p className="text-sm text-white/60 mb-4">UX/UI design</p>
              <div className="rounded-lg overflow-hidden h-60 bg-gray-800">
                <Image
                  src="/img/sample.jpg"
                  alt="EchoStream Entertainment"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="w-1/3 border-[0.1px] border-slate-700 px-6 py-10">
              <div className="text-xs text-white/60 mb-1">[Boutique e-commerce store] • 7/12/24</div>
              <h3 className="font-heading text-2xl mb-2">PulseTech Innovations</h3>
              <p className="text-sm text-white/60 mb-4">Web design & Web development</p>
              <div className="rounded-lg overflow-hidden h-60 bg-gray-800">
                <Image
                  src="/img/sample.jpg"
                  alt="PulseTech Innovations"
                  width={384}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="w-1/3 border-[0.1px] border-slate-700 p-6">
              <Link
                href="#"
                className="w-full h-full inline-flex items-center justify-center gap-2 bg-main-green hover:bg-opacity-95 text-custom-black rounded-lg"
              >
                Ver todos os projetos
                <ArrowUpRight className="size-8 p-2 bg-white rounded-full" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="bg-gray-50 text-custom-black px-4 py-32">
          <div className="container md:flex md:justify-center md:gap-12">
            <div className="w-1/3">
              <div className="flex items-center justify-end gap-2 mb-4">
                <div className="size-2 rounded-full bg-main-green animate-pulse"/>
                {`{ 02 } — Tools & Skills`}
              </div>
              <h2 className="font-heading leading-tight text-6xl text-right mb-8">Minha caixa<br/> de ferramentas</h2>
            </div>

            <div className="space-y-10 w-1/2">
              <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-0">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0"><JavaScript size="64"/></div>
                  <div>
                    <h3 className="text-3xl text-custom-black font-medium mb-1">JavaScript</h3>
                    <p className="text-gray-400 text-lg">Linguagem de programação</p>
                  </div>
                </div>
                <div className="relative z-0 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-main-green"
                    style={{ width: `${95}%` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 z-10 px-3 rounded-full bg-main-green flex items-center justify-center text-sm font-medium text-custom-black"
                    style={{ left: `${95}%`, transform: `translate(-50%, -50%)` }}
                  >
                    {95}%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-0">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0"><Node size="64"/></div>
                  <div>
                    <h3 className="text-3xl text-custom-black font-medium mb-1">NodeJS</h3>
                    <p className="text-gray-400 text-lg">JavaScript para back-end</p>
                  </div>
                </div>
                <div className="relative z-0 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-main-green"
                    style={{ width: `${91}%` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 z-10 px-3 rounded-full bg-main-green flex items-center justify-center text-sm font-medium text-custom-black"
                    style={{ left: `${91}%`, transform: `translate(-50%, -50%)` }}
                  >
                    {91}%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-0">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0"><TypeScript size="64"/></div>
                  <div>
                    <h3 className="text-3xl text-custom-black font-medium mb-1">TypeScript</h3>
                    <p className="text-gray-400 text-lg">Linguagem de programação</p>
                  </div>
                </div>
                <div className="relative z-0 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-main-green"
                    style={{ width: `${88}%` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 z-10 px-3 rounded-full bg-main-green flex items-center justify-center text-sm font-medium text-custom-black"
                    style={{ left: `${88}%`, transform: `translate(-50%, -50%)` }}
                  >
                    {88}%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-0">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0"><React size="64"/></div>
                  <div>
                    <h3 className="text-3xl text-custom-black font-medium mb-1">React</h3>
                    <p className="text-gray-400 text-lg">Biblioteca front-end</p>
                  </div>
                </div>
                <div className="relative z-0 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-main-green"
                    style={{ width: `${92}%` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 z-10 px-3 rounded-full bg-main-green flex items-center justify-center text-sm font-medium text-custom-black"
                    style={{ left: `${92}%`, transform: `translate(-50%, -50%)` }}
                  >
                    {92}%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-0">
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0"><MongoDB size="64"/></div>
                  <div>
                    <h3 className="text-3xl text-custom-black font-medium mb-1">MongoDB</h3>
                    <p className="text-gray-400 text-lg">Banco de dados</p>
                  </div>
                </div>
                <div className="relative z-0 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-main-green"
                    style={{ width: `${85}%` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 z-10 px-3 rounded-full bg-main-green flex items-center justify-center text-sm font-medium text-custom-black"
                    style={{ left: `${85}%`, transform: `translate(-50%, -50%)` }}
                  >
                    {85}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-custom-black text-white px-4 py-32">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-2 rounded-full bg-main-green animate-pulse"/>
              {`{ 03 } — Processo`}
            </div>
            <h2 className="font-heading text-6xl mb-8">How it works</h2>

            <div className="space-y-12">
              {/*  #1 */}
              <div className="flex items-start justify-around border-t border-t-slate-700 py-10">
                <div className="inline-block bg-custom-black border border-white/20 rounded-full px-4 py-1 text-sm mb-4">
                  Discovery
                </div>

                <div className="flex items-start justify-evenly w-2/3">
                  <h3 className="font-heading text-4xl mb-4"><span className="text-main-green font-extrabold">/</span> 01</h3>

                  <div className="space-y-3 w-full max-w-lg">
                    <p className="text-xl mb-4">We&apos;ll dive deep into your personal </p>
                    <div className="process-step">
                      <p className="font-medium">Initial Consultation:</p>
                      <p className="text-sm text-white/60">Understand the client&apos;s vision, goals, and target audience.</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Research:</p>
                      <p className="text-sm text-white/60">Analyze competitors and industry trends to gather insights.</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Define Scope:</p>
                      <p className="text-sm text-white/60">Set the project&apos;s objectives, deliverables, and timeline.</p>
                    </div>
                  </div>
                </div>

                <p className="inline-flex items-center gap-2 text-sm text-white/60 mt-6"><Clock />1-3 dias</p>
              </div>

              {/* #2 */}
              <div className="flex items-start justify-around border-t border-t-slate-700 py-10">
                <div className="inline-block bg-custom-black border border-white/20 rounded-full px-4 py-1 text-sm mb-4">
                  Design
                </div>

                <div className="flex items-start justify-evenly w-2/3">
                  <h3 className="font-heading text-4xl mb-4"><span className="text-main-green font-extrabold">/</span> 02</h3>

                  <div className="space-y-3 w-full max-w-lg">
                    <p className="text-xl mb-4">I&apos;ll create mockups that bring your brand to life</p>
                    <div className="process-step">
                      <p className="font-medium">Wireframing:</p>
                      <p className="text-sm text-white/60">Create low-fidelity wireframes to plan out the site&apos;s structure.</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Style Guide Creation:</p>
                      <p className="text-sm text-white/60">Develop a design language including colors, fonts, and UI elements.</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Prototype Development:</p>
                      <p className="text-sm text-white/60">Build clickable prototypes for client feedback.</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Finalize Design:</p>
                      <p className="text-sm text-white/60">Approve the final design with detailed mockups for all pages.</p>
                    </div>
                  </div>
                </div>

                <p className="inline-flex items-center gap-2 text-sm text-white/60 mt-6"><Clock />1-2 semanas</p>
              </div>

              {/* #3 */}
              <div className="flex items-start justify-around border-t border-t-slate-700 py-10">
                <div className="inline-block bg-custom-black border border-white/20 rounded-full px-4 py-1 text-sm mb-4">
                  Build
                </div>

                <div className="flex items-start justify-evenly w-2/3">
                  <h3 className="font-heading text-4xl mb-4"><span className="text-main-green font-extrabold">/</span> 03</h3>

                  <div className="space-y-3 w-full max-w-lg">
                    <p className="text-xl mb-4">Using no-code tools, I&apos;ll construct your site</p>
                    <div className="process-step">
                      <p className="font-medium">Page Construction:</p>
                      <p className="text-sm text-white/60">Build out the website structure using selected tools.</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Content Integration:</p>
                      <p className="text-sm text-white/60">Import and format content (text, images, videos).</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Basic SEO Setup:</p>
                      <p className="text-sm text-white/60">Optimize on-page elements for search engines.</p>
                    </div>
                  </div>
                </div>

                <p className="inline-flex items-center gap-2 text-sm text-white/60 mt-6"><Clock />1 semana</p>
              </div>

              {/* #4 */}
              <div className="flex items-start justify-around border-t border-t-slate-700 py-10">
                <div className="inline-block bg-custom-black border border-white/20 rounded-full px-4 py-1 text-sm mb-4">
                  Launch
                </div>

                <div className="flex items-start justify-evenly w-2/3">
                  <h3 className="font-heading text-4xl mb-4"><span className="text-main-green font-extrabold">/</span> 04</h3>

                  <div className="space-y-3 w-full max-w-lg">
                    <p className="text-xl mb-4">Your site goes live, ready to make an impact</p>
                    <div className="process-step">
                      <p className="font-medium">Client Review:</p>
                      <p className="text-sm text-white/60">Present the site to the client for feedback.</p>
                    </div>
                    <div className="process-step">
                      <p className="font-medium">Revisions:</p>
                      <p className="text-sm text-white/60">Make necessary changes based on client feedback..</p>
                    </div>
                  </div>
                </div>

                <p className="inline-flex items-center gap-2 text-sm text-white/60 mt-6"><Clock />2-3 days</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container grid grid-cols-3 gap-8 px-4 py-8">
          {/* 95+ Card */}
          <div className="w-full bg-main-green rounded-3xl flex flex-col justify-between p-12 mb-4 text-custom-black min-h-60">
            <h2 className="font-heading text-7xl">95+</h2>
            <div className="text-right">
              <p className="font-medium text-lg">Percent</p>
              <p>customer satisfaction</p>
            </div>
          </div>

          {/* 10+ Card */}
          <div className="w-full bg-custom-black rounded-3xl flex flex-col justify-between p-12 mb-4 border border-white/10 min-h-60">
            <h2 className="font-heading text-7xl">10+</h2>
            <div className="text-right">
              <p className="font-medium text-lg">Anos</p>
              <p>de experiência</p>
            </div>
          </div>

          {/* 24+ Card */}
          <div className="w-full bg-white rounded-3xl flex flex-col justify-between p-12 mb-4 text-custom-black min-h-60">
            <h2 className="font-heading text-7xl">23+</h2>
            <div className="text-right">
              <p className="font-medium text-lg">Projetos</p>
              <p>de sucesso</p>
            </div>
          </div>
        </section>

        {/* Testemonials Section */}
        <Testemonials />

        {/* FAQ Section */}
        <section className="bg-gray-50 text-custom-black px-4 py-12">
          <div className="container max-w-3xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="size-2 rounded-full bg-main-green animate-pulse"/>
              {`{ 05 } — FAQ`}
            </div>
            <h2 className="font-heading text-center text-4xl mb-8">Ainda com dúvidas?</h2>

            <div className="space-y-0">
              <div className="faq-item">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500">01/</span>
                    <h3 className="font-medium">What is your typical project timeline?</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="faq-item">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500">02/</span>
                    <h3 className="font-medium">Do you offer ongoing maintenance and support?</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="faq-item">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500">03/</span>
                    <h3 className="font-medium">Can you work with existing brand guidelines?</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="faq-item">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500">04/</span>
                    <h3 className="font-medium">How do you handle revisions and feedback?</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="faq-item">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-gray-500">05/</span>
                    <h3 className="font-medium">How do I get started?</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 text-custom-black px-4 py-12 bg-no-repeat bg-left bg-contain bg-[url(/background/curly_bracket_left_grey.svg)]">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-2 rounded-full bg-main-green animate-pulse"/>
              {`{ 06 } — Contatos`}
            </div>
            <h2 className="font-heading text-4xl mb-8">Estou pela internet</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="w-full bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                <span>E-mail</span>
                <div className="w-10 h-10 rounded-full bg-main-green flex items-center justify-center">
                  <EnvelopeSimple className="h-5 w-5 text-custom-black" />
                </div>
              </div>

              <div className="w-full bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                <span>Instagram</span>
                <div className="w-10 h-10 rounded-full bg-main-green flex items-center justify-center">
                  <InstagramLogo className="h-5 w-5 text-custom-black" />
                </div>
              </div>

              <div className="w-full bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                <span>WhatsApp</span>
                <div className="w-10 h-10 rounded-full bg-main-green flex items-center justify-center">
                  <WhatsappLogo className="h-5 w-5 text-custom-black" />
                </div>
              </div>

              <Link
                href="#"
                className="w-full bg-main-green text-custom-black p-4 rounded-xl flex justify-between items-center"
              >
                <span className="font-medium">Get in touch</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            
          </div>
        </section>

        <section className="relative bg-black py-6">
          <div className="absolute top-0 left-0 z-10 w-64 h-full bg-gradient-to-l from-transparent to-black"></div>
          <div className="absolute top-0 right-0 z-10 w-64 h-full bg-gradient-to-r from-transparent to-black"></div>
          <Statistics />
        </section>
      </main>
      <Footer />
    </>
  )
}

function LeftBracket () {
  return (
    <Image 
      src="/img/curly_bracket_left.svg" width={32} height={187} alt='Left curly bracket'
      className="h-full w-auto flex-none"
    />
  )
}

function RightBracket () {
  return (
    <Image 
      src="/img/curly_bracket_right.svg" width={32} height={187} alt='Right curly bracket'
      className="h-full w-auto flex-none"
    />
  )
}
