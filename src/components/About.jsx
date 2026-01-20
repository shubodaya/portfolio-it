import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'
      >
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>
        <div className='flex flex-wrap gap-3'>
          <a
            href='https://www.linkedin.com/in/shubodaya'
            target='_blank'
            rel='noreferrer'
            className='bg-tertiary p-2 rounded-lg text-white font-bold shadow-md shadow-primary hover:bg-black-200 transition-colors'
            aria-label='LinkedIn'
          >
            <span className='sr-only'>LinkedIn</span>
            <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
              <path d='M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.46V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.2 2.34 4.2 5.38v6.36zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z' />
            </svg>
          </a>
          <a
            href='https://github.com/shubodaya'
            target='_blank'
            rel='noreferrer'
            className='bg-tertiary p-2 rounded-lg text-white font-bold shadow-md shadow-primary hover:bg-black-200 transition-colors'
            aria-label='GitHub'
          >
            <span className='sr-only'>GitHub</span>
            <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
              <path d='M12 .5C5.65.5.5 5.78.5 12.3c0 5.22 3.3 9.64 7.87 11.2.58.11.8-.26.8-.58 0-.29-.01-1.05-.02-2.06-3.2.72-3.88-1.6-3.88-1.6-.52-1.36-1.28-1.72-1.28-1.72-1.05-.74.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.82 2.7 1.3 3.36 1 .1-.76.4-1.3.73-1.6-2.55-.3-5.23-1.31-5.23-5.84 0-1.29.45-2.35 1.2-3.18-.12-.3-.52-1.52.11-3.17 0 0 .98-.32 3.2 1.22a10.9 10.9 0 0 1 2.92-.4c.99 0 1.99.14 2.92.4 2.22-1.54 3.2-1.22 3.2-1.22.63 1.65.23 2.87.11 3.17.75.83 1.2 1.89 1.2 3.18 0 4.54-2.69 5.53-5.25 5.82.42.37.79 1.1.79 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.21.7.81.58 4.57-1.56 7.86-5.98 7.86-11.2C23.5 5.78 18.35.5 12 .5z' />
            </svg>
          </a>
          <a
            href='https://docs.google.com/document/d/1Fw2WXoLE5UCQxK5Q55totEM4WCBsB81f02wrHCws3q4/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className='bg-tertiary py-2 px-4 rounded-lg text-white font-bold shadow-md shadow-primary hover:bg-black-200 transition-colors'
          >
            Resume
          </a>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an IT professional with 3+ years of experience in 24x7 enterprise
        support, resolving incidents and service requests within SLAs using
        ITIL-aligned processes. My background includes Active Directory,
        Windows systems, Microsoft 365, and enterprise networking. I value
        clear communication with stakeholders, strong documentation, and
        hands-on troubleshooting to restore service quickly and safely.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
