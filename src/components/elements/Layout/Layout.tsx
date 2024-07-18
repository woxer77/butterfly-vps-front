import React from 'react';

import Header from "../Header/Header";
import AsideSocials from "../AsideSocials/AsideSocials";
import SideMenu from "../SideMenu/SideMenu";

import styles from './Layout.module.scss';
import { MOBILE_WIDTH, TABLET_WIDTH } from "../../../configs/config";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);
  const [isTablet, setIsTablet] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= TABLET_WIDTH) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isTablet === null) {
    return null;
  }

  return (
    <div className={styles.layout}>
      <Header/>
      {!isTablet && <AsideSocials setIsMenuActive={setIsMenuActive} customClassName="asideSocials"/>}
      {!isTablet && <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>}
      {children}
    </div>
  );
};

export default Layout;
