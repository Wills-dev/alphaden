import { useEffect, useState } from "react";

const CountUp = ({ targetCount, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = Math.floor(duration / targetCount);
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount++;
      setCount(currentCount);

      if (currentCount === targetCount) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetCount, duration]);

  return <span>{count}</span>;
};

export default CountUp;
