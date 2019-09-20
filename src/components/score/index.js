import React from "react";
import "./style.css";

function Score(props) {
    

   return <div className="gameScore">
    <h3 className="score"> {props.score}</h3>
    <h3 className="status">{props.status}</h3>
    </div>
  
}
export default Score;