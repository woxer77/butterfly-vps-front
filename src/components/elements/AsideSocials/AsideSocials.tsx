import React from 'react';

import { Link } from "react-router-dom";

import Burger from "../../UI/Burger/Burger";
import GlobalSvgSelector from "../../../assets/images/icons/global/GlobalSvgSelector";

import { FACEBOOK_LINK, INSTAGRAM_LINK, WHATSAPP_LINK } from "../../../configs/config";

import styles from './AsideSocials.module.scss';

interface AsideSocialsProps {
  setIsMenuActive: (isActive: boolean) => void;
  customClassName?: string;
}

const AsideSocials: React.FC<AsideSocialsProps> = ({ setIsMenuActive, customClassName }) => {
  const activateMenu = () => {
    setIsMenuActive(true);
  }
  const asideSocialsStyles = customClassName ? `${styles.container} ${customClassName}` : styles.container;

  return (
    <div className={asideSocialsStyles}>
      <div className={styles.socials}>
        <Burger onClick={activateMenu}/>
        <div className={styles.icons}>
          <Link to={FACEBOOK_LINK} target="_blank" className={`${styles.icon} socialIcon`}>
            <GlobalSvgSelector iconId="facebook" id="facebook"/>
          </Link>
          <Link to={INSTAGRAM_LINK} target="_blank" className={`${styles.icon} socialIcon`}>
            <GlobalSvgSelector iconId="instagram" id="instagram"/>
          </Link>
          <Link to={WHATSAPP_LINK} target="_blank" className={`${styles.icon} socialIcon`}>
            <GlobalSvgSelector iconId="whatsapp" id="whatsapp"/>
          </Link>
        </div>
        <p className={styles.text}>You can reach us here</p>
      </div>
    </div>
  );
};

export default React.memo(AsideSocials);
