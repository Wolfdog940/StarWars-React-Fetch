import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import "../../styles/home.css";

const Vehicles = (props) => {
    const {item,index,type} = props;
    const[color,setColor]= useState("")
  return (
    <div className="card  bg-dark text-warning">
        
        <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(props.index+4)+".jpg"
              
            }  />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">
          <div>Cost in credits : {item.cost_in_credits} </div>
          <div>Model : {item.model}</div>
          <div>Manufacturer : {item.manufacturer} </div>
        </div>
        <Link to={"/info/"+index+"/"+type}>
        <button className="btn btn-primary">More info!</button>
				</Link>
        <span onClick={() => setColor("yellow")}
              onDoubleClick={() => setColor("")}
            className={"yellow " + (color === "yellow" ? "yellow":null || color === "" ? "white":"")}>
 
 
            <i className="fas fa-heart"></i></span>
      </div>
    </div>
  );
};

export default Vehicles;
