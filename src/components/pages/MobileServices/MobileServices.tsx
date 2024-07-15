import React from 'react';

import styles from './MobileServices.module.scss';
import { IService } from "../../../ts/interfaces/types";
import { useAppSelector } from "../../../hooks/common/redux";
import { useServiceNavigation } from "../../../hooks/Services/useServiceNavigation";
import { useDeleteService } from "../../../hooks/Services/useDeleteService";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";
import { fromSlug } from "../../../helpers/Form/admin";
import { AnimatePresence, motion } from "framer-motion";
import { servicesAnimations } from "../../../configs/equipment";
import { API_URL } from "../../../configs/config";
import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";
import SliderButton from "../../UI/SliderButton/SliderButton";
import { ButtonTypeEnum, ButtonVariantEnum, SliderButtonTypeEnum } from "../../../ts/enums/enums";
import "./mobileServices.scss";
import Button from "../../UI/Button/Button";
import { useSwipeable } from "react-swipeable";

interface ServicesProps {
  service: IService;
  servicesId: string[];
  serviceId: string | undefined;
}

const MobileServices: React.FC<ServicesProps> = ({ service, servicesId, serviceId }) => {
  const services = useAppSelector((state) => state.userReducer.services);
  const isAuth = useAppSelector((state) => state.adminReducer.isAuth);

  const { nextPage, prevPage } = useServiceNavigation(servicesId, serviceId);
  const { handleDeleteService } = useDeleteService(serviceId);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => prevPage(),
    trackMouse: true
  });

  return (
    <>
      <div className={styles.mobileServices}>
        <div className={styles.hero} {...handlers}>
          {isAuth &&
            <div className={styles.adminButtonContainer}>
              <Button
                variant={ButtonVariantEnum.Filled}
                type={ButtonTypeEnum.Button}
                to="/add-service"
              >
                Add new service
              </Button>
              <Button
                variant={ButtonVariantEnum.Outlined}
                type={ButtonTypeEnum.Button}
                onClick={handleDeleteService}
              >
                Delete Service
              </Button>
            </div>
          }
          <AnimatePresence mode='wait'>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {fromSlug(service.serviceTitle)}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode='wait'>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.25 }}
            >
              {service.miniDescription}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode='wait'>
            <motion.img
              src={`${API_URL}/services/${service.serviceImage}`}
              alt={services[0].serviceId}
              animate={servicesAnimations.imageMotion.animate}
              initial={servicesAnimations.imageMotion.initial}
              exit={servicesAnimations.imageMotion.exit}
              transition={servicesAnimations.imageMotion.transition}
            />
          </AnimatePresence>
          <ul className={styles.list}>
            {service.benefits.map((benefit, index) => {
              if (benefit) {
                return (
                  <li className={styles.listElement} key={`benefit-${index}`}>
                    <ServicesSvgSelector iconId="tick"/>{benefit}
                  </li>
                );
              }
            })}
          </ul>
          <div className={styles.controls}>
            <SliderButton onClick={prevPage} type={SliderButtonTypeEnum.Prev}/>
            <p className={styles.pageNumber}>
              {servicesId.indexOf(serviceId as string) + 1}/{servicesId.length}
            </p>
            <SliderButton onClick={nextPage} type={SliderButtonTypeEnum.Next}/>
          </div>
        </div>
        <div className={styles.steps}>
          <h1 className={styles.title}>
            How does this all work?
          </h1>
          <p className={styles.description} style={{ opacity: 0.5 }}>
            Steps required to achieve your desired result
          </p>
          <div className={styles.stepsList}>
            {service.steps.map((step, index) => (
              <div className={styles.step} key={`step-${step.title}-${index}`}>
                <div className={`iconBorder ${styles.iconBorder}`}>
                  <ServicesSvgSelector iconId="star-step"/>
                </div>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>
                <p className={styles.stepDescription}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.projects}>
          <h1 className={styles.title}>{fromSlug(service.projects.title)}</h1>
          <p className={styles.description} style={{ opacity: 0.5 }}>{service.projects.description}</p>
          <div className={styles.images}>
            {service.projects.works.map((image, index) => {
              if (!image) return;
              return (
                <img
                  src={`${API_URL}/services/${image}`}
                  alt={service.projects.title}
                  loading="lazy"
                  key={`project-${service.projects.title}-image-${index}`}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.stars}>
            {[...Array(service.feedback.starsCount)].map((_, index) => (
              <ServicesSvgSelector iconId="star-feedback" key={`star-${index}`}/>
            ))}
          </div>
          <p className={styles.author}>
            {service.feedback.author}
          </p>
          <p className={styles.text}>
            {service.feedback.text}
          </p>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </>
  );
};

export default MobileServices;
