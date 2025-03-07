'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/send-email';
import SubmitButton from '@/components/submit-button';
import toast from 'react-hot-toast';

function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 w-[min(100%,38rem)] text-center sm:mb-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='-mt-5 text-gray-700 dark:text-white/80'>
        Contact me at{' '}
        <a
          href='mailto:abdennour-guessoum@hotmail.com'
          className=' -mt-5 text-gray-700 dark:text-white/80'
        >
          abdennour-guessoum@hotmail.com
        </a>{' '}
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully.');
        }}
      >
        <input
          className='borderBlack h-14 rounded-lg px-4 transition-all placeholder-gray-500 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:placeholder-gray-900 dark:focus:bg-opacity-100'
          type='email'
          name='email'
          id='email'
          placeholder='email@example.com'
          required
        />

        {/* Container for textarea and button */}
        <div className='relative'>
          <textarea
            className='borderBlack my-3 h-52 w-full min-w-[20rem] max-w-[38rem] placeholder-gray-500 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:placeholder-gray-900 dark:focus:bg-opacity-100'
            name='message'
            id='message'
            placeholder="welcome, you can write me and i'll reply as soon as possible, thank you ! "
            required
          />
          {/* Submit button positioned at the bottom right */}
          <div className='absolute bottom-4 right-4'>
            <SubmitButton />
          </div>
        </div>
      </form>
    </motion.section>
  );
}

export default Contact;