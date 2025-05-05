import UserCard from './components/UserCard'
import React from 'react'
import './App.css'
import Madhu from './assets/madhu.jpg'
import Pooja from './assets/shivani.jpg'
import Shikha from './assets/shikha.jpg'
import Shivani from './assets/shivani.jpg'
function App() {

  return (
    <div>
      <h1>My User Cards</h1>
      <div className='userCardContainer1'>
        <UserCard name="Madhumita Y. Sugandhi" eid="madhumit@gmail.com" image={Madhu}/>
        <UserCard name="Pooja G. Borkar" eid="poojagb@gmail.com" image={Pooja}/>
        <UserCard name="Shikha Singh" eid="skikhasjt@gmail.com" image={Shikha}/>
        <UserCard name="Shivani S. Patil" eid="shivanisp@gmail.com" image={Shivani}
        />
      </div>
    </div>
  )
}

export default App
