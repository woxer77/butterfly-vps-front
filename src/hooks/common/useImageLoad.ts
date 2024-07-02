import { useState } from 'react';

const useImageLoad = (imageCount: number) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return { loadedImages, handleImageLoad };
};

export default useImageLoad;
