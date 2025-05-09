import { useState, useEffect} from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'

function App() {
  //const [count, setCount] = useState(0);
 
  /*useEffect(() => {
    alert("I wil run on only 1st render");
    }, [])
  
    function handleClick() {
      setCount(count + 1);
    }*/

  return (
      <div>
        <TimerComponent />
        <LoggerComponent />
        <DataFetcher />
        {/*<h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>*/}
        <h1>Welcome to the Hook Effect</h1>
      </div>
  )
}

export default App
