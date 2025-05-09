import React, {useContext} from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
    
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext);
  return (
    <div>
       <button>
        Change Theme
       </button>
    </div>
  )
}

export default ChildC