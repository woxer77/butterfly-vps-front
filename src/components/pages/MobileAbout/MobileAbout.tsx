import React from 'react';

import Header from "../../elements/Header/Header";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";
import MobileHero from "./MobileHero/MobileHero";
import MobilePhilosophy from "./MobilePhilosophy/MobilePhilosophy";

import styles from './MobileAbout.module.scss';

const MobileAbout: React.FC = () => {
  return (
    <div className={styles.mobileAbout}>
      <Header/>
      <MobileHero/>
      <MobilePhilosophy/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default MobileAbout;
