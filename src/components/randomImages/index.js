import React from "react";
import "./style.css";

function RandomImage(props){
    return(
        
        <div className="card clickedImages" onClick={() => props.isClicked(props.id)}>
            <div className="img-container" >
                <img alt={props.name} src={props.image}  id={props.id} />
            </div>
        </div>
    );
}

export default RandomImage;