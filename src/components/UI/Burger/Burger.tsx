import React from 'react';

import styles from './Burger.module.scss';

interface BurgerProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Burger: React.FC<BurgerProps> = ({ onClick }) => {
  return (
    <div className={styles.burger} onClick={onClick}>
      <div className={styles.line}/>
      <div className={styles.line}/>
      <div className={styles.line}/>
    </div>
  );
};

export default React.memo(Burger);
