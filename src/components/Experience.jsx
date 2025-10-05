import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {/** latest first */}
          {experiences
            .slice()
            .reverse()
            .map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
        </VerticalTimeline>

        {/* CTA under the timeline */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3">
          <motion.p
            className="font-beckman uppercase tracking-[2px] text-center bg-[#2b3a4a]
                       text-white text-[18px] sm:text-[20px] px-4 py-2 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            If you feel like I can be part of your exciting journey,&nbsp;
            <a href="#contact" className="underline underline-offset-4">let’s connect</a>.
            {/* or keep a subtle resume link:
            &nbsp;or&nbsp;
            <a href="/resume.pdf" download="resume_YegnaNithinJupudi.pdf" className="underline underline-offset-4">
              grab my resume
            </a> */}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
