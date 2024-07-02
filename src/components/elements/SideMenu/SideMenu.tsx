import React, { CSSProperties } from 'react';

import { Link } from "react-router-dom";

import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";

import { useAppSelector } from "../../../hooks/common/redux";
import { fromSlug } from "../../../helpers/Form/admin";
import { SIDE_MENU_WIDTH } from "../../../configs/config";
import { getIconId } from "../../../helpers/iconHelpers";

import styles from './SideMenu.module.scss';

interface SideMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: (isActive: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isMenuActive, setIsMenuActive }) => {
  const services = useAppSelector(state => state.userReducer.services);
  const servicesId = services.map(service => service.serviceId);

  // temp system
  const iconsId = ['indoor-branding', 'outdoor-branding', 'building-wrapping', 'vehicle-wrapping', 'event-branding',
    'exhibition', 'menu-design', 'interior-design', '3d-signage', 'bar-and-restaurants-renovation',
    'identity', '3d-printing-and-robotic-milling'];

  const sideMenuStyles: CSSProperties = {
    opacity: isMenuActive ? 1 : 0,
    visibility: isMenuActive ? 'visible' : 'hidden',
    left: isMenuActive ? 0 : `-${SIDE_MENU_WIDTH}px`,
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <div className={styles.sideMenu} style={sideMenuStyles}>
      <div className={styles.cross} onClick={closeMenu}>
        <div className={styles.line} id={styles.line1}/>
        <div className={styles.line} id={styles.line2}/>
      </div>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          {servicesId.map((id, index) => (
            <React.Fragment key={index}>
              <Link
                to={`/services/${id}`}
                className={styles.service}
                onClick={closeMenu}
              >
                {fromSlug(id)}<ServicesSvgSelector iconId={getIconId(id, iconsId)} className={styles.icon}/>
              </Link>
              <span className={styles.line}/>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;
