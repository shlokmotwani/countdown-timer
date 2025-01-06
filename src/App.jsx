import { useEffect, useState } from "react";
import "./App.css";
const DURATION_IN_SECONDS = 60;

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

  function handleReset() {
    setPaused(true);
    setTimer(DURATION_IN_SECONDS);
  }

  return (
    <div id="main">
      <span id="timer">{timer}</span>
      <div id="start-stop-buttons">
        <button onClick={() => setPaused(false)} disabled={!paused}>
          Start
        </button>
        <button onClick={() => setPaused(true)} disabled={paused}>
          Pause
        </button>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
