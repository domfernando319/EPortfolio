import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max:45,
        scale:1,
        speed: 450
      }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-full">
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, "_blank")} 
              className='rounded-full flex justify-center items-center cursor-pointer black-gradient w-10 h-10'
            >
              <img
                src={github}
                alt="github"
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 '>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((t)=> (
            <p key={t.name} className={`text-[14px] ${t.color}`}>
              #{t.name}
            </p>

          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1)} className='mt-3 text-secondary max-w-3xl leading-[30px] text-[18px]'>
          Take a look at the stuff I've been working on. Here you can find GitHub links, demo links, and the tech I used for each project. 
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((p, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...p}
          />
          // <div>
          //   Currently under development...
          // </div>

        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")