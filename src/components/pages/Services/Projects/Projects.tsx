import React from 'react';

import Glow from "../../../UI/Glow/Glow";

import { useAppSelector } from "../../../../hooks/common/redux";
import { API_URL } from "../../../../configs/config";
import { IProjectMini } from "../../../../ts/interfaces/types";
import { fromSlug } from "../../../../helpers/Form/admin";

import styles from './Projects.module.scss';

interface ProjectsProps {
  project: IProjectMini;
}

const Projects: React.FC<ProjectsProps> = ({ project }) => {
  const webp = useAppSelector((state) => state.userReducer.webp);

  const bgImage1 = webp ? '/services/webp/bg-rectangles-3.webp' : '/services/png/bg-rectangles-3.png';
  const bgImage2 = webp ? '/services/webp/bg-rectangles-4.webp' : '/services/png/bg-rectangles-4.png';

  return (
    <div className={styles.projects}>
      <Glow customClassName={styles.glow}/>
      <img className="bgObject" id={styles.bgObject1} src={bgImage1} alt="services-project-bg-1" loading="lazy"/>
      <img className="bgObject" id={styles.bgObject2} src={bgImage2} alt="services-project-bg-2" loading="lazy"/>
      <h1 className={`title ${styles.title}`}>{fromSlug(project.title)}</h1>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.images}>
        {project.works.map((image, index) => {
          if (!image) return;
          return (
          <div className={styles.imageWrapper} key={`project-${project.title}-image-${index}`}>
            <div className={styles.overlay}/>
            <img src={`${API_URL}/services/${image}`} alt={project.title} loading="lazy"/>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
