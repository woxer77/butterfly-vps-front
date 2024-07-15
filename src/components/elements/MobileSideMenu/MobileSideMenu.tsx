import React, { CSSProperties } from 'react';

import { Link } from "react-router-dom";

import Accordion from "../../UI/Accordion/Accordion";

import { useAppSelector } from "../../../hooks/common/redux";
import { fromSlug } from "../../../helpers/Form/admin";

import styles from './MobileSideMenu.module.scss';

interface SideMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: (isActive: boolean) => void;
}

const MobileSideMenu: React.FC<SideMenuProps> = ({ isMenuActive, setIsMenuActive }) => {
  const services = useAppSelector(state => state.userReducer.services);
  const accordionElements = services.map(service => ({
    name: fromSlug(service.serviceId),
    to: `/services/${service.serviceId}`,
    iconId: service.serviceId
  }));

  const sideMenuStyles: CSSProperties = {
    opacity: isMenuActive ? 1 : 0,
    visibility: isMenuActive ? 'visible' : 'hidden',
    left: isMenuActive ? 0 : `-100%`,
  };

  const pages = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'About Us',
      to: '/about'
    },
    {
      name: 'Equipment',
      to: '/equipment'
    },
    {
      name: 'Projects',
      to: '/projects'
    }
  ];

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  React.useEffect(() => {
    document.body.style.overflow = isMenuActive ? 'hidden' : '';
  }, [isMenuActive]);

  return (
    <div className={styles.mobileSideMenu} style={sideMenuStyles}>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <Link
            to={pages[0].to}
            className={styles.link}
            key={`mobile-link-${pages[0].name}`}
          >
            {pages[0].name}
          </Link>
          <Link
            to={pages[1].to}
            className={styles.link}
            key={`mobile-link-${pages[1].name}`}
          >
            {pages[1].name}
          </Link>
          <Link
            to={pages[2].to}
            className={styles.link}
            key={`mobile-link-${pages[2].name}`}
          >
            {pages[2].name}
          </Link>
          <Accordion title="Services" elements={accordionElements} onClick={closeMenu}/>
          <Link
            to={pages[3].to}
            className={styles.link}
            key={`mobile-link-${pages[3].name}`}
          >
            {pages[3].name}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileSideMenu;
