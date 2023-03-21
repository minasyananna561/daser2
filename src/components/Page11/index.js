import { useState } from "react";
import './index.css'


export const Page11 = () => {
const [text,setText]=useState("Home")
const [active,setActive]=useState(1)
 let changActiv=(act)=>{
  setActive(act)
  if(act===1){
    setText("Home")
  }else if(act===2){
    setText("About")
 
  }else{
    setText("Contacts")
 
  }
 }
return (
    <>
    <ul className="menu">
      <li onClick={()=>changActiv(1)} className={active==1 ? "activeborder":""}>Home</li>
      <li onClick={()=>changActiv(2)} className={active==2 ? "activeborder":""}>About</li>
      <li onClick={()=>changActiv(3)} className={active==3 ? "activeborder":""}>Cntacts</li>

    </ul>

    <h1>{text}</h1>

    </>
      );
}
