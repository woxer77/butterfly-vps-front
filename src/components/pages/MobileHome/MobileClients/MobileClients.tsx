import React from 'react';

import { clients } from '../../../../configs/clients';

import styles from './MobileClients.module.scss';
import { useAppSelector } from "../../../../hooks/common/redux";

const MobileClients: React.FC = () => {
  const webp = useAppSelector(state => state.userReducer.webp);

  return (
    <div className={styles.mobileClients}>
      <h1 className={styles.title}>
        Trusted by companies across the globe
      </h1>
      <div className={styles.logos}>
        {clients.map((image, index) => (
          <img key={`client-${index}`} src={webp ? image.webp : image.png} alt={`client-${index}`}/>
        ))}
      </div>
    </div>
  );
};

export default MobileClients;
