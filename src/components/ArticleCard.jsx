import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { fadeIn } from '../utils/motion';

const ArticleCard = ({ index, title, description, author, image, link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }} className="bg-white p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(link, "_blank")}
              className='rounded-full flex justify-center items-center cursor-pointer black-gradient w-10 h-10'
            >
              <img
                src={github}
                alt="link"
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-primary font-bold text-[24px]'>{title}</h3>
          <h4 className='text-gray-600 text-[16px]'>{author}</h4>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ArticleCard;