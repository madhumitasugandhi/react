import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {

    const {id} = useParams();
  return (
    <div>
        <h3>Params: {id}</h3>
    </div>
  )
}

export default ParamComp