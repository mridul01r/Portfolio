import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-[#050816]">
      {/* Background patterns - subtle wave animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#915EFF]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#915EFF]/5 to-transparent"></div>
      </div>
      
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white font-bold`}>
            Hi, I'm <span className='text-[#915EFF]'>Mridul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 font-medium`}>
            Full-Stack Developer & <br className='sm:block hidden' />
            AI/ML Engineering Student
          </p>
          <div className="mt-6 text-secondary text-lg max-w-2xl leading-relaxed">
            I specialize in building modern web applications with the MERN stack,
            creating responsive interfaces, and developing AI-driven solutions.
            Currently pursuing Integrated MTech in AI and Machine Learning at VIT Bhopal.
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { name: 'React.js', color: 'bg-blue-500/20 text-blue-300' },
              { name: 'Node.js', color: 'bg-green-500/20 text-green-300' },
              { name: 'MongoDB', color: 'bg-green-600/20 text-green-300' },
              { name: 'Express.js', color: 'bg-gray-500/20 text-gray-300' },
              { name: 'Next.js', color: 'bg-gray-700/20 text-gray-200' },
              { name: 'Tailwind CSS', color: 'bg-cyan-500/20 text-cyan-300' }
            ].map((tech) => (
              <span key={tech.name} className={`px-4 py-2 ${tech.color} rounded-lg text-sm font-medium border border-opacity-20`}>
                {tech.name}
              </span>
            ))}
          </div>
          
          {/* Social links with icons */}
          <div className="mt-10 flex items-center gap-6">
            <a href="https://github.com/mridul01r" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors">
              <FaGithub size={22} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mridul-rakhecha-926a41365/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors">
              <FaLinkedin size={22} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="mailto:mridulrakhecha@gmail.com"
               className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors">
              <HiMail size={24} />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Visual decoration instead of 3D model */}
      <div className="absolute right-0 bottom-0 h-full w-full md:w-1/2 z-[1]">
        <div className="absolute right-0 bottom-0 w-full h-full">
          <div className="absolute right-10 bottom-10 w-96 h-96 bg-[#915EFF]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute right-40 bottom-20 w-64 h-64 bg-[#915EFF]/10 rounded-full filter blur-2xl"></div>
          
          {/* Add more decorative elements if desired */}
          <div className="absolute right-20 bottom-40 w-32 h-32 bg-purple-500/5 rounded-full animate-pulse"></div>
          <div className="absolute right-60 bottom-60 w-20 h-20 bg-indigo-500/10 rounded-full animate-ping" 
               style={{ animationDuration: '4s' }}></div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2 hover:border-white transition-colors'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#915EFF] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;  