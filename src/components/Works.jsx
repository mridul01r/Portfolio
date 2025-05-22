import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Project data from resume
const projects = [
  {
    name: "Babble – Full-Stack Social Media App",
    description: 
      "A full-stack social media prototype with user authentication, real-time posting, commenting, liking, and notifications. Features 10+ RESTful API endpoints, 30+ reusable React components, and optimized data fetching with React Query.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "node.js",
        color: "text-green-500",
      },
      {
        name: "express",
        color: "text-gray-400",
      },
      {
        name: "tailwind",
        color: "text-cyan-400",
      },
      {
        name: "jwt",
        color: "text-red-400",
      },
    ],
    image: "/src/assets/project-1.png", // You'll need to replace with actual image
    source_code_link: "https://github.com/mridul01r/babble",
    period: "Feb 2025 - Present",
    status: "Prototype"
  },
  {
    name: "AI Mock Interview System",
    description:
      "An AI-driven interview platform that helps students improve interview performance through realistic simulations. Uses Vapi for conversational agents, supports 5+ industry categories, and includes Firebase authentication and mobile-first design.",
    tags: [
      {
        name: "next.js",
        color: "text-white",
      },
      {
        name: "typescript",
        color: "text-blue-400",
      },
      {
        name: "firebase",
        color: "text-orange-400",
      },
      {
        name: "tailwind",
        color: "text-cyan-400",
      },
      {
        name: "vapi",
        color: "text-purple-400",
      },
    ],
    image: "/src/assets/project-2.png", // You'll need to replace with actual image
    source_code_link: "https://github.com/mridul01r/ai-mock-interview",
    period: "Apr 2025 - Present",
    status: "Beta Testing"
  },
  {
    name: "Dev Portfolio – Interactive 3D Website",
    description:
      "A modern, interactive 3D portfolio website built with Three.js and React, featuring animated project cards, smooth scrolling, and responsive design. Implements custom 3D models, Framer Motion animations, and email integration with EmailJS.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "three.js",
        color: "text-yellow-400",
      },
      {
        name: "tailwind",
        color: "text-cyan-400",
      },
      {
        name: "framer-motion",
        color: "text-purple-400",
      },
      {
        name: "emailjs",
        color: "text-red-400",
      },
    ],
    image: "/src/assets/project-3.png", // You'll need to replace with actual image
    source_code_link: "https://github.com/mridul01r/dev-portfolio",
    period: "Mar 2025 - May 2025",
    status: "Completed"
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  period,
  status,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={`${name} project thumbnail`}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='GitHub repository link'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-grow'>
          <div className="flex justify-between items-start">
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <span className="text-sm text-purple-400 font-medium px-2 py-1 bg-purple-900/30 rounded-full">
              {status}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{period}</p>
          <p className='mt-3 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills in full-stack development and AI integration.
          Each project represents real-world application of my technical expertise in creating
          responsive, feature-rich web applications and innovative AI solutions. My work demonstrates
          proficiency in modern frameworks, database management, and RESTful API development.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");