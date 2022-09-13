import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Home } from "../views/home";

import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Info = (props) => {

 

  

 

  const { store, actions } = useContext(Context);
  

  let { posicion,type} = useParams();

  let planetas = store.planets[posicion];
  let personajes = store.character[posicion];
  let vehiculos = store.vehicles[posicion];

  console.log("index")

  return type == "characters" ? (
    <div className="info">
      <div className="text-warning">{personajes?.name}</div>
      <div className="text-warning">{personajes?.gender}</div>
      
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          (parseInt(posicion)+1)+
          ".jpg"
        }
      />
    </div>
  ) :type == "planets" ? (
    <div className="info">
      <div className="text-warning">{planetas?.name}</div>
      <div className="text-warning">{planetas?.terrain}</div>
      <img
        src={
          "https://starwars-visualguide.com/assets/img/planets/" +
          (posicion) +
          ".jpg"
        }
      />
    </div>
  ) :type == "vehicles"(
    <div className="info">
      <div className="text-warning">{vehiculos?.name}</div>
      <div className="text-warning">{vehiculos?.model}</div>
      <img
         src={
          "https://starwars-visualguide.com/assets/img/planets/" +
          (posicion) +
          ".jpg"
        }
      />
    </div>
  );
};

export default Info;
