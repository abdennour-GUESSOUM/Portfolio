import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import gitletImg from '@/public/gitlet.png';
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
    title: 'Open Source Society University',
    location: 'Online',
    description:
      'Where I built solid understanding of programming paradigms, data structures and algorithms, operating systems, and computer networking.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 – 2024',
  },
  {
    title: 'Computer Programming Diploma',
    location: 'Algonquin College, Ottawa, ON',
    description:
      "I'm now a Computer Programming student at Algonquin College. My tech stack is React, Next.js, and MongoDB. I'm open to co-op opportunities.",
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Morph',
    description:
      'A smart AI-powered essay editor. Users can get polished essays following a multi-step editing process with just a few clicks.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: morphImg,
  },
  {
    title: 'IBKR Statement Parser',
    description:
      `Automated conversion tool from IBKR's export to Portfolio Profit-compatible CSV format.`,
    tags: ['Go', 'Abstract Data Type', 'Functional Programming', 'File I/O'],
    imageUrl: ibkrStatementParserImg,
  },
  {
    title: 'Gitlet',
    description:
      'An object-oriented implementation of Git. Supports branch merging with automatic conflict resolution.',
    tags: ['Java', 'Serialization', 'Data Structures', 'Error Handling'],
    imageUrl: gitletImg,
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