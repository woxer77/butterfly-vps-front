import React from 'react';

import styles from './Tooltip.module.scss';

interface TooltipProps {
  children: React.ReactNode;
  active: boolean;
  customClassName?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, active, customClassName }) => {
  const tooltipStyles = active ? `${styles.tooltip} ${styles.active}` : styles.tooltip;
  const tooltipCustomStyles = customClassName ? `${tooltipStyles} ${customClassName}` : tooltipStyles;

  return (
    <div className={tooltipCustomStyles}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
