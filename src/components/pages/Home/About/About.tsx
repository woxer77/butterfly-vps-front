import React from 'react';

import Button from "../../../UI/Button/Button";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../../ts/enums/enums";
import { useAppSelector } from "../../../../hooks/common/redux";
import { companyInfo } from "../../../../configs/company-info";

import styles from './About.module.scss';

const About: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const bgImage = webp ? "/home/webp/office-bg.webp" : "/home/png/office-bg.png";

  return (
    <div className={styles.aboutWrapper} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.about}>
        <div className={styles.infoContainer}>
          <h3 className={styles.title}>
            BUTTERFLY DIGITAL PRINTING SOLUTIONS LLC
          </h3>
          <p className={styles.description}>
            Based in Dubai, AI quoz Industrial Area 4, is a leading large format printing house that specializes in
            Advertising, and Designing & Production.
          </p>
          <Button
            variant={ButtonVariantEnum.Filled}
            type={ButtonTypeEnum.Button}
            customClassName={styles.button}
            to="https://eprojectgallery.com/"
            target="_blank"
          >
            Get in touch
          </Button>
          <div className={styles.companyInfo}>
            {companyInfo.map((info, idx) => (
              <div className={styles.infoBlock} key={`about-block-${idx}`}>
                <div className={styles.line}/>
                <p className={styles.number}>{info.number}</p>
                <p className={styles.name}>{info.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
