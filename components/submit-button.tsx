import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='group flex h-[2.5rem] w-[7rem] items-center justify-center gap-2 rounded-full bg-gray-900 px-4 mb-2.5 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65'    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
        </>
      )}
    </button>
  );
}

export default SubmitButton;