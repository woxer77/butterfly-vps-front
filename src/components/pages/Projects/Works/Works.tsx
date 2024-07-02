import React from 'react';

import styles from './Works.module.scss';

const Works: React.FC = () => {
  const tempWorks = [
    {
      image: '/works/landmark-visual-impact.jpg',
      title: 'Urban Canvas Transformation',
      date: '02/2024  Dubai',
      filter: 'Building Wrapping',
      description: 'This project collection features some of our most creative and impactful building wraps that have become landmarks in their own right. We partnered with various international brands to wrap multiple metropolitan buildings, each project designed to reflect the unique brand identity and message. From eye-catching seasonal promotions to long-term brand installations, these wraps utilize the latest in printing technology and materials to ensure vibrant colors and durability.'
    },
    {
      image: '/works/urban-canvas-transformation.jpg',
      title: 'Urban Canvas Transformation',
      date: '02/2024  Dubai',
      filter: 'Building Wrapping',
      description: 'This project collection features some of our most creative and impactful building wraps that have become landmarks in their own right. We partnered with various international brands to wrap multiple metropolitan buildings, each project designed to reflect the unique brand identity and message. From eye-catching seasonal promotions to long-term brand installations, these wraps utilize the latest in printing technology and materials to ensure vibrant colors and durability.'
    },
    {
      image: '/works/landmark-visual-impact.jpg',
      title: 'Urban Canvas Transformation',
      date: '02/2024  Dubai',
      filter: 'Building Wrapping',
      description: 'This project collection features some of our most creative and impactful building wraps that have become landmarks in their own right. We partnered with various international brands to wrap multiple metropolitan buildings, each project designed to reflect the unique brand identity and message. From eye-catching seasonal promotions to long-term brand installations, these wraps utilize the latest in printing technology and materials to ensure vibrant colors and durability.'
    },
    {
      image: '/works/urban-canvas-transformation.jpg',
      title: 'Urban Canvas Transformation',
      date: '02/2024  Dubai',
      filter: 'Building Wrapping',
      description: 'This project collection features some of our most creative and impactful building wraps that have become landmarks in their own right. We partnered with various international brands to wrap multiple metropolitan buildings, each project designed to reflect the unique brand identity and message. From eye-catching seasonal promotions to long-term brand installations, these wraps utilize the latest in printing technology and materials to ensure vibrant colors and durability.'
    },
    {
      image: '/works/landmark-visual-impact.jpg',
      title: 'Urban Canvas Transformation',
      date: '02/2024  Dubai',
      filter: 'Building Wrapping',
      description: 'This project collection features some of our most creative and impactful building wraps that have become landmarks in their own right. We partnered with various international brands to wrap multiple metropolitan buildings, each project designed to reflect the unique brand identity and message. From eye-catching seasonal promotions to long-term brand installations, these wraps utilize the latest in printing technology and materials to ensure vibrant colors and durability.'
    },
    {
      image: '/works/urban-canvas-transformation.jpg',
      title: 'Urban Canvas Transformation',
      date: '02/2024  Dubai',
      filter: 'Building Wrapping',
      description: 'This project collection features some of our most creative and impactful building wraps that have become landmarks in their own right. We partnered with various international brands to wrap multiple metropolitan buildings, each project designed to reflect the unique brand identity and message. From eye-catching seasonal promotions to long-term brand installations, these wraps utilize the latest in printing technology and materials to ensure vibrant colors and durability.'
    },
  ];

  return (
    <div className={styles.works}>
      {tempWorks.map((work, index) => (
        <div className={styles.work} key={`${work.title} - ${index}`}>
          <div className={styles.image}>
            <div className={styles.overlay}>
              {work.description}
            </div>
            <img src={work.image} alt={work.title} loading="lazy"/>
          </div>
          <div className={styles.details}>
            <div className={styles.row}>
              <h2 className={styles.title}>{work.title}</h2>
              <div className={styles.dot}/>
              <div className={styles.filter}>{work.filter}</div>
            </div>
            <div className={styles.row}>
              <p className={styles.date}>{work.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
