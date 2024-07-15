import React from 'react';

import { Link } from "react-router-dom";

import GlobalSvgSelector from "../../../assets/images/icons/global/GlobalSvgSelector";

import {
  EMAIL,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  PHONE_NUMBER,
  WHATSAPP_LINK
} from "../../../configs/config";

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <GlobalSvgSelector iconId="logo" className={styles.logo}/>
        <p className={styles.text}>
          Based in Dubai, AI quoz Industrial Area 4, is a leading large format printing house that specializes in
          Advertising, and Designing & Production.
        </p>
        <div className={styles.row}>
          <p className={styles.text}>{EMAIL}</p>
          <p className={styles.text}>{PHONE_NUMBER}</p>
        </div>
        <div className={styles.socials}>
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
      </div>
    </div>
  );
};

export default React.memo(Footer);
