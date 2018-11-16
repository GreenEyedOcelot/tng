import React from "react";
import "./ClickyScores.css";


// this is just a functional "dumb" stateless component


const ClickyScores = props => (
   <div className="mx-auto scorebarstyles">
   <span className="d-inline p-1 bg-primary text-white scorestyles">Current Score: {props.currentScore}</span>
   <span className="d-inline p-1 bg-dark text-white scorestyles">High Score: {props.highScore}</span>
   </div>

);

export default ClickyScores;

