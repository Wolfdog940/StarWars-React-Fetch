import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Character = (props) => {
  const { item, index, type,} = props;

  return (
    <div className="card  bg-dark text-warning">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          (props.index + 1) +
          ".jpg"
        }
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">
          <div>Gender : {item.gender} </div>
          <div>Hair Color : {item.hair_color}</div>
          <div>Eye Color: {item.eye_color} </div>
          <div>index: {index} </div>
        </div>
        <Link to={"/info/" + index + "/" + type}>
          <button className="btn btn-primary">More info!</button>
        </Link>
      </div>
    </div>
  );
};

export default Character;
