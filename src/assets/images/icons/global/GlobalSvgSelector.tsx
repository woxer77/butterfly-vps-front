import React from 'react';

// socials
import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as InstagramFilled } from './instagram-filled.svg';
import { ReactComponent as Whatsapp } from './whatsapp.svg';
// main logo
import { ReactComponent as Logo } from './logo.svg';
// slider button arrow
import { ReactComponent as SliderBtnArrow } from './slider-btn-arrow.svg';
// eye password visibility
import { ReactComponent as Visibility } from "./visibility.svg";
import { ReactComponent as VisibilityOff } from "./visibilityOff.svg";

import { SvgSelector } from "../../../../ts/interfaces/types";

const GlobalSvgSelector: React.FC<SvgSelector> = ({ iconId, ...props }) => {
  switch (iconId) {
    case 'facebook':
      return <Facebook {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'instagram-filled':
      return <InstagramFilled {...props} />;
    case 'whatsapp':
      return <Whatsapp {...props} />

    case 'logo':
      return <Logo {...props} />;

    case 'sliderBtnArrow':
      return <SliderBtnArrow {...props} />;

    case 'visibility':
      return <Visibility {...props} />;
    case 'visibilityOff':
      return <VisibilityOff {...props} />;

  default:
    return null;
  }
}

export default React.memo(GlobalSvgSelector);
