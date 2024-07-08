import React from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
        <div className={`cross ${styles.cross}`} onClick={onClose}>
          <div className={`line ${styles.line}`} id="line1"/>
          <div className={`line ${styles.line}`} id="line2"/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
