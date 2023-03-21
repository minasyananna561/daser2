import React, { useState } from 'react'

export const Enter = () => {
    const [state,setState]=useState([])
    const [value,setValue]=useState('')

    const Add=(e)=>{
     e.preventDefault()
     setState([...state,
        { id:state.length,
            name:value}
          ])
            setValue('')
    }
  return (
    <div>
        <form onSubmit={Add}>
<input value={value}
onChange={e => setValue(e.target.value)}
/>
</form>
<ul>
    {state.map((item)=>(
        <li>{item.name}</li>
    ))}
</ul>
    </div>
  )
}
