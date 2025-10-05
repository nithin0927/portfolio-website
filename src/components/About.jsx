import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="bg-white rounded-xl shadow-card p-6 hover:shadow-lg hover:-translate-y-0.5 transition will-change-transform"
    >
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt={title} className="w-14 h-14 object-contain mb-4" />
        <h3 className="font-beckman text-eerieBlack text-[16px] tracking-wide">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative bg-section-light py-20 sm:py-24">
      {/* Optional subtle grain overlay; keep parent relative */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" style={{ backgroundImage: "url('/src/assets/backgrounds/grain.png')" }} /> */}

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Heading */}
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Overview.
        </h2>
      </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 max-w-9xl font-poppins text-[16px] sm:text-[18px] leading-9 text-jetGray"
        >
          I’m an international master’s student in Embedded and Cyber-Physical
          Systems at the University of California, Irvine. Like my degree
          suggests, I work across embedded systems, AI/ML, and cybersecurity. I
          see myself as someone who fixes problems early—often before people
          realize they need fixing—and I strongly believe in a hands-on approach
          to learning. I’m currently a Cybersecurity Intern at Tenet Healthcare.
          I’m seeking hands-on roles where I can use both technical and creative
          skills. I’m open to cybersecurity, embedded systems, and AI/ML roles and I firmly believe in the potential
          of technology to improve lives.
        </motion.p>

        {/* Services grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
