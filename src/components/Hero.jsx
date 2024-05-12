import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { wramblinwreck } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4169E1]'/>
          <div className='w-1 sm:h-80 h-40'style={{ backgroundImage: 'linear-gradient(to bottom, #4169E1, #010024  )' }}/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, <span className='text-[#4169E1]'></span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} >Welcome to my&nbsp;developer portfolio!<br className='sm:block hidden'/></p>

        </div>
        
        <div className='hidden md:flex ml-5 rounded-full flex justify-center items-center white-gradient w-[250px] h-[250px]'>
          <img 
            src={wramblinwreck} 
            alt={"test"} 
              className='rounded-full w-[93%] h-[93%] object-contain'
          />
        </div>

        {/* <div 
          onClick={() => window.open(source_code_link, "_blank")} 
          className='rounded-full flex justify-center items-center cursor-pointer black-gradient w-10 h-10'
        >
          <img
            src={github}
            alt="github"
            className='w-3/4 h-3/4 object-contain'
          />
        </div> */}

      </div>
        


      {/*Computer Canvas Component  */}
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}

              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero