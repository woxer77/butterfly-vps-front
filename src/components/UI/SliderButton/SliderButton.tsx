import React from 'react';

import { SliderButtonTypeEnum } from "../../../ts/enums/enums";
import GlobalSvgSelector from "../../../assets/images/icons/global/GlobalSvgSelector";

import styles from './SliderButton.module.scss';

interface SliderButtonProps {
  type: SliderButtonTypeEnum;
  inactive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SliderButton: React.FC<SliderButtonProps> = ({ type, inactive, onClick }) => {
  const sliderBtnStyles = type === SliderButtonTypeEnum.Prev ? `${styles.prev} ${styles.sliderBtn}` : `${styles.sliderBtn}`;
  const inactiveStyles = inactive ? `${styles.inactive}` : '';

  return (
    <button className={`${sliderBtnStyles} ${inactiveStyles}`} onClick={onClick} disabled={inactive}>
      <GlobalSvgSelector iconId="sliderBtnArrow" />
    </button>
  );
};

export default React.memo(SliderButton);
