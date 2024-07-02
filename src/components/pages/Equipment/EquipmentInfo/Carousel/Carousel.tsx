import React from 'react';

import { motion } from "framer-motion";

import { equipment } from "../../../../../configs/equipment";
import {
  CAROUSEL_FAST_DURATION,
  HOME_DELAY_BEFORE_ANIMATION,
  HOME_TRANSITION_ANIMATION,
  SELECTED_COLOR
} from "../../../../../configs/config";
import useInfiniteCarousel from "../../../../../hooks/common/useInfiniteCarousel";

import styles from './Carousel.module.scss';

interface CarouselProps {
  webp: boolean | null;
  position: number;
  setPosition: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ webp, position, setPosition }) => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const { ref, xTranslation, handleHoverStart, handleHoverEnd } = useInfiniteCarousel(CAROUSEL_FAST_DURATION, true, 40);

  const disableButton = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, ((HOME_DELAY_BEFORE_ANIMATION + HOME_TRANSITION_ANIMATION) * 1000) + 1000);
  };

  const changeEquipment = (index: number) => {
    if (isDisabled) return;
    setPosition(index);
    disableButton();
  }

  return (
    <motion.div
      className={styles.equipmentElements}
      ref={ref}
      style={{x: xTranslation}}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {[...equipment, ...equipment].map((item, index) => (
        <div
          className={styles.equipmentElement}
          key={`equipment-info-block-${index}`}
          onClick={() => changeEquipment(index % equipment.length)}
          style={{border: position === index % equipment.length ? `1px solid ${SELECTED_COLOR}` : ''}}
        >
          <img
            src={webp ? item.image.webp : item.image.png}
            alt={item.title}
            loading="lazy"
            className={styles.smallImage}
          />
          <h4
            className={styles.title}
            style={{color: position === index % equipment.length ? SELECTED_COLOR : ''}}
          >
            {item.title}
          </h4>
          <p className={styles.description}>{item.miniDescription}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default React.memo(Carousel);
