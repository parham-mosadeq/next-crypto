import { useState, useEffect } from 'react';

const useCurrentWidth = () => {
  const [currentWidth, setCurrentWidth] = useState();
  useEffect(() => {
    setCurrentWidth(window.innerWidth);
  });

  return [currentWidth];
};

export default useCurrentWidth;
