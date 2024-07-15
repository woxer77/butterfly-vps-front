import React from 'react';

import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import styles from './Accordion.module.scss';
import { getIconId } from "../../../helpers/iconHelpers";
import ServicesSvgSelector from "../../../assets/images/icons/services/ServicesSvgSelector";
import { TEMP_iconsId as iconsId } from "../../../configs/TEMP_service_icons";

interface Element {
  name: string;
  to: string;
  iconId?: string;
}

interface AccordionProps {
  title: string;
  elements: Element[];
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, elements, onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const list = {
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  };

  const closeAccordion = () => {
    setIsOpen(false);
  }

  return (
    <div className={styles.accordionWrapper}>
      <div
        className={styles.accordionTitle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : styles.arrowClose}`} />
      </div>
      <motion.div
        variants={list}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className={styles.accordionItem}
      >
        {elements.map((element, idx) => (
          <motion.div variants={item} key={`link-${element.to}-${idx}`} className={styles.accordionItemLink}>
            <Link to={element.to} onClick={onClick}>
              {element.iconId && (
                <ServicesSvgSelector iconId={getIconId(element.iconId, iconsId)} className={styles.icon}/>
              )}
              {element.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Accordion;
