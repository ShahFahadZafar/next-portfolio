import React from 'react'
import { CustomLink } from './CustomLink'
import Image from 'next/image'

export  function HeroSection() {
  return (
    <section id="home" className='grid items-center md:grid-cols-2 h-[calc(100vh-70px)] max-h-[678px] scroll-mt-28'>
        <div>
            <p className='text-lg mb-1 '>Hii 👏, I am</p>
            <h1 className='font-title tracking-wider text-3xl sm:text-6xl -ml-0.5'>Full Stack Developer</h1>
            <p className='text-zinc-300 mt-2'>Passionate about building innovative solutions and delivering exceptional user experiences.</p>
            <CustomLink href="#project" className='mt-4'>My Work</CustomLink>
        </div>
        <div className='hidden md:flex w-full h-full  relative overflow-hidden'>
            <Image src="/portfolio-bgrv.png"
            alt="portfolio image"
            width={500}
            height={500}
            className='object-cover mt-2 object-top w-full h-full rounded-full self-end' />
            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent'></div>
        </div>
    </section>
  )
}
