import React from 'react';

import { useIsMobile } from "../../hooks/common/useIsMobile";
import MobileAddProject from "../../components/pages/MobileAddProject/MobileAddProject";
import AddProject from "../../components/pages/AddProject/AddProject";

const AboutContainer = () => {
  const { isMobile } = useIsMobile();

  if (isMobile === null) {
    return null;
  }

  return (
    isMobile ? <MobileAddProject /> : <AddProject />
  );
};

export default AboutContainer;
