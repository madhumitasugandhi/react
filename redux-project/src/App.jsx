import { use } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }


  return (
    <div >
      <div className="App">
        <button onClick={handleIncrementClick}> + </button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}> - </button>
      </div>

      <div className='reset'>
        <button onClick={handleResetClick}> Reset </button>

      </div>
      <input
        type='Number'
        value={amount}
        placeholder='EnterAmount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className='inc-amount'>
        <button onClick={handleIncAmountClick}> Inc by Amount </button>
      </div>

    </div>
  )
}

export default App
