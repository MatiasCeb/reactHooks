import React from "react";
import "./styles/card.scss";

const Card = (props) => {
    const {character} = props;
    const {image, name, species} = character;
    console.log("props", props)
    
    return (
    <div className="card-item">
        <img className="card-item__img" src={image} alt={name}  />
        <div className="card-item__details">
          <p className="card-item__details--title">{name}</p>
          <p className="card-item__details--subtitle">
            {`${name} ${species}`}
          </p>
        </div>
    </div>
)};

export default Card;