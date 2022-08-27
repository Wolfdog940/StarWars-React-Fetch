import React,{useContext} from "react";
import { Context } from "../store/appContext";

import { Home } from "../views/home";

import "../../styles/home.css";
import { useParams } from "react-router-dom";



const Info = (props) => {
    
    const{store,actions}=useContext(Context);

    let {posicion,type}= useParams();

    let planetas=store.planets[posicion];
    let personajes=store.character[posicion];
    let vehiculos=store.vehicles[posicion];
   
    
   
 console.log(type)
   
   
    
    
   
 
   
    
  return (
    (type=="characters")?
    (<div className="info">
      <div className="text-warning">{personajes?.name}</div>
    <div className="text-warning">{personajes?.gender}</div>
    </div>):((type=="planets")?(<div className="info">
      <div className="text-warning">{planetas?.name}</div>
    <div className="text-warning">{planetas?.terrain}</div>
    </div>):(<div className="info">
      <div className="text-warning">{vehiculos?.name}</div>
    <div className="text-warning">{vehiculos?.model}</div>
    </div>))
    
    

    
  );
};




export default Info;