import { useState } from "react";

export let Page5=()=>{
  const [selected, setSelected] = useState([]);


  const options = [
      { value: "", text: "Select color" },
      { value: "red", text: "red" },
      { value: "green", text: "green" },
      { value: "blue", text: "blue" },
      { value: "pink", text: "pink" },
      { value: "yellow", text: "yellow" },
    ];

  const  handleChang=(e)=>{
      setSelected([...selected,e.target.value])
    }
return (
  <div>
      {/* tpuma selectnern */}
<select value={selected} onChange={handleChang} style={{marginLeft:"600px"}}>
{options.map((item)=>(
<option value={item.value}>
  {item.text}
</option>
))}
</select>


{/* tpuma divern */}
<div style={{ width: "auto", height: "100px" }}>
   {selected.map((item) => (
    <div
      style={{
        width: "100px",
        height: "50px",
        border: "solid",
        background: `${item}`,
        float: "left",
        marginLeft: "20px",
      }}
    >
     </div>
  ))}
</div>

  </div>
)
}