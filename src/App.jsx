import { useEffect, useState } from "react";
import "./App.css";
const DURATION_IN_SECONDS = 5;

function App() {
  const [timer, setTimer] = useState(DURATION_IN_SECONDS);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (timer < 0) {
      handleReset();
      return;
    }
    if (!paused) {
      const myInterval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => {
        clearInterval(myInterval);
      };
    }
  }, [timer, paused]);

  function handleStart() {
    setPaused(false);
  }

  function handlePause() {
    setPaused(true);
  }

  function handleReset() {
    setPaused(true);
    setTimer(DURATION_IN_SECONDS);
  }

  return (
    <div id="main">
      <span id="timer">{timer}</span>
      <div id="start-stop-buttons">
        <button onClick={handleStart} disabled={!paused}>
          Start
        </button>
        <button onClick={handlePause} disabled={paused}>
          Pause
        </button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
