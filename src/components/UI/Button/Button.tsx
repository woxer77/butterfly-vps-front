import React from 'react';

import { Link } from "react-router-dom";

import { ButtonTypeEnum, ButtonVariantEnum } from "../../../ts/enums/enums";

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariantEnum;
  customClassName?: string;
  customClassNameLink?: string;
  onClick?: () => void;
  type: ButtonTypeEnum;
  to?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant, customClassName, customClassNameLink, onClick, type, to, target }) => {
  const buttonStyles = (variant === ButtonVariantEnum.Outlined ? styles.outlined : styles.filled) + ` ${customClassName} ${styles.button}`;

  const ButtonContent = (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );

  return to ? <Link to={to} target={target || "_self"} className={customClassNameLink}>{ButtonContent}</Link> : ButtonContent;
};

export default Button;
