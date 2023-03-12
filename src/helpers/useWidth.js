import { useEffect, useState } from 'react';

const useWidth = (originalWidth) => {
  const [initWidth, setInitWidth] = useState(originalWidth);

  useEffect(() => {
    const handleResize = (e) => {
      // if (!e.currentTarget.innerWidth) {
      //   setInitWidth(e.currentTarget.innerWidth);
      // }
      // 
      // setInitWidth(window.innerWidth);
      setInitWidth(e.currentTarget.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [initWidth]);

  return [initWidth];
};

export default useWidth;
