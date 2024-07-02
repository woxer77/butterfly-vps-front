import React from 'react';

import styles from './Loading.module.scss';

interface LoadingProps {
  customClassName?: string;
}

const Loading: React.FC<LoadingProps> = ({ customClassName }) => {
  const loadingStyles = customClassName ? `${styles.spinner} ${customClassName}` : styles.spinner;

  return (
    <div className={styles.wrapper}>
      <div className={loadingStyles}/>
    </div>
  );
};

export default React.memo(Loading);
