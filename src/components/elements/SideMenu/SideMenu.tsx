import React, { CSSProperties } from 'react';

import { Link } from "react-router-dom";

import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";

import { useAppSelector } from "../../../hooks/common/redux";
import { fromSlug } from "../../../helpers/Form/admin";
import { SIDE_MENU_WIDTH } from "../../../configs/config";
import { getIconId } from "../../../helpers/iconHelpers";
import { TEMP_iconsId as iconsId } from "../../../configs/TEMP_service_icons";

import styles from './SideMenu.module.scss';

interface SideMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: (isActive: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isMenuActive, setIsMenuActive }) => {
  const services = useAppSelector(state => state.userReducer.services);
  const servicesId = services.map(service => service.serviceId);

  const sideMenuStyles: CSSProperties = {
    opacity: isMenuActive ? 1 : 0,
    visibility: isMenuActive ? 'visible' : 'hidden',
    left: isMenuActive ? 0 : `-${SIDE_MENU_WIDTH}px`,
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  const sideMenuRef = React.useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  React.useEffect(() => {
    if (isMenuActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuActive]);

  return (
    <div className={styles.sideMenu} style={sideMenuStyles} ref={sideMenuRef}>
      <div className={`cross ${styles.cross}`} onClick={closeMenu}>
        <div className={`line ${styles.line}`} id="line1"/>
        <div className={`line ${styles.line}`} id="line2"/>
      </div>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          {servicesId.map((id, index) => (
            <React.Fragment key={`side-${id}-${index}`}>
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
