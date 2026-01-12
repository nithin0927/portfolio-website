import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  sponsor,
  sponsorLink,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}
      flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div className="absolute inset-0 z-10 bg-jetLight/50 rounded-[24px]" />
      <img src={image} alt={name} className="absolute w-full h-full object-cover rounded-[24px]" />

      {active !== id ? (
        <div className="absolute top-3 right-2 z-20 flex items-start justify-end h-full">
          <h3
            className="font-extrabold font-beckman uppercase text-timberWolf tracking-[0.5px]
                       whitespace-nowrap leading-none text-[clamp(15px,2.5vw,20px)]
                       -rotate-90 origin-right"
            title={name}
          >
            {name}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
          {repo ? (
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(repo, '_blank');
                }}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full
                           flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8]"
              >
                <img src={github} alt="source code" className="w-4/5 h-4/5 object-contain" />
              </div>
            </div>
          ) : null}

          <h2 className="font-bold text-[clamp(18px,2.6vw,32px)] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem] max-w-[90%] leading-tight break-words">
            {name}
          </h2>

          <div className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
            {sponsor && sponsorLink && (
              <p className="mb-2">
                Sponsored by{' '}
                <a
                  href={sponsorLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-french hover:text-taupe underline underline-offset-2 transition-colors"
                >
                  {sponsor}
                </a>
              </p>
            )}
            <p>{description}</p>
          </div>

          {demo ? (
            <button
              className="live-demo flex justify-between sm:text-[16px] text-[14px] text-timberWolf
                         font-bold font-beckman items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1
                         sm:w-[138px] sm:h-[50px] w-[125px] h-[46px] rounded-[10px] glassmorphism
                         sm:mt-[22px] mt-[16px] hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                window.open(demo, '_blank');
              }}
              onMouseOver={(e) => {
                const img = e.currentTarget.querySelector('.btn-icon');
                if (img) img.setAttribute('src', pineappleHover);
              }}
              onMouseOut={(e) => {
                const img = e.currentTarget.querySelector('.btn-icon');
                if (img) img.setAttribute('src', pineapple);
              }}
            >
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button>
          ) : null}
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    // Full-bleed background wrapper (escapes the SectionWrapper max width)
    <div 
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat -mt-[6rem]" 
  style={{ backgroundImage: "url('/assets/backgrounds/techabgpt.jpg')" }}
>
  {/* dark overlay so text is readable */}
  <div className="absolute inset-0 bg-black/40" />

  {/* actual content on top */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>Case Studies</p>
      <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
    >
      These projects showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects. Learn more about them on my{' '}
      <a 
        href="https://www.linkedin.com/in/yegnanithin/" 
        target="_blank" 
        rel="noreferrer"
        className="text-french hover:text-taupe underline underline-offset-4 transition-colors"
      >
        LinkedIn
      </a>.
    </motion.p>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          index={index}
          {...project}
          active={active}
          handleClick={setActive}
        />
      ))}
    </motion.div>
  </div>
</div>
  );
};

export default SectionWrapper(Projects, 'projects');
