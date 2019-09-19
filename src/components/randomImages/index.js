import React from "react";
import "./style.css";

function RandomImage(props){
    return(
        <div className="card shuffleImages" onClick={() => props.shuffleImages(props.id)}>
            <div className="img-container" >
                <img alt={props.name} src={props.image}  id={props.id} />
            </div>
        </div>
    );
}

export default RandomImage;