import React from 'react';

import Button from "../../../UI/Button/Button";

import { useAppSelector } from "../../../../hooks/common/redux";
import { companyInfo } from "../../../../configs/company-info";
import { ButtonTypeEnum, ButtonVariantEnum } from "../../../../ts/enums/enums";

import styles from './MobileAbout.module.scss';

const MobileAbout: React.FC = () => {
  const webp = useAppSelector(state => state.userReducer.webp);

  const officeImg = webp ? "/home/webp/office-bg-source.webp" : "/home/jpg/office-bg-source.jpg";

  return (
    <div className={styles.mobileAbout}>
      <h1 className={styles.title}>
        Butterfly digital printing solution LLC
      </h1>
      <p className={styles.description}>
        Based in Dubai, AI quoz Industrial Area 4, is a leading large format printing house that specializes in Advertising, and Designing & Production.
      </p>
      <img src={officeImg} alt="office bg"/>
      <div className={styles.companyInfo}>
        {companyInfo.map((info, idx) => (
          <div className={styles.infoBlock} key={`about-block-${idx}`}>
            <div className={styles.line}/>
            <p className={styles.number}>{info.number}</p>
            <p className={styles.name}>{info.name}</p>
          </div>
        ))}
      </div>
      <Button
        variant={ButtonVariantEnum.Filled}
        type={ButtonTypeEnum.Button}
        to="https://eprojectgallery.com/"
        target="_blank"
      >
        Get in Touch
      </Button>
    </div>
  );
};

export default MobileAbout;
