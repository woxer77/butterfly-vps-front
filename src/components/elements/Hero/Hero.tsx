import React from 'react';

import Header from "../Header/Header";
import AsideSocials from "../AsideSocials/AsideSocials";
import SideMenu from "../SideMenu/SideMenu";

import styles from './Hero.module.scss';

interface HeroProps {
  children: React.ReactNode;
  customClassName?: string;
}

const Hero: React.FC<HeroProps> = ({ children, customClassName }) => {
  const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);
  const heroStyles = customClassName ? `${styles.hero} ${customClassName}` : styles.hero;

  return (
    <div className={styles.heroWrapper}>
      <Header/>
      <AsideSocials setIsMenuActive={setIsMenuActive}/>
      <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>
      <div className={heroStyles}>{children}</div>
    </div>
  );
};

export default Hero;
