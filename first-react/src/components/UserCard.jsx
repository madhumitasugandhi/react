import React from 'react'
import './Usercard.css'

const UserCard = (props) => {
  return (
    <div className='userCardContainer'>
      <div>
        <p className='name'>{props.name}</p><br />
        <p className='username'>{props.eid}</p><br />
      </div>
      <div>
        <img src={props.image} alt="User Avatar" className='userAvatar' /><br />
      </div>
      <div>
        <p>Age: 25</p><br />
      </div>
      <div>
        <p>Location: India</p><br />
      </div>
      <div>
        <p>Occupation: Software Developer</p><br />
      </div>
      <div>
        <p>Bio: Passionate about coding and technology.</p><br />
      </div>
      <div>
        <p>Hobbies: Coding, Reading, Traveling</p><br />
      </div>
      <div>
        <p>Skills: JavaScript, React, Node.js</p><br />
      </div>
      <div>
        <p className='interest'>Interests:</p>
        <ul className='interestsList'>
          <li>Programming</li>
          <li>Traveling</li>
          <li>Photography</li>
          <li>Music</li>
        </ul>
      </div>

      <div className='btnGroup'>
        <button className='userButton'>Follow</button>
        <button className='userButton'>Message</button>
        <button className='userButton'>View Profile</button>
        <button className='userButton'>Block</button>
      </div>
    </div>



  )
}

export default UserCard