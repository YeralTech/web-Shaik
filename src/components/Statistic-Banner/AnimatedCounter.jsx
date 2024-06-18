import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default AnimatedCounter;
