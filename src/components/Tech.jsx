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

      <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {technologies.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="flex flex-col items-center"
            title={t.name}
            aria-label={t.name}
          >
            {/* icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
              {i < MAX_CANVASES && t.icon ? (
                <BallCanvas icon={t.icon} />
              ) : t.icon ? (
                <img
                  src={t.icon}
                  alt={t.name}
                  className="w-full h-full object-contain opacity-90 max-w-full max-h-full"
                />
              ) : null}
            </div>

            {/* label (navbar style) */}
            <p className="mt-2 text-[10px] sm:text-[11px] md:text-[12px] font-mova uppercase tracking-[2px] text-dim text-center max-w-[80px] sm:max-w-none">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
