import React from 'react';

import { motion } from 'framer-motion';

import Hero from "../../elements/Hero/Hero";
import EquipmentInfo from "./EquipmentInfo/EquipmentInfo";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";

import { equipment } from "../../../configs/equipment";
import { useAppSelector } from "../../../hooks/common/redux";
import { createVariants } from "../../../helpers/animations";

import styles from './Equipment.module.scss';

const Equipment: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const variants = createVariants(0.3, 1);

  return (
    <div className={styles.equipment}>
      <Hero>
        <div className={styles.flexContainer}>
          <div className={styles.textContainer}>
            <motion.h1
              className={`title ${styles.title}`}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Our Cutting-Edge Printing Equipment
            </motion.h1>
            <motion.p
              className={styles.description}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Explore our state-of-the-art printing equipment, meticulously selected to deliver superior quality for
              building wrapping, indoor, and outdoor printing projects.
            </motion.p>
          </div>
          <motion.div
            className={styles.equipmentContainer}
            variants={variants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {equipment.slice(0, 4).map((item, index) => (
              <img
                src={webp ? item.image.webp : item.image.png}
                alt={item.title}
                className={styles.image}
                key={`equipment-image-${index}`}
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </Hero>
      <EquipmentInfo/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Equipment;
