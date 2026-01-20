import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            className='mt-12 flex flex-col gap-8'
            action='https://api.web3forms.com/submit'
            method='POST'
          >
            <input
              type='hidden'
              name='access_key'
              value='6949e0cb-d280-4f91-94aa-f80685b608a9'
            />
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                placeholder="What's your name?"
                required
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                placeholder="What's your email address?"
                required
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                placeholder='How can I help you?'
                required
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <div className='mt-10 flex justify-center flex-wrap gap-4'>
        <a
          href='https://www.linkedin.com/in/shubodaya'
          target='_blank'
          rel='noreferrer'
          className='bg-tertiary p-3 rounded-lg text-white font-bold shadow-md shadow-primary hover:bg-black-200 transition-colors'
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
          className='bg-tertiary p-3 rounded-lg text-white font-bold shadow-md shadow-primary hover:bg-black-200 transition-colors'
          aria-label='GitHub'
        >
          <span className='sr-only'>GitHub</span>
          <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
            <path d='M12 .5C5.65.5.5 5.78.5 12.3c0 5.22 3.3 9.64 7.87 11.2.58.11.8-.26.8-.58 0-.29-.01-1.05-.02-2.06-3.2.72-3.88-1.6-3.88-1.6-.52-1.36-1.28-1.72-1.28-1.72-1.05-.74.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.82 2.7 1.3 3.36 1 .1-.76.4-1.3.73-1.6-2.55-.3-5.23-1.31-5.23-5.84 0-1.29.45-2.35 1.2-3.18-.12-.3-.52-1.52.11-3.17 0 0 .98-.32 3.2 1.22a10.9 10.9 0 0 1 2.92-.4c.99 0 1.99.14 2.92.4 2.22-1.54 3.2-1.22 3.2-1.22.63 1.65.23 2.87.11 3.17.75.83 1.2 1.89 1.2 3.18 0 4.54-2.69 5.53-5.25 5.82.42.37.79 1.1.79 2.22 0 1.6-.01 2.9-.01 3.3 0 .32.21.7.81.58 4.57-1.56 7.86-5.98 7.86-11.2C23.5 5.78 18.35.5 12 .5z' />
          </svg>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
