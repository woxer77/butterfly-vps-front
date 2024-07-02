import React from 'react';

import styles from './Glow.module.scss';

interface GlowProps {
  customClassName?: string;
  background?: string;
}

const Glow: React.FC<GlowProps> = ({ customClassName, background }) => {
  const glowAreaClassName = customClassName ? `${styles.glowArea} ${customClassName}` : styles.glowArea;

  return (
    <div className={glowAreaClassName}>
      <div className={styles.glowPanel}>
        <div className={styles.glow} style={{ background: background }}/>
      </div>
    </div>
  );
}

export default Glow;
