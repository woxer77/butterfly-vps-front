import React from 'react';

import Hero from "../../elements/Hero/Hero";
import Philosophy from "./Philosophy/Philosophy";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";
import AboutSvgSelector from "../../../assets/images/icons/about/AboutSvgSelector";

import { locationInfo } from "../../../configs/locations";

import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Hero>
        <h1 className={`smallerTitle ${styles.title}`}>About The Company</h1>
        <p className={styles.description}>
          Learn more about the company and the team behind it.
        </p>
        <div className={styles.locationContent}>
          <div className={styles.locations}>
            {locationInfo.map((location) => (
              <div className={styles.location} key={`location-${location.title}`}>
                <div className={`iconBorder ${styles.iconBorder}`}>
                  <AboutSvgSelector iconId={location.iconId}/>
                </div>
                <div className={styles.information}>
                  <p className={styles.locationTitle}>{location.title}</p>
                  <p className={styles.locationDescription}>{location.description}</p>
                  <p className={styles.locationText}>{location.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5372853239332!2d55.23948859124004!3d25.117520048326956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69ea3841b12d%3A0xcd08cab010c2600d!2sButterfly%20Digital%20printing%20L.L.C!5e0!3m2!1sru!2sua!4v1718896354015!5m2!1sru!2sua"
              width="600" height="450"></iframe>
          </div>
        </div>
      </Hero>
      <Philosophy/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default About;
