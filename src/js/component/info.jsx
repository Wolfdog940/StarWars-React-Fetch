import React,{useContext} from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

import "../../styles/home.css";
import { useParams } from "react-router-dom";


const Info = (props) => {
    const{type}=props
    const{store,actions}=useContext(Context);
    let {posicion}= useParams();
    let planetas=store.planets[posicion];
    let personajes=store.character[posicion];
    let vehiculos=store.vehicles[posicion];
    console.log(store.actions)
    console.log(planetas)
   

   
   
    
    
   
 
   
    
  return (
    (type==("characters"))?
    <div className="info">
      <div className="text-warning">{personajes?.name}</div>
    <div className="text-warning">{personajes?.gender}</div>
    </div>
    :<div>gonorrea</div>
    

    
  );
};




export default Info;