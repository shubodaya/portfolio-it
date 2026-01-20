import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ item, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-6 rounded-2xl w-full border border-white/10 shadow-card'
      >
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-white text-[20px] font-bold'>{item.degree}</h3>
            <p className='text-secondary text-[15px] font-semibold'>
              {item.school}
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            <span className='px-3 py-1 rounded-full border border-white/20 text-secondary text-[12px]'>
              {item.location}
            </span>
            <span className='px-3 py-1 rounded-full border border-white/20 text-secondary text-[12px]'>
              {item.date}
            </span>
            {item.details.map((detail, detailIndex) => (
              <span
                key={`education-detail-pill-${detailIndex}`}
                className='px-3 py-1 rounded-full border border-white/20 text-secondary text-[12px]'
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className='mt-10 grid gap-6 sm:grid-cols-2'>
        {education.map((item, index) => (
          <EducationCard key={item.degree} item={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
