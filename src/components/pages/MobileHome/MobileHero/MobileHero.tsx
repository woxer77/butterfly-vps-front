import React from 'react';

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../../../UI/Button/Button";
import GlobalSvgSelector from "../../../../assets/images/icons/global/GlobalSvgSelector";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../../ts/enums/enums";
import { goToContact } from "../../../../helpers/Form/contactForm";
import { FACEBOOK_LINK, INSTAGRAM_LINK, WHATSAPP_LINK } from "../../../../configs/config";

import styles from './MobileHero.module.scss';

const MobileHero: React.FC = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.hero}>
      <div className={styles.butterfly}>
        <Spline scene="https://prod.spline.design/San8rODPn-Nrtdsj/scene.splinecode"/>
      </div>
      <div className={styles.row}>
        <motion.p
          className={styles.slogan}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay: 0.4, duration: 1}}
        >
          Crafting
        </motion.p>
        <motion.p
          className={styles.slogan}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay: 0.8, duration: 1}}
        >
          Stories
        </motion.p>
      </div>
      <div className={styles.row}>
        <motion.p
          className={styles.slogan}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay: 1.2, duration: 1}}
        >
          Building
        </motion.p>
        <motion.p
          className={styles.slogan}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay: 1.6, duration: 1}}
        >
          Brands
        </motion.p>
      </div>
      <motion.p
        className={styles.description}
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{delay: 2.2, duration: 0.5}}
      >
        Our devotion to world class quality services has gained us the reputation and accreditation of many, local
        and international clients. Due to that, we have also gained their trust on all their branding related
        jobs.
      </motion.p>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{delay: 2.2, duration: 0.5}}
      >
        <Button
          variant={ButtonVariantEnum.Filled}
          type={ButtonTypeEnum.Button}
          customClassName={styles.button}
          onClick={goToContact}
        >
          Contact Us
        </Button>
      </motion.div>
      <motion.div
        className={styles.socials}
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{delay: 2.2, duration: 0.5}}
      >
        <Link to={FACEBOOK_LINK} target="_blank" className={`${styles.icon} socialIcon`} id={styles.facebook}>
          <GlobalSvgSelector iconId="facebook"/>
        </Link>
        <Link to={INSTAGRAM_LINK} target="_blank" className={`${styles.icon} socialIcon`} id={styles.instagram}>
          <GlobalSvgSelector iconId="instagram-filled"/>
        </Link>
        <Link to={WHATSAPP_LINK} target="_blank" className={`${styles.icon} socialIcon`} id={styles.whatsapp}>
          <GlobalSvgSelector iconId="whatsapp"/>
        </Link>
      </motion.div>
    </div>
  );
};

export default MobileHero;
