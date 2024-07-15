import React from 'react';

import { useIsMobile } from "../../hooks/common/useIsMobile";
import Projects from "../../components/pages/Projects/Projects";
import MobileProjects from "../../components/pages/MobileProjects/MobileProjects";

const ProjectsContainer = () => {
  const { isMobile } = useIsMobile();

  if (isMobile === null) {
    return null;
  }

  return (
    isMobile ? <MobileProjects /> : <Projects />
  );
};

export default ProjectsContainer;
