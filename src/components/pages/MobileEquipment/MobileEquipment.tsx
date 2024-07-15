import React from 'react';

import { equipment } from "../../../configs/equipment";

import styles from './MobileEquipment.module.scss';
import { useAppSelector } from "../../../hooks/common/redux";
import Header from "../../elements/Header/Header";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";

const MobileEquipment: React.FC = () => {
  const webp = useAppSelector(state => state.userReducer.webp);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setScrollWidth((scrollLeft / (scrollWidth - clientWidth)) * 100);
      }
    };

    sliderRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      sliderRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header/>
      <div className={styles.mobileEquipment}>
        <h1 className={styles.title}>Our Cutting-Edge Printing Equipment</h1>
        <p className={styles.description}>
          Explore our state-of-the-art printing equipment, meticulously selected to deliver superior quality for
          building wrapping, indoor, and outdoor printing projects.
        </p>
        <div className={styles.slider} ref={sliderRef}>
          {equipment.map((item) => (
            <div key={item.title} className={styles.equipment}>
              <img src={webp ? item.image.webp : item.image.png} alt={item.title}/>
              <h2 className={styles.equipmentTitle}>{item.title}</h2>
              <p className={styles.equipmentDescription}>{item.miniDescription}</p>
            </div>
          ))}
        </div>
        <div className={styles.scrollBarContainer}>
          <div className={styles.scrollBar} style={{ width: `${scrollWidth}%` }}/>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </>
  );
};

export default MobileEquipment;
