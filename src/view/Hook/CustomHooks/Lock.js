import { useEffect, useState } from "react";

function useLock() {
  const [timeString, setTimeString] = useState("");

  function formatDate(now) {
    const hour = `0${now.getHours()}`.slice(-2);
    const minute = `0${now.getMinutes()}`.slice(-2);
    const second = `0${now.getSeconds()}`.slice(-2);
    return `${hour}:${minute}:${second}`;
  }

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newDate = formatDate(now);
      setTimeString(newDate);
    }, 1000);
    return () => {
      //cleanup
      clearInterval(clockInterval);
    };
  }, []);
  return { timeString };
}

export default useLock;
