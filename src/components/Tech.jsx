import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const MAX_CANVASES = 16;

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-10">
        {technologies.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex flex-col items-center"
            title={t.name}
            aria-label={t.name}
          >
            {/* icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              {i < MAX_CANVASES && t.icon ? (
                <BallCanvas icon={t.icon} />
              ) : t.icon ? (
                <img
                  src={t.icon}
                  alt={t.name}
                  className="w-full h-full object-contain opacity-90"
                />
              ) : null}
            </div>

            {/* label (navbar style) */}
            <p className="mt-2 text-[11px] sm:text-[12px] font-mova uppercase tracking-[2px] text-dim text-center">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
