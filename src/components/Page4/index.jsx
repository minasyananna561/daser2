import React, { useState } from 'react'

export const Page4 = () => {
  const [query,setQuery]=useState("")
  const dataList = [
    {
      id: 1,
      name: "cerulean",
      year: 2000,
      color: "#54B2D1",
      pantone_value: "15-4020",
    },
    {
      id: 2,
      name: "fuchsia rose",
      year: 2001,
      color: "#C12575",
      pantone_value: "17-2031",
    },
    {
      id: 3,
      name: "true red",
      year: 2002,
      color: "#AB1932",
      pantone_value: "19-1664",
    },
    {
      id: 4,
      name: "aqua sky",
      year: 2003,
      color: "#7BC4A5",
      pantone_value: "14-4811",
    },
    {
      id: 5,
      name: "tigerlily",
      year: 2004,
      color: "#E2583E",
      pantone_value: "17-1456",
    },
    {
      id: 6,
      name: "blue turquoise",
      year: 2005,
      color: "#53B0AE",
      pantone_value: "15-5217",
    },
    {
      id: 7,
      name: "sand dollar",
      year: 2006,
      color: "#DEC318",
      pantone_value: "13-1106",
    },
    {
      id: 8,
      name: "chili pepper",
      year: 2007,
      color: "#9BABA0",
      pantone_value: "19-1557",
    },
    {
      id: 9,
      name: "blue iris",
      year: 2008,
      color: "#5A5B9F",
      pantone_value: "18-3943",
    },
    {
      id: 10,
      name: "mimosa",
      year: 2009,
      color: "#31505A",
      pantone_value: "14-0848",
    }
  ];
  
    return (
      <div>
        <input type="text" onChange={(e)=>setQuery(e.target.value) }/>
       <table style={{ margin: "auto", border: "solid", width: "300px" }}>
      { dataList.filter((item)=>item.name.toLowerCase().includes(query)).map((item, index) => {
            return (
              <tr key={index} style={{ border: "solid" }}>
                <td style={{ border: "solid",background:`${item.color}`}}>{item.name}</td>
                <td style={{ border: "solid" }}>{item.year}</td>
                <td style={{ border: "solid" }}>{item.pantone_value}</td>
              </tr>
            );
          })}
       </table>
      </div>
    );
}
