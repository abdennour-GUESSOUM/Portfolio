import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import gitletImg from '@/public/gitlet.png';
import intakhibdzImg from '@/public/intakhibdz.png';
import morphImg from '@/public/morph.png';
import ibkrStatementParserImg from '@/public/ibkrStatementParser.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const introText = `**Hello, I'm Abdennour.** A **Computer Science** student passionate about **web UI/UX development** and **Embedded Systems**. I create *intuitive, elegant, and user-friendly solutions*.

My focus is on **UI/UX for Embedded Systems**.`;

export const aboutText = `Student in Computer Science Master’s Degree at the University of Bretagne Occidentale, I am looking for a software development internship of at least 2 months where I can apply my technical skills to innovative projects. Convinced of the importance of long-term commitment, I would also be delighted to consider an apprenticeship to actively contribute to your objectives. 
Available starting from March 31, 2025, I will fully commit to any mission entrusted to me.`;
export const experiencesData = [
  {
    title: 'Bachelor’s Degree in Computer Science',
    location: 'University of Badji Mokhtar, Annaba, Algeria',
    description: 
      'Fundamental training in computer science, algorithms, programming (C & Java), databases, operating systems, and software engineering.',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2022',
  },
  {
    title: 'Master’s Degree in Embedded Systems and Mobility',
    location: 'University of Badji Mokhtar, Annaba, Algeria',
    description: 
      'Specialization in embedded systems, both hardware and software co-design, real-time development, IoT, and communication protocols.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2024',
  },
  {
    title: 'Master Computer Science – Embedded Software Systems',
    location: 'University of Bretagne Occidentale, Brest, France',
    description: 
      'Ongoing, software development for critical systems using Ada and C, parallel computing using PVM,OpenMP and CUDA, and embedded tools like Linux and Systemd.',
    icon: React.createElement(LuGraduationCap),
    date: '2024 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'Apple Journal',
    description:
      'A desktop application replicating Apple’s Journal app, built with Kotlin and Compose Multiplatform. It features an intuitive UI for tracking daily memories and events.',
    tags: ['Kotlin', 'Compose Multiplatform', 'IntelliJ IDEA', 'UI/UX Design'],
    imageUrl: gitletImg, // Replace with your image import
  },
  {
    title: 'Blockchain Voting App',
    description:
      'A secure mobile voting application leveraging blockchain and NFC for multi-factor authentication.The app includes facial recognition and private key security.',
    tags: ['Flutter', 'Dart', 'Solidity', 'Blockchain', 'NFC', 'Firebase'],
    imageUrl: intakhibdzImg, // Replace with your image import
  }
] as const;


export const skillsData = [
  // Core Languages (from CV)
  'C',
  'Java',
  'Python',
  'Kotlin',
  'Dart',
  'Solidity',
  'JavaScript',
  'TypeScript',
  'PHP',
  'VHDL',
  'Ada',

  // Frontend & UI (your additions + CV)
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Bootstrap',
  'jQuery',
  'Babylon.js',
  'Framer Motion',

  // Mobile & Cross-Platform (CV highlights)
  'Flutter',
  'Jetpack Compose',
  'Compose Multiplatform',
  'Android Studio',

  // Backend & Tools
  'Node.js',
  'Laravel',
  'Git',
  'GitLab',

  // Data Science & AI (from CV)
  'TensorFlow',
  'Keras',
  'sklearn',

  // Databases
  'MySQL',
  'SQLite',
  'Firebase',
  'MongoDB',

  // Embedded/Systems & Tools (CV focus)
  'Linux',
  'OpenMP',
  'CUDA',
  'MATLAB',
  'Arduino',
  'Quartus',
  'Modelsim',
  'Vivado',
  'Truffle Suite',

  // IDEs & Misc
  'IntelliJ IDEA',
  'Eclipse',
  'VSCode',
  'Godot Engine',
] as const;