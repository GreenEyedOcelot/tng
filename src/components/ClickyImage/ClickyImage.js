import React from "react";
import "./ClickyImage.css";


// this is just a functional "dumb" stateless component


const ClickyImage = props => (
      <div className = "col-xs-6 col-sm-4 col-md-3 col-xl-2" >
         <div className = "thumbnail">
            <img className="imagestyle" src={props.filename} alt={props.name} onClick={() => props.checkGuess(props.id)} />
         </div> 
      </div>
   
);

export default ClickyImage;


