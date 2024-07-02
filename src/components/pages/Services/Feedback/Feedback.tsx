import React from 'react';

import ServicesSvgSelector from "../../../../assets/images/icons/services/ServicesSvgSelector";

import { useAppSelector } from "../../../../hooks/common/redux";
import { IFeedback } from "../../../../ts/interfaces/types";

import styles from './Feedback.module.scss';

interface FeedbackProps {
  feedback: IFeedback;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const bgImage = webp ? '/services/webp/bg-rectangles-1.webp' : '/services/png/bg-rectangles-1.png';

  return (
    <div className={styles.feedback}>
      <img className="bgObject" id={styles.bgObject} src={bgImage} alt="feedback-bg-image" loading="lazy"/>
      <div className={styles.stars}>
        {[...Array(feedback.starsCount)].map((_, index) => (
          <ServicesSvgSelector iconId="star" key={`star-${index}`}/>
        ))}
      </div>
      <p className={styles.author}>
        {feedback.author}
      </p>
      <p className={styles.text}>
        {feedback.text}
      </p>
    </div>
  );
};

export default Feedback;
