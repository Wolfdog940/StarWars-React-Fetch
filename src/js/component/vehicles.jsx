import React from "react";

import { Link } from "react-router-dom";
import "../../styles/home.css";

const Vehicles = (props) => {
    const {item} =props;
  return (
    <div className="card remwidth bg-dark text-warning">
        
        <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(props.index+4)+".jpg"
              
            }  />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">
          <div>Cost in credits : {item.cost_in_credits} </div>
          <div>Model : {item.model}</div>
          <div>Manufacturer : {item.manufacturer} </div>
        </div>
        <Link to="./info">
					<button className="btn btn-primary">More info!</button>
				</Link>
      </div>
    </div>
  );
};

export default Vehicles;
