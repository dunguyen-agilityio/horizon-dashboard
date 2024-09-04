import { useEffect, useState } from 'react';

const useTimeOut = (seconds = 60): { time: number; isDisabled: boolean } => {
  const [time, setTime] = useState(seconds - 1);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
        return;
      }

      setTime(0);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  return { time, isDisabled: !!time };
};

export default useTimeOut;
