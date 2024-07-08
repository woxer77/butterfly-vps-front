import React from 'react';

import WorkInProgress from "../WorkInProgress/WorkInProgress";

import { IProject } from "../../../../ts/interfaces/types";
import { API_URL } from "../../../../configs/config";
import { fromSlug } from "../../../../helpers/Form/admin";

import styles from './Works.module.scss';
import { equipmentAnimations, projectsAnimation } from "../../../../configs/equipment";
import { motion } from 'framer-motion';

interface WorksProps {
  projects: IProject[];
  filter: string;
}

const Works: React.FC<WorksProps> = ({ projects, filter }) => {
  const filteredProjects = projects.filter((project) => project.serviceSection === filter || filter === 'All');

  return (
    <div className={styles.works}>
      {filteredProjects.length === 0 ?
        <motion.div
          animate={projectsAnimation.animate}
          initial={projectsAnimation.initial}
          exit={projectsAnimation.exit}
          transition={projectsAnimation.transition}
          className={styles.WIPwrapper}
          key="work-in-progress"
        >
          <WorkInProgress/>
        </motion.div>
      :
        filteredProjects.map((project, index) => (
          <motion.div
            animate={projectsAnimation.animate}
            initial={projectsAnimation.initial}
            exit={projectsAnimation.exit}
            transition={{...projectsAnimation.transition, delay: index * 0.1}}
            className={styles.work}
            key={`${project.title} - ${index}`}
          >
            <div className={styles.image}>
              <div className={styles.overlay}>
                {project.description}
              </div>
              <img src={`${API_URL}/projects/${project.image}`} alt={project.title} loading="lazy"/>
            </div>
            <div className={styles.details}>
              <div className={styles.row}>
                <h2 className={styles.title}>{fromSlug(project.title)}</h2>
                <div className={styles.dot}/>
                <div className={styles.filter}>{fromSlug(project.serviceSection)}</div>
              </div>
              <div className={styles.row}>
                <p className={styles.date}>{project.date}</p>
                <p className={styles.location}>{project.location}</p>
              </div>
            </div>
          </motion.div>
        ))
      }
    </div>
  );
};

export default Works;
