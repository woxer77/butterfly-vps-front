import React from 'react';

import Header from "../Header/Header";
import AsideSocials from "../AsideSocials/AsideSocials";
import SideMenu from "../SideMenu/SideMenu";

import styles from './Hero.module.scss';

interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);

  return (
    <div className={styles.heroWrapper}>
      <Header/>
      <AsideSocials setIsMenuActive={setIsMenuActive}/>
      <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>
      <div className={styles.hero}>{children}</div>
    </div>
  );
};

export default Hero;
