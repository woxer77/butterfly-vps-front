import React from 'react';

import { AnimatePresence, motion } from "framer-motion";

import Carousel from "./Carousel/Carousel";

import { equipment, equipmentAnimations } from "../../../../configs/equipment";
import { useAppSelector } from "../../../../hooks/common/redux";

import styles from './EquipmentInfo.module.scss';
import { TABLET_WIDTH } from "../../../../configs/config";

const EquipmentInfo: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const [position, setPosition] = React.useState<number>(0);
  const [isTablet, setIsTablet] = React.useState(window.innerWidth <= TABLET_WIDTH);

  React.useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= TABLET_WIDTH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.info}>
      <div className={styles.wrapper}>
        <Carousel webp={webp} position={position} setPosition={setPosition} />
      </div>
      <div className={styles.container}>
        {!isTablet && (
          <>
            <div className={styles.textBlock}>
              <AnimatePresence mode='wait'>
                <motion.h1
                  className={`title ${styles.title}`}
                  animate={equipmentAnimations.titleMotion.animate}
                  initial={equipmentAnimations.titleMotion.initial}
                  exit={equipmentAnimations.titleMotion.exit}
                  transition={equipmentAnimations.titleMotion.transition}
                  key={`equipment-title-${position}`}
                >
                  {equipment[position].title}
                </motion.h1>
                <motion.div
                  className={styles.moreInfo}
                  animate={equipmentAnimations.descriptionMotion.animate}
                  initial={equipmentAnimations.descriptionMotion.initial}
                  exit={equipmentAnimations.descriptionMotion.exit}
                  transition={equipmentAnimations.descriptionMotion.transition}
                  key={`equipment-moreInfo-${position}`}
                >
                  {equipment[position].moreInfo()}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className={styles.imageWrapper}>
              <AnimatePresence mode='wait'>
                <motion.img
                  src={webp ? equipment[position].image.webp : equipment[position].image.png}
                  alt={equipment[position].title}
                  className={styles.image}
                  animate={equipmentAnimations.imageMotion.animate}
                  initial={equipmentAnimations.imageMotion.initial}
                  exit={equipmentAnimations.imageMotion.exit}
                  transition={equipmentAnimations.imageMotion.transition}
                  key={`equipment-image-${position}`}
                  loading="lazy"/>
              </AnimatePresence>
            </div>
          </>)}
        {isTablet && (
          <>
            <AnimatePresence mode='wait'>
              <motion.h1
                className={`title ${styles.titleTablet}`}
                animate={equipmentAnimations.titleMotion.animate}
                initial={equipmentAnimations.titleMotion.initial}
                exit={equipmentAnimations.titleMotion.exit}
                transition={equipmentAnimations.titleMotion.transition}
                key={`equipment-title-${position}`}
              >
                {equipment[position].title}
              </motion.h1>
              <motion.div
                className={styles.miniDescriptionTablet}
                animate={equipmentAnimations.descriptionMotion.animate}
                initial={equipmentAnimations.descriptionMotion.initial}
                exit={equipmentAnimations.descriptionMotion.exit}
                transition={equipmentAnimations.descriptionMotion.transition}
                key={`equipment-miniDescription-${position}`}
              >
                {equipment[position].miniDescription}
              </motion.div>
            </AnimatePresence>
            <div className={styles.imageWrapperTablet}>
              <AnimatePresence mode='wait'>
                <motion.img
                  src={webp ? equipment[position].image.webp : equipment[position].image.png}
                  alt={equipment[position].title}
                  className={styles.imageTablet}
                  animate={equipmentAnimations.imageMotion.animate}
                  initial={equipmentAnimations.imageMotion.initial}
                  exit={equipmentAnimations.imageMotion.exit}
                  transition={equipmentAnimations.imageMotion.transition}
                  key={`equipment-image-${position}`}
                  loading="lazy"/>
              </AnimatePresence>
            </div>
            <motion.div
              className={styles.moreInfo}
              animate={equipmentAnimations.imageMotion.animate}
              initial={equipmentAnimations.imageMotion.initial}
              exit={equipmentAnimations.imageMotion.exit}
              transition={equipmentAnimations.imageMotion.transition}
              key={`equipment-moreInfo-${position}`}
            >
              {equipment[position].moreInfo()}
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
    ;
};

export default EquipmentInfo;
