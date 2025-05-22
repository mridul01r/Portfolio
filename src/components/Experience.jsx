import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import existing icons from assets
import { web, backend, creator, mobile } from "../assets";

// Experiences data based on the resume
const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Concept Information System Pvt. Ltd.",
    icon: web, // Web development related icon
    iconBg: "#383E56",
    date: "Nov 2023 - Feb 2024",
    points: [
      "Engineered a responsive and functional client-facing website from concept to deployment, developing 5+ key pages and sections to significantly boost client engagement and online presence.",
      "Implemented 3 core features, including content modules and interactive forms, to optimize customer interaction workflows and directly support lead generation efforts.",
      "Ensured robust cross-browser compatibility across 4+ major browser types (Chrome, Firefox, Safari, Edge) and achieved high mobile responsiveness, maximizing website performance and user experience on multiple device types.",
    ],
  },
  {
    title: "Integrated MTech in Artificial Intelligence and Machine Learning",
    company_name: "VIT Bhopal University, Madhya Pradesh",
    icon: backend, // AI/ML backend development related icon
    iconBg: "#E6DEDD",
    date: "Aug 2021 - May 2026 (Expected)",
    points: [
      "Pursuing an integrated Master's degree in AI and Machine Learning with a Cumulative GPA of 8.2/10.",
      "Focused on developing strong technical foundations in AI/ML algorithms, data structures, and software development methodologies.",
      "Applying classroom knowledge to real-world projects with emphasis on web development and AI integration.",
    ],
  },
  {
    title: "Higher Secondary Education",
    company_name: "I.L.V.A Higher Secondary School, Madhya Pradesh",
    icon: creator, // Education/learning related icon
    iconBg: "#383E56",
    date: "Apr 2018 - Apr 2021",
    points: [
      "Completed CBSE 12th board with 81.0% marks (Apr 2020 - Apr 2021).",
      "Completed CBSE 10th board with 84.6% marks (Apr 2018 - Apr 2019).",
      "Developed strong academic foundation with focus on mathematics and science.",
    ],
  },
];

// Certifications data based on the resume
const certifications = [
  {
    title: "MERN Stack Development",
    company_name: "SmartBridge",
    icon: web, // Full-stack development related icon
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Built and tested a payment processing system using MongoDB and Express.js.",
      "Developed practical expertise in building full-stack applications with the MERN stack.",
    ],
  },
  {
    title: "MongoDB Developer Certification",
    company_name: "MongoDB University",
    icon: backend, // Database/backend related icon
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Learned query optimization, replication, and sharding for scalability.",
      "Mastered database design principles and performance optimization techniques.",
    ],
  },
  {
    title: "Full Stack Web Development Bootcamp",
    company_name: "Angela Yu (Udemy)",
    icon: mobile, // Mobile/responsive development icon
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Completed projects focusing on front-end frameworks and RESTful API integration.",
      "Built multiple web applications implementing modern development practices.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience & Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications.
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {certifications.map((certification, index) => (
            <ExperienceCard
              key={`certification-${index}`}
              experience={certification}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");