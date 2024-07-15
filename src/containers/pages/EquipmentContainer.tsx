import React from 'react';

import MobileEquipment from "../../components/pages/MobileEquipment/MobileEquipment";
import Equipment from "../../components/pages/Equipment/Equipment";

import { useIsMobile } from "../../hooks/common/useIsMobile";

const EquipmentContainer = () => {
  const { isMobile } = useIsMobile();

  if (isMobile === null) {
    return null;
  }

  return (
    isMobile ? <MobileEquipment /> : <Equipment />
  );
};

export default EquipmentContainer;
