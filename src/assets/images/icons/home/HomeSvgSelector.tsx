import React from 'react';

// horizontal arrow
import { ReactComponent as Arrow } from './arrow.svg';

import { SvgSelector } from "../../../../ts/interfaces/types";

const HomeSvgSelector: React.FC<SvgSelector> = ({ iconId, ...props }) => {
  switch (iconId) {
    case 'arrow':
      return <Arrow {...props} />;

  default:
    return null;
  }
}

export default React.memo(HomeSvgSelector);
