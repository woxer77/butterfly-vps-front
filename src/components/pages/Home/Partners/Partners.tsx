import React from 'react';

import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

import HomeSvgSelector from "../../../../assets/images/icons/home/HomeSvgSelector";

import { clients } from "../../../../configs/clients";
import { CAROUSEL_FAST_DURATION } from "../../../../configs/config";
import { useAppSelector } from "../../../../hooks/common/redux";

import styles from './Partners.module.scss';

const Partners: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const bgImage = webp ? "/home/webp/bg-rectangles-and-dots.webp" : "/home/png/bg-rectangles-and-dots.png";

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  React.useEffect(() => {
    const COLUMN_GAP = 100;
    let controls;
    let finalPosition = -width / 2 - (COLUMN_GAP / 2);

    controls = animate(xTranslation, [0, finalPosition], {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      duration: CAROUSEL_FAST_DURATION,
      ease: "linear",
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className={styles.partners}>
      <div className={styles.partnerships}>
        <img src={bgImage} alt="bg-rectangles-and-dots" className="bgObject" id={styles.bgObject} loading="lazy"/>
        <h1 className={`title ${styles.center}`}>
          Powerful Partnerships
        </h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={`text ${styles.text}`}>
              Is a fresh, flexible out-of-the-box-thinking full-service international creative agency based in Athens &
              Dubai. With a core team consisting of Artists, Graphic Designers, Interior Designers & Architects, we
              express our interdisciplinary spirit, always driven by innovative ideas & contemporary visual solutions in
              communication, through ART.
            </p>
            <Link to="https://eprojectgallery.com/" target="_blank" className={styles.exploreBtn}>
              <p className={styles.exploreBtnText}>Explore More</p>
              <HomeSvgSelector iconId="arrow" className={styles.arrow}/>
            </Link>
          </div>
          <div className={styles.right}>
            <p className={styles.bigText}>Art in your hand</p>
            <p className={styles.smallText}>creative room</p>
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <h1 className={`title ${styles.center} ${styles.title}`}>
          Trusted by companies across the globe
        </h1>
        <div className={styles.clientsCarouselWrapper}>
          <div className={styles.shadow}/>
          <motion.div className={styles.clientsCarousel} ref={ref} style={{x: xTranslation}}>
            {[...clients, ...clients].map((client, index) => (
              <img
                src={webp ? client.webp : client.png}
                alt={`client-${index}`}
                key={`client-${index}`}
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
