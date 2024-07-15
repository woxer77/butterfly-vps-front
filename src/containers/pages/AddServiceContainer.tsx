import React from 'react';

import { useIsMobile } from "../../hooks/common/useIsMobile";
import MobileAddService from "../../components/pages/MobileAddService/MobileAddService";
import AddService from "../../components/pages/AddService/AddService";

const AddServiceContainer = () => {
  const { isMobile } = useIsMobile();

  if (isMobile === null) {
    return null;
  }

  return (
    isMobile ? <MobileAddService /> : <AddService />
  );
};

export default AddServiceContainer;
