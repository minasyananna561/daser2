import React,{useState} from "react";
import './index.css'

function Click({name,desc,sym}) {
    const [status, setStatus] = useState(false);
    let a= <>&#10003;</>
  
  return (
    <div  className="page2_item_border">
    <h1  onClick={()=> setStatus(!status)}>
      {status &&
      <span  style={{background:"red"}}>{a}</span>

      }
      {name} - {desc} <sup>{sym}</sup></h1>
</div>  
  )
}

export default Click