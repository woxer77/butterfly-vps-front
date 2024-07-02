import React from 'react';

import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";
import Hero from "../../elements/Hero/Hero";
import Steps from "./Steps/Steps";
import Projects from "./Projects/Projects";
import Feedback from "./Feedback/Feedback";
import Contact from "../../elements/Contact/Contact";
import Footer from "../../elements/Footer/Footer";
import Glow from "../../UI/Glow/Glow";
import SliderButton from "../../UI/SliderButton/SliderButton";
import Button from "../../UI/Button/Button";

import { useAppSelector } from "../../../hooks/common/redux";
import { ButtonTypeEnum, ButtonVariantEnum, SliderButtonTypeEnum } from "../../../ts/enums/enums";
import { IService } from "../../../ts/interfaces/types";
import { API_URL } from "../../../configs/config";
import { useServiceNavigation } from "../../../hooks/Services/useServiceNavigation";
import { useDeleteService } from "../../../hooks/Services/useDeleteService";

import styles from './Services.module.scss';
import { fromSlug } from "../../../helpers/Form/admin";

interface ServicesProps {
  service: IService;
  servicesId: string[];
  serviceId: string | undefined;
}

const Services: React.FC<ServicesProps> = ({ service, servicesId, serviceId }) => {
  const webp = useAppSelector((state) => state.userReducer.webp);
  const isAuth = useAppSelector((state) => state.adminReducer.isAuth);
  const services = useAppSelector((state) => state.userReducer.services);

  const { nextPage, prevPage } = useServiceNavigation(servicesId, serviceId);
  const { handleDeleteService } = useDeleteService(serviceId, servicesId);

  const bgImage = webp ? '/services/webp/bg-rectangles-2.webp' : '/services/png/bg-rectangles-2.png';

  return (
    <div className={styles.services}>
      <Hero>
        <div className={styles.content}>
          <img className="bgObject" id={styles.bgObject} src={bgImage} alt="services-bg-image"/>
          <Glow customClassName={styles.glow}/>
          {isAuth &&
            <div className={styles.adminButtonContainer}>
              <Button
                variant={ButtonVariantEnum.Filled}
                type={ButtonTypeEnum.Button}
                customClassName={styles.adminButton}
                to="/add-service"
              >
                Add new service
              </Button>
              <Button
                variant={ButtonVariantEnum.Outlined}
                type={ButtonTypeEnum.Button}
                customClassName={styles.adminButton}
                onClick={handleDeleteService}
              >
                Delete Service
              </Button>
            </div>
          }
          <div className={styles.textBlock}>
            <h1 className={`smallerTitle ${styles.title}`}>{fromSlug(service.serviceTitle)}</h1>
            <p className={styles.miniDescription}>
              {service.miniDescription}
            </p>
            <ul className={styles.list}>
              {service.benefits.map((benefit, index) =>
              {
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
              <SliderButton onClick={nextPage} type={SliderButtonTypeEnum.Next}/>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={`${API_URL}/services/${service.serviceImage}`} alt={services[0].serviceId}/>
          </div>
        </div>
      </Hero>
      <Steps steps={service.steps}/>
      <Projects project={service.projects}/>
      <Feedback feedback={service.feedback}/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Services;
