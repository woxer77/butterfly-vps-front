import React, { useState } from 'react';
import styles from './Burger.module.scss';

interface BurgerProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  customClassName?: string;
  isOpen?: boolean;
}

const Burger: React.FC<BurgerProps> = ({ onClick, customClassName, isOpen }) => {
  const burgerStyles = `${styles.burger} ${isOpen ? styles.open : ''} ${customClassName || ''}`;

  return (
    <div className={burgerStyles} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default React.memo(Burger);
