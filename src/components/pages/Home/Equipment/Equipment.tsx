import React from 'react';

import { AnimatePresence, motion } from "framer-motion";

import SliderButton from "../../../UI/SliderButton/SliderButton";

import { SliderButtonTypeEnum } from "../../../../ts/enums/enums";
import { equipment, homeAnimations } from "../../../../configs/equipment";
import {
  HOME_DELAY_BEFORE_ANIMATION,
  HOME_TRANSITION_ANIMATION,
  TABLET_WIDTH
} from "../../../../configs/config";
import { useAppSelector } from "../../../../hooks/common/redux";

import styles from './Equipment.module.scss';
import { useSwipeable } from "react-swipeable";

const Equipment: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const [position, setPosition] = React.useState<number>(0);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth <= TABLET_WIDTH);

  const bgImage = webp ? "/home/webp/bg-rectangles-and-dots-2.webp" : "/home/png/bg-rectangles-and-dots-2.png";

  const disableButton = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, ((HOME_DELAY_BEFORE_ANIMATION + HOME_TRANSITION_ANIMATION) * 1000) + 800);
  };

  const nextSlide = () => {
    if (isDisabled || position + 1 > equipment.length - 1) return;

    setPosition(position + 1);
    disableButton();
  };

  const prevSlide = () => {
    if (isDisabled || position - 1 < 0) return;

    setPosition(position - 1);
    disableButton();
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= TABLET_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });

  return (
    <div className={styles.equipment} {...handlers}>
      <img src={bgImage} alt="bg-rectangles-and-dots-2" className="bgObject" id={styles.bgObject} loading="lazy"/>
      <div className={styles.textBlock}>
        <p className={styles.description}>
          We focus on best quality printing
        </p>
        <div className={styles.textContent}>
          <AnimatePresence mode="wait">
            <motion.h2
              animate={homeAnimations.titleMotion.animate}
              initial={homeAnimations.titleMotion.initial}
              exit={homeAnimations.titleMotion.exit}
              transition={homeAnimations.titleMotion.transition}
              key={`equipment-title-${position}`}
              className={`title ${styles.title}`}
            >
              {equipment[position].title}
            </motion.h2>
            <motion.p
              animate={!isTablet ? homeAnimations.descriptionMotion.animate : homeAnimations.mobileDescriptionMotion.animate}
              initial={!isTablet ? homeAnimations.descriptionMotion.initial : homeAnimations.mobileDescriptionMotion.initial}
              exit={!isTablet ? homeAnimations.descriptionMotion.exit : homeAnimations.mobileDescriptionMotion.exit}
              transition={!isTablet ? homeAnimations.descriptionMotion.transition : homeAnimations.mobileDescriptionMotion.transition}
              key={`equipment-description-${position}`}
              className={`text ${styles.text}`}
            >
              {equipment[position].description}
            </motion.p>
          </AnimatePresence>
        </div>
        {!isTablet && (
          <div className={styles.controls}>
            <SliderButton
              onClick={prevSlide}
              type={SliderButtonTypeEnum.Prev}
              inactive={position === 0}
            />
            <SliderButton
              onClick={nextSlide}
              type={SliderButtonTypeEnum.Next}
              inactive={position === equipment.length - 1}
            />
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          animate={homeAnimations.imageMotion.animate}
          initial={homeAnimations.imageMotion.initial}
          exit={homeAnimations.imageMotion.exit}
          transition={homeAnimations.imageMotion.transition}
          key={`image-equipment-${position}`}
          className={styles.imageWrapper}
        >
          <img
            src={webp ? equipment[position].image.webp : equipment[position].image.png}
            alt={equipment[position].title}
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
      {isTablet && (
        <div className={styles.controls}>
          <SliderButton
            onClick={prevSlide}
            type={SliderButtonTypeEnum.Prev}
            inactive={position === 0}
          />
          <SliderButton
            onClick={nextSlide}
            type={SliderButtonTypeEnum.Next}
            inactive={position === equipment.length - 1}
          />
        </div>
      )}
    </div>
  );
};

export default Equipment;
