
import React from "react";
import Click from "./Click";
import './index.css'

let Foods = [
    {
        id: 1,
        name: "Pizza ",
        description: "Italian Pizza",
        
    },
    {
        id: 1,
        name: "Sandwitch",
       symbol:<>&reg;</>,
        description: "German Sandwich"
    },
    {
        id: 3,
        name: "Hamburger",
        description: "Danish Hamburger"
    },
    

]


function Page2() {
    const Dishes = Foods.map((Food,index) => {
        return <Click name={Food.name} desc={Food.description} key={index} sym={Food.symbol} />
    })
   
  return (
    <div style={{width:"60%", marginLeft:"400px",marginTop:"100px"}}>
    
     <span className="page2_item"> {Dishes}</span>
     </div>
  )
}

export default Page2