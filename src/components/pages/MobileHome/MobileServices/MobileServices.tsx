import React from 'react';

import Button from "../../../UI/Button/Button";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../../ts/enums/enums";
import { useAppSelector } from "../../../../hooks/common/redux";
import { fromSlug } from "../../../../helpers/Form/admin";
import { API_URL } from "../../../../configs/config";

import styles from './MobileServices.module.scss';

const MobileServices: React.FC = () => {
  const services = useAppSelector(state => state.userReducer.services);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const handleShowAll = () => {
    setShowAll(true);
  }

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <div className={styles.mobileServices}>
      <div className={styles.list}>
        {displayedServices.map((service) => (
          <div key={`service-${service.serviceId}`} className={styles.service}>
            <img src={`${API_URL}/services/${service.serviceImage}`} alt={`image-${service.serviceId}`} />
            <p>{fromSlug(service.serviceId)}</p>
          </div>
        ))}
      </div>
      {!showAll &&
        <Button
          variant={ButtonVariantEnum.Outlined}
          type={ButtonTypeEnum.Button}
          onClick={handleShowAll}
          customClassName={styles.viewAll}
        >
          View All
        </Button>
      }

    </div>
  );
};

export default MobileServices;
