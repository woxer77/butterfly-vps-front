import React from 'react';

import Button from "../../../UI/Button/Button";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../../ts/enums/enums";

import styles from './MobilePartners.module.scss';

const MobilePartners: React.FC = () => {
  return (
    <div className={styles.mobilePartners}>
      <h1 className={styles.title}>
        Powerful Partenrships
      </h1>
      <p className={styles.description}>
        Is a fresh, flexible out-of-the-box-thinking full-service international creative agency based in Athens & Dubai. With a core team consisting of Artists, Graphic Designers, Interior Designers & Architects, we express our interdisciplinary spirit, always driven by innovative ideas & contemporary visual solutions in communication, through ART.
      </p>
      <div className={styles.content}>
        <p className={styles.bigText}>art</p>
        <p className={styles.bigText}>in</p>
        <p className={styles.bigText}>your</p>
        <p className={styles.bigText}>hand</p>
        <p className={styles.smallText}>creative room</p>
      </div>
      <Button
        variant={ButtonVariantEnum.Filled}
        type={ButtonTypeEnum.Button}
        to="https://eprojectgallery.com/"
        target="_blank"
        customClassName={styles.button}
        customClassNameLink={styles.buttonLink}
      >
        Explore now
      </Button>
    </div>
  );
};

export default MobilePartners;
