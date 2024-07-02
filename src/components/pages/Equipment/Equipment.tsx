import React from 'react';

import Hero from "../../elements/Hero/Hero";
import EquipmentInfo from "./EquipmentInfo/EquipmentInfo";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";

import { equipment } from "../../../configs/equipment";
import useImageLoad from "../../../hooks/common/useImageLoad";
import { useAppSelector } from "../../../hooks/common/redux";

import styles from './Equipment.module.scss';

const Equipment: React.FC = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const { loadedImages, handleImageLoad } = useImageLoad(equipment.length);

  return (
    <div className={styles.equipment}>
      <Hero>
        <div className={styles.flexContainer}>
          <div className={styles.textContainer}>
            <h1 className={`title ${styles.title}`}>Our Cutting-Edge Printing Equipment</h1>
            <p className={styles.description}>
              Explore our state-of-the-art printing equipment, meticulously selected to deliver superior quality for
              building wrapping, indoor, and outdoor printing projects.
            </p>
          </div>
          <div className={styles.equipmentContainer}>
            {equipment.slice(0, -4).map((item, index) => (
              <img
                src={webp ? item.image.webp : item.image.png}
                alt={item.title}
                className={`${styles.image} ${loadedImages[index] ? 'imageLoaded' : ''}`}
                key={`equipment-image-${index}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
            ))}
          </div>
        </div>
      </Hero>
      <EquipmentInfo/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Equipment;
