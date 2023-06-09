import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle ,AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
export default function Home() {
  return (
    <div>

    <Head>
      <title>Mohammad Goalam Faruk Ovi</title>
      <link rel="icon" href="./favicon.ico"/>
    </Head>
    
    <main className='bg-gradient-to-r from-gray-950 to bg-gray-800 text-white px-10'>
     <section className=''>
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to bg-gray-700 font-bitter'> ov1faruk</h1>
        <ul className='flex items-center'>
          <li></li>
          
          <li> <BsFillMoonStarsFill className='cursor-pointer text-2xl text-gray-50 mr-4'/> </li>
          <li><a className='bg-gradient-to-r  from-gray-950 to bg-gray-800 text-white px-6 py-2 rounded ml-2' href="#resume">Resume</a></li>

        </ul>
      </nav>

      <div className=''>
        <h3 className='text-5xl text-center mb-10 font-bitter text-2xl text-transparent bg-clip-text bg-gradient-to-r  from-gray-600 to bg-gray-400 font-bitter'>Mohammad Golam Fauk Ovi</h3>

        <p className='mb-5 font'>
        Hi there! My name is Oviand I'm a front-end developer with expertise in a wide range of technologies. I specialize in <span className='text-yellow-300'>React, Redux, Next.js, CSS, JavaScript, and more</span>,and I'm always looking for new and exciting ways to push the boundaries of what's possible on the web.
        </p>
        <p>
        
        If you're looking for a skilled and experienced front-end developer who can help you create engaging and innovative web experiences, then look no further! Get in touch today and let's start building something amazing together.
        </p>

      </div>
   

      <div className='flex justify-center text-4xl gap-16 py-8 text-gray-600'>
      <AiFillGithub/>
      <AiFillLinkedin/>
      <AiFillTwitterCircle/>
      </div>
     
 
      <div className='relative overflow-hidden bg-gradient-to-r from-gray-950 to bg-gray-800  rounded-full w-60 h-60 mx-auto'>
        <Image className='mx-auto' src="/ov1.png" width={300} height={300} alt="Picture of the author"/>
      </div>
   

     </section>

     <section className=''>
      <div>
        <h3 className='font-bitter text-3xl text-transparent bg-clip-text bg-gradient-to-r  from-gray-600 to bg-gray-400 mt-10 text-center'>Services I Offer</h3>
      </div>
      <div>
        <h3 className='font-bitter text-3xl text-transparent bg-clip-text bg-gradient-to-r  from-gray-600 to bg-gray-400 mt-10 text-center'>Services I Offer</h3>
      </div>
     </section>
      
      </main>

      
</div>
  )
}
