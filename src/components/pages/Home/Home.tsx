import React from 'react';

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
  return (
    <div className={styles.home}>
      <Hero>
        <div className={styles.flexContainer}>
          <div className={styles.butterfly}>
            <iframe
              src='https://my.spline.design/untitled-74ec8c52393d8900bbed903123057edb/'
              width='100%'
              height='100%'/>
            <div className={styles.antiBanner}/>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.bigText}>Crafting</p>
            <p className={styles.smallText}>Stories</p>
            <div className={styles.row}>
              <Button
                variant={ButtonVariantEnum.Outlined}
                type={ButtonTypeEnum.Button}
                customClassName={styles.button}
                onClick={goToContact}
              >
                Contact Us
              </Button>
              <p className={styles.smallText}>Brands</p>
            </div>
            <p className={styles.bigText}>Building</p>
            <p className={styles.description}>
              Our devotion to world class quality services has gained us the reputation and accreditation of many, local
              and international clients. Due to that, we have also gained their trust on all their branding related
              jobs.
            </p>
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
