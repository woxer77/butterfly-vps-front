import React from 'react';

// about us locations
import { ReactComponent as Mail } from './mail.svg';
import { ReactComponent as Location } from './location.svg';
import { ReactComponent as Phone } from './phone.svg';

import { SvgSelector } from "../../../../ts/interfaces/types";

const AboutSvgSelector: React.FC<SvgSelector> = ({ iconId, ...props }) => {
  switch (iconId) {
    case 'mail':
      return <Mail {...props} />;
    case 'location':
      return <Location {...props} />;
    case 'phone':
      return <Phone {...props} />;

  default:
    return null;
  }
}

export default React.memo(AboutSvgSelector);
