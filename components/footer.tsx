import React from 'react';

function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; {new Date().getFullYear()} Abdennour GUESSOUM. All rights reserved.
      </small>
    </footer>
  );
}

export default Footer;
