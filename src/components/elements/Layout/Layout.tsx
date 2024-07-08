import React from 'react';

import Header from "../Header/Header";
import AsideSocials from "../AsideSocials/AsideSocials";
import SideMenu from "../SideMenu/SideMenu";

import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = React.useState<boolean>(false);

  return (
    <div className={styles.layout}>
      <Header/>
      <AsideSocials setIsMenuActive={setIsMenuActive}/>
      <SideMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>
      {children}
    </div>
  );
};

export default Layout;
