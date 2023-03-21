import React, { useState } from "react";
export let Lesstext=(props)=>{
     const text=props.text;
    let [showLess,setShowLess]=useState(true)
    
    const max =55
    if(text.length <=max){
        return <span>
            {text}
        </span>
    }
    return(
        <span style={{marginTop:"50px"}}>
           {showLess ? `${text.substring(0,max)}...`:text}
    <a href='#' onClick={(e)=>{
        e.preventDefault();
        setShowLess(!showLess)
    }}> 
        
        {showLess ? "more": "less"}</a>
    </span>  
        
    )
}