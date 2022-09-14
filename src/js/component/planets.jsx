import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/home.css";

const Planets = (props) => {
  const { item, index, type } = props;
  const [color, setColor] = useState("");

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
          <span
            onClick={() => setColor("yellow")}
            onDoubleClick={() => setColor("")}
            className={
              "yellow " +
              (color === "yellow"
                ? "yellow"
                : null || color === ""
                ? "white"
                : "")
            }
          >
            <i className="fas fa-heart"></i>
          </span>
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
