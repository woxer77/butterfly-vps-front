import React from 'react';

import { AnimatePresence, motion } from "framer-motion";

import Carousel from "./Carousel/Carousel";

import { equipment, equipmentAnimations } from "../../../../configs/equipment";
import { useAppSelector } from "../../../../hooks/common/redux";

import styles from './EquipmentInfo.module.scss';

const EquipmentInfo: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const [position, setPosition] = React.useState<number>(0);

  return (
    <div className={styles.info}>
      <div className={styles.wrapper}>
        <Carousel webp={webp} position={position} setPosition={setPosition} />
      </div>
      <div className={styles.container}>
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
          <div
            className={styles.imageWrapper}
          >
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
                loading="lazy"
              />
            </AnimatePresence>
          </div>
      </div>
    </div>
  );
};

export default EquipmentInfo;
