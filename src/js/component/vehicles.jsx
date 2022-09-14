import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useState,useContext } from "react";

const Vehicles = (props) => {
  const { item, index, type } = props;
  const [color, setColor] = useState("");
  const { store, actions } = useContext(Context);
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      
    <div className="card  bg-dark text-warning">
      <img
        src={
          "https://starwars-visualguide.com/assets/img/vehicles/" +
          (props.index + 4) +
          ".jpg"
        }
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">
          <div>Cost in credits : {item.cost_in_credits} </div>
          <div>Model : {item.model}</div>
          <div>Manufacturer : {item.manufacturer} </div>
        </div>
        <Link to={"/info/" + index + "/" + type}>
          <button className="btn btn-primary">More info!</button>
        </Link>
        {!store.favorites.includes(
                store.vehicles[props.index].name
              ) ? (
                <i
                className="fas fa-heart"
                  onClick={() =>
                    actions.getFavorites(store.vehicles[props.index].name)
                  }
                ></i>
              ) : (
                <i className="fa-solid fa-star"></i>
              )}
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>
</div>
  );
};

export default Vehicles;
