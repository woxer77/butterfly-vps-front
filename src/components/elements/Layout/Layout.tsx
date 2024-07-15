import React from 'react';

import Header from "../Header/Header";
import AsideSocials from "../AsideSocials/AsideSocials";
import SideMenu from "../SideMenu/SideMenu";
import { useIsMobile } from "../../../hooks/common/useIsMobile";

import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);
  const { isMobile } = useIsMobile();

  if (isMobile === null) {
    return null;
  }

  return (
    <div className={styles.layout}>
      <Header/>
      {!isMobile && <AsideSocials setIsMenuActive={setIsMenuActive} customClassName="asideSocials"/>}
      {!isMobile && <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>}
      {children}
    </div>
  );
};

export default Layout;
