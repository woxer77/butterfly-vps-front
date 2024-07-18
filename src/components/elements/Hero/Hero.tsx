import React from 'react';

import Header from "../Header/Header";
import AsideSocials from "../AsideSocials/AsideSocials";
import SideMenu from "../SideMenu/SideMenu";

import styles from './Hero.module.scss';
import { TABLET_WIDTH } from "../../../configs/config";

interface HeroProps {
  children: React.ReactNode;
  customClassName?: string;
}

const Hero: React.FC<HeroProps> = ({ children, customClassName }) => {
  const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const heroStyles = customClassName ? `${styles.hero} ${customClassName}` : styles.hero;

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <Header/>
      {windowWidth > TABLET_WIDTH && <AsideSocials setIsMenuActive={setIsMenuActive}/>}
      {windowWidth > TABLET_WIDTH && <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>}
      <div className={heroStyles}>{children}</div>
    </div>
  );
};

export default Hero;
