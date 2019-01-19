import React from "react";
import "./style.css";

function SushiCard(props) {
  return (
        <img className="sushiImages" alt={props.name} src={props.image} onClick={props.imageClick} />
  );
}

export default SushiCard;
