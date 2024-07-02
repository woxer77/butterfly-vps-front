import React from 'react';

declare let Modernizr: any;

const useWebpSupport = () => {
  const [isWebpSupported, setIsWebpSupported] = React.useState(Modernizr.webp);

  React.useEffect(() => {
    Modernizr.on('webp', (result: boolean) => {
      setIsWebpSupported(result.valueOf());
    });
  }, []);

  return isWebpSupported;
};

export default useWebpSupport;
