import { useEffect, useState, useRef, use } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
     timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  return (
  
  <div>
    <h1>Timer: {time} sec</h1>
    <button className='btn-start' onClick={startTimer}>Start</button>
    <button className='btn-stop' onClick={stopTimer}>Stop</button>
    <button className='btn-reset' onClick={resetTimer}>Reset</button>
  </div>)
  
}

export default App
