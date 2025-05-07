import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
  <div>
   <h1>
    Welcome to my app
    <div>
      {isLoggedIn && <LogoutBtn /> }
    </div>
   </h1>
  </div>
  )
}
export default App
