import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap } from '../assets';
import me from '../assets/me.png';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-battleGray font-poppins uppercase drop-shadow-lg`}>
              Hi, I'm{' '}
              <span
                className="sm:text-eerieblack sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase drop-shadow-lg">
                 Nithin 
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`} >
              Graduate student at UCI  <br className="sm:block hidden" />
              focused on Embedded Systems, Cybersecurity, and AI/ML.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 right-0
            w-[200px] h-[250px] xs:w-[220px] xs:h-[280px]
            sm:w-auto sm:h-[40vh] sm:ml-[50vw] sm:right-auto
            md:h-[50vh] md:ml-[40vw]
            lg:h-[60vh] lg:ml-[60vw]
            xl:h-[70vh] xl:ml-[70vw]
            2xl:h-[80vh] 2xl:ml-[76vw]
            grayscale contrast-125 object-contain opacity-80 sm:opacity-100"
            src={me}
            alt="nithin"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
