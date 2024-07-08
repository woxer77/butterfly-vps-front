import React from 'react';

import { useAppSelector } from "../../../../hooks/common/redux";

import styles from './WorkInProgress.module.scss';

const WorkInProgress = () => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const WIPImage = webp ? "/projects/webp/work-in-progress.webp" : "/projects/jpg/work-in-progress.jpg";

  return (
    <div className={styles.workInProgress}>
      <img src={WIPImage} alt="work-in-progress"/>
      <p className={styles.text}>Work in progress...</p>
    </div>
  );
};

export default WorkInProgress;
