import React from "react";
import "./style.css";

function Score(props) {
    

   return <div className="gameScore">
     <div>
    <h3 className="score"> {props.total}</h3>
    </div>
    <h3 className="status">{props.status}</h3>
    </div>
  
}
export default Score;