import React from 'react';

import ServicesSvgSelector from "../../../../assets/images/icons/services/ServicesSvgSelector";

import { IStep } from "../../../../ts/interfaces/types";

import styles from './Steps.module.scss';

interface StepsProps {
  steps: IStep[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <div className={styles.steps}>
      <h1 className={`title ${styles.title}`}>
        How does this all work?
      </h1>
      <p className="text">
        Steps required to achieve your desired result
      </p>
      <div className={styles.stepsList}>
        {steps.map((step, index) => (
          <div className={styles.step} key={`step-${step.title}-${index}`}>
            <div className={`iconBorder ${styles.iconBorder}`}>
              <ServicesSvgSelector iconId="star-step"/>
            </div>
            <h3 className={styles.stepTitle}>
              {step.title}
            </h3>
            <p className={styles.stepDescription}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
