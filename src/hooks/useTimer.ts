import { useEffect, useState } from "react";

const useTimer = (delay: number) => {
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    // Short delay to allow state to settle before rendering
    const timer = setTimeout(() => {
      setTimerCompleted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return {
    timerCompleted,
    setTimerCompleted,
  };
};

export default useTimer;
