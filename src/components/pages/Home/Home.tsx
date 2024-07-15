import React from 'react';

import { motion } from 'framer-motion';
import Spline from "@splinetool/react-spline";

import Hero from "../../elements/Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import Partners from "./Partners/Partners";
import Equipment from "./Equipment/Equipment";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";
import Button from "../../UI/Button/Button";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";
import { goToContact } from "../../../helpers/Form/contactForm";

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.home}>
      <Hero>
        <div className={styles.flexContainer}>
          <div className={styles.butterfly}>
            <Spline scene="https://prod.spline.design/San8rODPn-Nrtdsj/scene.splinecode" />
          </div>
          <div className={styles.textContainer}>
            <motion.p
              className={styles.bigText}
              id={styles.crafting}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 1 }}
            >
              Crafting
            </motion.p>
            <motion.p
              className={styles.smallText}
              id={styles.stories}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8, duration: 1 }}
            >
              Stories
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <Button
                variant={ButtonVariantEnum.Outlined}
                type={ButtonTypeEnum.Button}
                customClassName={styles.button}
                onClick={goToContact}
              >
                Contact Us
              </Button>
            </motion.div>
            <motion.p
              className={styles.smallText}
              id={styles.brands}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.6, duration: 1 }}
            >
              Brands
            </motion.p>
            <motion.p
              className={styles.bigText}
              id={styles.building}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2, duration: 1 }}
            >
              Building
            </motion.p>
            <motion.p
              className={styles.description}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              Our devotion to world class quality services has gained us the reputation and accreditation of many, local
              and international clients. Due to that, we have also gained their trust on all their branding related
              jobs.
            </motion.p>
          </div>
        </div>
      </Hero>
      <Services/>
      <About/>
      <Partners/>
      <Equipment/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
