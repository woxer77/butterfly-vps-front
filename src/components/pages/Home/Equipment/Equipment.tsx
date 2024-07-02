import React from 'react';

import { AnimatePresence, motion } from "framer-motion";

import SliderButton from "../../../UI/SliderButton/SliderButton";

import { SliderButtonTypeEnum } from "../../../../ts/enums/enums";
import { equipment, homeAnimations } from "../../../../configs/equipment";
import { HOME_DELAY_BEFORE_ANIMATION, HOME_TRANSITION_ANIMATION } from "../../../../configs/config";
import { useAppSelector } from "../../../../hooks/common/redux";

import styles from './Equipment.module.scss';

const Equipment: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const [position, setPosition] = React.useState<number>(0);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const bgImage = webp ? "/home/webp/bg-rectangles-and-dots-2.webp" : "/home/png/bg-rectangles-and-dots-2.png";

  const disableButton = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, ((HOME_DELAY_BEFORE_ANIMATION + HOME_TRANSITION_ANIMATION) * 1000) + 800);
  };

  const nextSlide = () => {
    if (isDisabled) return;

    setPosition(position + 1);
    disableButton();
  };

  const prevSlide = () => {
    if (isDisabled) return;

    setPosition(position - 1);
    disableButton();
  };

  return (
    <div className={styles.equipment}>
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
              animate={homeAnimations.descriptionMotion.animate}
              initial={homeAnimations.descriptionMotion.initial}
              exit={homeAnimations.descriptionMotion.exit}
              transition={homeAnimations.descriptionMotion.transition}
              key={`equipment-description-${position}`}
              className="text"
            >
              {equipment[position].description}
            </motion.p>
          </AnimatePresence>
        </div>
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
    </div>
  );
};

export default Equipment;
