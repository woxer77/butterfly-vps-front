import React from "react";
import { MOBILE_WIDTH } from "../../configs/config";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_WIDTH) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, setIsMobile };
};
