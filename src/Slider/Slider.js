import React, { useState } from "react";

import "./Slider.css";

export let Slider = (props) => {
  const name = props.name;
  
  const { step, min, max, value, defaultLength, onChangeValue } = props;
 
  const [number, setNumber] = useState(0);
  const [range, setRange] = useState(defaultLength);

  const handleChange = () => (e) => {
    onChangeValue(e);
    setRange(e.target.value);
  };
  
  return (
    <div className="slider_container">
      <p>{name}</p>
      <h1>{number}</h1>
      <div>
        <input
          className="range_slider "
          type="range"
          step={step}
          min={min}
          max={max}
          value={number}
          //disabled
          onChange={handleChange(max)}
        />
      </div>
      <span className="range_values">{range}</span>
      <div className="range_min_max_values">
        <span>{min}</span> <span>{max}</span>
      </div>
      <div>
        <button className="color-danger"
          onClick={(e) => {
            setNumber(number + step);
            onChangeValue(e);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setNumber(number - step);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};
