import { useState, useLayoutEffect } from 'react';

function getWindowWidth() {
  const { innerWidth: windowWidth } = window;
  return {
    windowWidth
  };
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useLayoutEffect(() => {
    function handleResize() {
        setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}