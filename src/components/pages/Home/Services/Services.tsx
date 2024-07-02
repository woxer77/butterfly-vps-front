import React from 'react';

import { motion } from 'framer-motion';

import useInfiniteCarousel from "../../../../hooks/common/useInfiniteCarousel";
import { API_URL, CAROUSEL_FAST_DURATION } from "../../../../configs/config";
import { useAppSelector } from "../../../../hooks/common/redux";
import { fromSlug } from "../../../../helpers/Form/admin";

import styles from './Services.module.scss';

const Services: React.FC = () => {
  const services = useAppSelector((state) => state.userReducer.services);

  const {
    ref,
    xTranslation,
    handleHoverStart,
    handleHoverEnd
  } = useInfiniteCarousel(CAROUSEL_FAST_DURATION, false, 24);

  return (
    <div className={styles.services}>
      <motion.div
        className={styles.carousel}
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {[...services, ...services].map((service, index) => (
          <div className={styles.service} key={`${service.serviceId} - ${index}`}>
            <div className={styles.image}>
              <img
                src={`${API_URL}/services/${service.serviceImage}`}
                alt={service.serviceId}
              />
            </div>
            <p className={styles.name}>{fromSlug(service.serviceId)}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
