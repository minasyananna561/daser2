
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import { Bootstrap } from './Bootstrap';
import { Ar1 } from './Das3/Ar1';

import { Lesstext } from './Lesstext';
import { Name } from './Name';
import { Page3 } from './Page3';
import { Slider } from './Slider/Slider';

function App1() {
  const [rangeValue,setRangeValue]=useState(0)
 const [name,setName]=useState("Petros")
   const [lastname,setLastname]=useState("Petrosyan")
   
   const onChangeSlider= (e) =>{
    setRangeValue(e.target.value)
  }
  return (
    <div className="App">
 
    <Slider
    min={0}
    max={100}
    step={1}
    defaultLength={0}
    value={rangeValue}
    onChangeValue={onChangeSlider}
   
    />

  <Name lastname={lastname}><h1>{name}</h1></Name>
   <button onClick={()=>{
            setName("Poghos")
            setLastname("Poghosyan")
        }}>Chang name</button>

        <Bootstrap/>
        <Page3 name="Barev"/>

        <Lesstext text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "/>
    <Ar1/>
    </div>
  );
}

export default App1;
