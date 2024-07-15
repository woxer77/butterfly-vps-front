import React from 'react';

import Header from "../../elements/Header/Header";
import MobileHero from "./MobileHero/MobileHero";
import MobileServices from "./MobileServices/MobileServices";
import MobileAbout from "./MobileAbout/MobileAbout";
import MobilePartners from "./MobilePartners/MobilePartners";
import MobileClients from "./MobileClients/MobileClients";
import Equipment from "../Home/Equipment/Equipment";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";

import styles from './MobileHome.module.scss';

const MobileHome: React.FC = () => {
  return (
    <div className={styles.mobileHome}>
      <Header/>
      <MobileHero/>
      <MobileServices/>
      <MobileAbout/>
      <MobilePartners/>
      <MobileClients/>
      <Equipment/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default MobileHome;
