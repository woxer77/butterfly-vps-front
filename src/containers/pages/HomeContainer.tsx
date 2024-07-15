import React from 'react';

import { useIsMobile } from "../../hooks/common/useIsMobile";

import MobileHome from "../../components/pages/MobileHome/MobileHome";
import Home from "../../components/pages/Home/Home";

const HomeContainer = () => {
  const { isMobile } = useIsMobile();

  if (isMobile === null) {
    return null;
  }

  return (
    isMobile ? <MobileHome /> : <Home />
  );
};

export default HomeContainer;
