import { useState } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, certifications } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn, staggerContainer } from '../utils/motion';

const MAX_CANVASES = 16;

const CertificationCard = ({
  id,
  name,
  issuer,
  issuedDate,
  expiryDate,
  credentialId,
  status,
  expectedCompletion,
  image,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}
      flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow transition-all duration-300`}
      onClick={() => handleClick(id)}
    >
      <div className="absolute inset-0 z-10 bg-jetLight/50 rounded-[24px]" />
      <img src={image} alt={name} className="absolute w-full h-full object-contain rounded-[24px] bg-jetLight/30" />

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
          <h2 className="font-bold text-[clamp(18px,2.6vw,32px)] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem] max-w-[90%] leading-tight break-words">
            {name}
          </h2>

          <div className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px] mt-4">
            <p className="mb-2"><span className="font-semibold">Issuer:</span> {issuer}</p>
            {issuedDate && <p className="mb-2"><span className="font-semibold">Issued:</span> {issuedDate}</p>}
            {expiryDate && <p className="mb-2"><span className="font-semibold">Expires:</span> {expiryDate}</p>}
            {status === 'in-progress' && expectedCompletion && (
              <p className="mb-2"><span className="font-semibold">Status:</span> In Progress ({expectedCompletion})</p>
            )}
            {status === 'active' && !expiryDate && <p className="mb-2"><span className="font-semibold">Status:</span> Active</p>}
            {credentialId && (
              <p className="mb-2 break-all">
                <span className="font-semibold">Credential ID:</span> {credentialId}
              </p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Tech = () => {
  const [activeCert, setActiveCert] = useState(null);

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

      {/* Certifications Section */}
      <motion.div variants={textVariant()} className="mt-32">
        <h2 className={styles.sectionHeadTextLight}>Certifications.</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5"
      >
        {certifications.map((cert, index) => (
          <CertificationCard
            key={cert.id}
            index={index}
            {...cert}
            active={activeCert}
            handleClick={setActiveCert}
          />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, '');
