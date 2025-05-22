'use client'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Image from 'next/image'

export default function Services () {
  const options = {
    type: 'loop',
    pagination: false,
    arrows: false,
    perPage: 5,
    resetProgress: false,
    autoScroll: {
      autoStart: true,
      speed: 1.5,
      pauseOnHover: true,
    },
  }

  const statistics = [
    <>
      <LeftBracket/>
      <RightBracket />
    </>,
    <>
      <LeftBracket/>
      <span>SITES INSTITUCIONAIS</span>
      <RightBracket />
    </>,
    <>
      <LeftBracket/>
      <RightBracket />
    </>,
    <>
      <LeftBracket/>
      <span>BLOGS</span>
      <RightBracket />
    </>,
    <>
      <LeftBracket/>
      <RightBracket />
    </>,
    <>
      <LeftBracket/>
      <span>LOJAS VIRTUAIS</span>
      <RightBracket />
    </>,
    <>
      <LeftBracket/>
      <RightBracket />
    </>,
    <>
      <LeftBracket/>
      <span>LANDING PAGES</span>
      <RightBracket />
    </>,
    <>
    <LeftBracket/>
    <RightBracket />
  </>,
  <>
    <LeftBracket/>
    <span>SISTEMAS WEB</span>
    <RightBracket />
  </>,
  <>
    <LeftBracket/>
    <RightBracket />
  </>,
  <>
    <LeftBracket/>
    <span>MOBILE APP</span>
    <RightBracket />
  </>
  ]

  return (
    <Splide extensions={{AutoScroll}} options={options} hasTrack={ false }>
      <SplideTrack className="text-center text-white text-xl font-semibold">
        {
          statistics.map((text, index) => (
            <SplideSlide key={index} className="flex justify-center items-center">
              <p className='flex flex-row'>{text}</p>
            </SplideSlide>
          ))
        }
      </SplideTrack>
    </Splide>
  )
}

function LeftBracket () {
  return (
    <Image 
      src="/img/curly_bracket_left.svg" width={32} height={187} alt='Left curly bracket'
      className="h-8 inline"
    />
  )
}

function RightBracket () {
  return (
    <Image 
      src="/img/curly_bracket_right.svg" width={32} height={187} alt='Right curly bracket'
      className="h-8 inline"
    />
  )
}