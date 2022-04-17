/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Calculator.css'

export default props => {
  return(
    <div className="calculator">
      <h1 className="result">0</h1>
      <div className="commands">
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="operators">/</button>
        <button className="gray">7</button>
        <button className="gray">8</button>
        <button className="gray">9</button>
        <button className="operators">X</button>
        <button className="gray">4</button>
        <button className="gray">5</button>
        <button className="gray">6</button>
        <button className="operators">-</button>
        <button className="gray">1</button>
        <button className="gray">2</button>
        <button className="gray">3</button>
        <button className="operators">+</button>
        <button className="gray double">0</button>
        <button className="gray">,</button>
        <button>=</button>
      </div>
    </div>
  )
}