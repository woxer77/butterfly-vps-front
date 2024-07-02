import React from 'react';

import { animate, useMotionValue } from 'framer-motion';
import useMeasure from "react-use-measure";

import { CAROUSEL_FAST_DURATION, CAROUSEL_SLOW_DURATION } from "../../configs/config";

const useInfiniteCarousel = (initialDuration: number, stopOnHover: boolean, columnGap: number) => {
  const [duration, setDuration] = React.useState(initialDuration);
  const [mustFinish, setMustFinish] = React.useState(false);
  const [rerender, setRerender] = React.useState(false);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  React.useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - (columnGap / 2);

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setRerender(!rerender);
          setMustFinish(false);
        }
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        duration,
        ease: "linear",
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  const handleHoverStart = () => {
    setDuration(stopOnHover ? 9999999 : CAROUSEL_SLOW_DURATION);
    setMustFinish(true);
  };

  const handleHoverEnd = () => {
    setDuration(CAROUSEL_FAST_DURATION);
    setMustFinish(true);
  };

  return {
    xTranslation,
    handleHoverStart,
    handleHoverEnd,
    ref
  };
};

export default useInfiniteCarousel;
