import React, { useEffect, useState } from 'react';

function UseWindowSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const calcWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', calcWindowWidth);
  }, [width]);

  return [width, setWidth];
}

export default UseWindowSize;
