import React from 'react';

import Glow from "../../../UI/Glow/Glow";
import Tooltip from "../../../UI/Tooltip/Tooltip";

import { believes } from "../../../../configs/believes";
import { SELECTED_COLOR } from "../../../../configs/config";
import { useAppSelector } from "../../../../hooks/common/redux";

import styles from './Philosophy.module.scss';

const Philosophy: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const [activeTooltip, setActiveTooltip] = React.useState<number | null>(null);

  const bgObjectSrc = webp ? "/about/webp/rectangle-bg.webp" : "/about/png/rectangle-bg.png";
  const fullSizeImageSrc = webp ? "/about/webp/production-office.webp" : "/about/jpg/production-office.jpg";

  const handleExplanation = (index: number) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Glow/>
      <div className={styles.philosophy}>
        <img className="bgObject" id={styles.bgObject} src={bgObjectSrc} alt="bg image philosophy"/>
        <div className={styles.textContent}>
          <h1 className={`smallTitle ${styles.title}`}>Our Printing Philosophy</h1>
          <p className={styles.text}>
            Discover Our Mission At Butterfly, we are dedicated to revolutionizing printing with our commitment to
            quality, innovation, and sustainability. Explore our Goals & Beliefs to learn how we prioritize customer
            satisfaction, community engagement, and continuous improvement in all aspects of our printing services.
          </p>
        </div>
        <div className={styles.believes}>
          {believes.map((believe, index) => (
            <React.Fragment key={`believe-element-${index}`}>
              {index % 2 === 0 ? (
                <div className={styles.element}>
                  <div className={styles.point}>{believe.point}</div>
                  <div
                    className={styles.explanation}
                    style={{
                      borderColor: activeTooltip === index ? SELECTED_COLOR : "white",
                      backgroundColor: activeTooltip === index ? SELECTED_COLOR : "transparent"
                    }}
                    onClick={() => handleExplanation(index)}
                  >
                    +
                    <Tooltip active={activeTooltip === index}>{believe.explanation}</Tooltip>
                  </div>
                </div>
              ) : (
                <div className={styles.element}>
                  <div
                    className={styles.explanation}
                    style={{
                      borderColor: activeTooltip === index ? SELECTED_COLOR : "white",
                      backgroundColor: activeTooltip === index ? SELECTED_COLOR : "transparent"
                    }}
                    onClick={() => handleExplanation(index)}
                  >
                    +
                    <Tooltip active={activeTooltip === index}>{believe.explanation}</Tooltip>
                  </div>
                  <div className={styles.point}>{believe.point}</div>
                </div>
              )}
            </React.Fragment>
            ))}
        </div>
      </div>
      <img className={styles.fullSizeImage} src={fullSizeImageSrc} alt="fullSizeEquipment"/>
    </div>
  );
};

export default Philosophy;
