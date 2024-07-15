import React, { CSSProperties, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Glow from "../../../UI/Glow/Glow";
import { Belief, believes } from "../../../../configs/believes";
import styles from './MobilePhilosophy.module.scss';
import { useAppSelector } from "../../../../hooks/common/redux";

const MobilePhilosophy: React.FC = () => {
  const [selectedElem, setSelectedElem] = useState<Belief | null>(null);
  const webp = useAppSelector((state) => state.userReducer.webp);
  const fullSizeImageSrc = webp ? "/about/webp/production-office.webp" : "/about/jpg/production-office.jpg";

  const handleClick = (elem: Belief) => {
    setSelectedElem(selectedElem === elem ? null : elem);
  };

  const variants = {
    open: {
      height: 'auto',
      opacity: 1,
      display: 'block',
      transition: { opacity: { duration: 0.3 }, height: { duration: 0 } }
    },
    closed: {
      height: 0,
      opacity: 0,
      display: 'none',
      transition: { duration: 0 }
    }
  };

  return (
    <div className={styles.mobilePhilosophy}>
      <Glow customClassName={styles.glow}/>
      <h1 className={styles.title}>
        Our Printing Philosophy
      </h1>
      <p className={styles.description}>
        Discover Our Mission At Butterfly, we are dedicated to revolutionizing printing with our commitment to quality,
        innovation, and sustainability. Explore our Goals & Beliefs to learn how we prioritize customer satisfaction,
        community engagement, and continuous improvement in all aspects of our printing services.
      </p>
      <div className={styles.list}>
        {believes.map((elem: Belief) => (
          <div className={styles.element} key={`believe-${elem.point}`} onClick={() => handleClick(elem)}>
            <div className={styles.point}>
              <p className={styles.pointText}>{elem.point}</p>
              <div
                className={styles.cross}
                style={{ rotate: selectedElem === elem ? '45deg' : '0deg', }}
              >
                <div className={styles.line} id={styles.horizLine}/>
                <div className={styles.line}/>
              </div>
            </div>
            <AnimatePresence>
              <motion.div
                variants={variants}
                initial="closed"
                animate={selectedElem === elem ? "open" : "closed"}
                exit="closed"
                className={styles.explanation}
              >
                {elem.explanation}
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
      <img className={styles.fullSizeImage} src={fullSizeImageSrc} alt="fullSizeEquipment"/>
    </div>
  );
};

export default MobilePhilosophy;
