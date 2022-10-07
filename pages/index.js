import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsMoonStarsFill } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import tnidhi from "../public/nidhi.png"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nidhi's Portfolio</title>
        <meta name='description' content='nidhi' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-5 sm:mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons uppercase dark:text-white'>TechyNidhi</h1>
            <ul className='flex items-center'>
              <li><BsMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl dark:text-white' /></li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 md:ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center py-10'>
            <h2 className='text-4xl py-2 text-teal-600 font-medium'>Nidhi Kumari</h2>
            <h3 className='text-2xl py-2 font-semibold dark:text-gray-100'>Developer & Designer</h3>
            <p className='font-medium py-3 leading-8 text-gray-800 dark:text-gray-300'>Freelancer providing services for programming and development needs. Join me down below and let's get cracking!</p>
          </div>
          <div className='flex text-5xl justify-center gap-14 py-1 text-gray-600 cursor-pointer dark:text-gray-100'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto sm:w-72 mt-10' >
            <Image className='image-nidhi rounded-lg hover:animate-[wiggle_1s_ease-in-out_infinite]' src={tnidhi} />
          </div>

        </section>

        <section>
          <div className='mt-10'>
            <h3 className='text-3xl py-1 font-semibold dark:text-gray-100'>My Projects</h3>
            <p className='font-medium py-3 leading-8 text-gray-800 dark:text-gray-300'>
              Since, the beginning of my journey as a freelance design developer, I've done remote work for an NGO.
            </p>
          </div>

        </section>
        <section>
          <div className='mt-10'>
            <h3 className='text-3xl py-1 font-semibold dark:text-gray-100'>Services I Offer</h3>
            <p className='font-medium py-3 leading-8 text-gray-800 dark:text-gray-300'>
              Since, the beginning of my journey as a freelance design developer, I've done remote work for an NGO.
            </p>
          </div>

        </section>

      </main>


    </div>
  )
}
