import React from 'react';

import styles from './Tooltip.module.scss';

interface TooltipProps {
  children: React.ReactNode;
  active: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ children, active }) => {
  const tooltipStyles = active ? `${styles.tooltip} ${styles.active}` : styles.tooltip;

  return (
    <div className={tooltipStyles}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
