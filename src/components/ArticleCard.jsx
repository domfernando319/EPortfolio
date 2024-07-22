import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { fadeIn } from '../utils/motion';

const ArticleCard = ({ index, title, description, date, author, pfp, image, id }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='max-w-sm max-h-sm'>
      <Tilt options={{
        max: 25,
        scale: 1,
        speed: 450,
      }} className="bg-white p-8 rounded-3xl sm:w-[480px] w-full min-h-[600px]">
        <div className='relative w-full h-[300px]'>
          <img
            src={image === '' ? 'https://picsum.photos/200/300' : image}
            alt="image"
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            
          </div>
        </div>
        <div className='mt-5'>
          <div className='flex justify-between '>
            <h3 className='text-primary font-bold text-[24px]'>{title}</h3>
            <div
              className='rounded-full flex justify-center items-center cursor-pointer black-gradient w-12 h-12'
            >
              <img
                src={pfp}
                alt="link"
                className='m-2 w-[90%] h-[90%] rounded-3xl object-contain'
              />
            </div>
          </div>
          <h4 className='text-gray-600 text-[16px] space-between'>
            <span className='mr-6'>{author}</span>
            {date}
          </h4>
          <p className='mt-2 text-primary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ArticleCard;