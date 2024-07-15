import React from 'react';

import { useIsMobile } from "../../hooks/common/useIsMobile";

import MobileAbout from "../../components/pages/MobileAbout/MobileAbout";
import About from "../../components/pages/About/About";

const AboutContainer = () => {
  const { isMobile } = useIsMobile();

  if (isMobile === null) {
    return null;
  }

  return (
    isMobile ? <MobileAbout /> : <About />
  );
};

export default AboutContainer;
