import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useState,useContext } from "react";


const Planets = (props) => {
  const { item, index, type } = props;
  const [color, setColor] = useState("");
  const { store, actions } = useContext(Context);

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        
      <div className="card  bg-dark text-warning">
        {props.index + 1 == 1 ? (
          <img
            src={
              "https://qph.cf2.quoracdn.net/main-qimg-30fe49cbb053e20c04d2704f737acce3-lq"
            }
          />
        ) : (
          <img
            src={
              "https://starwars-visualguide.com/assets/img/planets/" +
              (props.index + 1) +
              ".jpg"
            }
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div className="card-text">
            <div>Terrain : {item.terrain} </div>
            <div>Population : {item.population}</div>
          </div>
          <Link to={"/info/" + index + "/" + type}>
            <button className="btn btn-primary">More info!</button>
          </Link>
          {!store.favorites.includes(
                store.planets[props.index].name
              ) ? (
                <i
                className="fas fa-heart"
                  onClick={() =>
                    actions.getFavorites(store.planets[props.index].name)
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

export default Planets;
