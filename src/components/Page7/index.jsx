import React, { useState } from 'react'
import { Enter } from './enter'

export const Page7 = () => {
    const [state,setState]=useState([])
    const [value,setValue]=useState('')

    let Add=()=>{
     setState(state.concat({value}))
      setValue('')
    }
  return (
    <div>

<input value={value} onChange={(e)=>setValue(e.target.value)}/>
  
   <button onClick={Add}>send</button>
 
   <ul>
        {state.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
<Enter/>
    </div>
  )
}
