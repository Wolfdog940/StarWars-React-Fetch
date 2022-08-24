import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = (props) => {
    const {item} =props;
  return (
    <div className="card remwidth bg-dark text-warning">
        
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">
          <div>Cost in credits:{item.cost_in_credits} </div>
          <div>Model:{item.model}</div>
          <div>Manufacturer:{item.manufacturer} </div>
        </div>
        <Link>
          <span href="#" className="btn btn-warning">
            Learn more!
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Vehicles;
