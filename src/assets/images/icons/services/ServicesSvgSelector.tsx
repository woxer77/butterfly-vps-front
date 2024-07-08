import React from 'react';

// services tick
import { ReactComponent as Tick } from './tick.svg';
// services feedback star
import { ReactComponent as StarFeedback } from './star.svg';
// services info star
import { ReactComponent as StarStep } from './star-2.svg';
// services icons
import { ReactComponent as IndoorBranding } from './indoor-branding.svg';
import { ReactComponent as OutdoorBranding } from './outdoor-branding.svg';
import { ReactComponent as BuildingWrapping } from './building-wrapping.svg';
import { ReactComponent as VehicleWrapping } from './vehicle-wrapping.svg';
import { ReactComponent as EventBranding } from './event-branding.svg';
import { ReactComponent as Exhibitions } from './exhibitions.svg';
import { ReactComponent as MenuDesign } from './menu-design.svg';
import { ReactComponent as InteriorDesign } from './interior-design.svg';
import { ReactComponent as Signage3D } from './3d-signage.svg';
import { ReactComponent as BarRestaurantRenovations } from './bar-restaurant-renovations.svg';
import { ReactComponent as Identity } from './identity.svg';
import { ReactComponent as PrintingRoboticMilling3D } from './3d-printing-robotic-milling.svg';

import { SvgSelector } from "../../../../ts/interfaces/types";

const ServicesSvgSelector: React.FC<SvgSelector> = ({ iconId, ...props }) => {
  switch (iconId) {
    case 'tick':
      return <Tick {...props} />;

    case 'star-feedback':
      return <StarFeedback {...props} />;

    case 'star-step':
      return <StarStep {...props} />;

    case 'indoor-branding':
      return <IndoorBranding {...props} />;
    case 'outdoor-branding':
      return <OutdoorBranding {...props} />;
    case 'building-wrapping':
      return <BuildingWrapping {...props} />;
    case 'vehicle-wrapping':
      return <VehicleWrapping {...props} />;
    case 'event-branding':
      return <EventBranding {...props} />;
    case 'exhibition':
      return <Exhibitions {...props} />;
    case 'menu-design':
      return <MenuDesign {...props} />;
    case 'interior-design':
      return <InteriorDesign {...props} />;
    case '3d-signage':
      return <Signage3D {...props} />;
    case 'bar-and-restaurants-renovation':
      return <BarRestaurantRenovations {...props} />;
    case 'identity':
      return <Identity {...props} />;
    case '3d-printing-and-robotic-milling':
      return <PrintingRoboticMilling3D {...props} />;

  default:
    return null;
  }
}

export default React.memo(ServicesSvgSelector);
