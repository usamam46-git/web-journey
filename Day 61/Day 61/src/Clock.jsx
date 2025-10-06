import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{time.toLocaleTimeString()}</h1>
       <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{seconds}s</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </div>
  );
};

export default Clock;
