import React from "react";
import "./style.css";

function Score(props) {
    

   return <div className="gameScore">
     
    <p className="playerScore"> {props.total}</p>
    
    <p className="playersStatus">{props.status}</p>
    </div>
  
}
export default Score;