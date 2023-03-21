import React, { useState } from 'react'
let Foods = [
    {
        id: 1,
        name: "Pizza",
        description: "Italian Pizza",
        
    },
    {
        id: 2,
        name: "Sandwitch",
        description: "German Sandwich"
    },
    {
        id: 3,
        name: "Hamburger",
        description: "Danish Hamburger"
    },
    

]
export const Page6 = () => {
    const [status, setStatus]=useState(false)
    console.log(Foods)
    

    
  

  return (
    <div>
      {Foods.map((Food,index) => {
        return  <h1  onClick={()=> setStatus(!status)} key={index} style={{cursor:"pointer"}}>
        {status &&
        <span  style={{background:"red"}}>&#10003;</span>}
        {Food.name} - {Food.description}
        
        </h1> 
    })}
    </div>
  )
}
 