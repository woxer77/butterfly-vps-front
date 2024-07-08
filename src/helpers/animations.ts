export const createVariants = (delay: number, duration: number) => {
  return {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * delay,
        duration: duration
      },
    }),
  };
}
