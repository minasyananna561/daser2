import React from 'react'
import { useState } from 'react'
let numbers = [64, 84, 22, 32, 83, 65, 51, 26, 23, 56]

export const Page12 = () => {
    let [filter,setFilter]=useState(numbers)
const handleChang=(e)=>{
    let value=e.target.value
    if(value=="even"){
        setFilter(
     numbers.filter((item)=>{
        if(item%2==0){
            return true
        }
     }))
    }else{
        setFilter(
        numbers.filter((item)=>{
            if(item%2!=0){
                return true
            }
        }))
    }
}

  return (
    <div>
     <label >Even <input
        type="radio"
      name="even"
        id="even"
        value="even"
        onChange={handleChang}
      />
      </label>
      <label >Odd
       <input
        type="radio"
        name="even"
        id="odd"
        value="odd"
        onChange={handleChang}
      />
      </label>
     <ul>
        {filter.map((number) => {
          return <li key={number}>{number} </li>
        })}
        </ul>


    </div>
  )
}
