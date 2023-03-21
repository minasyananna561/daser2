import React, { useState } from 'react'

export const Page8 = () => {
    const [color,setColor]=useState(false)
    const [text,setText]=useState("green")
   
    let randomcolor=Math.floor(Math.random()*16252525).toString(16)
    let handleClick=()=>{
setColor(!color)
setText(color?'red':'blue')

    }
  return (
    <div style={{margin:"auto"}}>
        <h1 style={{color:text}}>hello world</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

