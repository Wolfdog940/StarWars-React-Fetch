import React,{useContext} from "react";

import "../../styles/home.css";
import Character from "../component/character.jsx";
import Vehicles from "../component/vehicles.jsx";
import Planets from "../component/planets.jsx";
import { Context } from "../store/appContext";




export const Home = () => {
  const { store, actions } = useContext(Context);


  return (
    <div className="text-center mt-5">
      <div className="row">
        <h1 className="">Characters</h1>
        <div className="d-flex">
          {store.character.map((item,i) => (
            
              <Character key={i} index={i} item={item} type={"characters"} />
            
          ))}
        </div>
      </div>
	  <div className="row">
        <h1 className="">Planets</h1>
        <div className="d-flex">
          {store.planets.map((item,i) => (
            
              <Planets key={i} index={i} item={item} type={"planets"}  />
            
          ))}
        </div>
      </div>
	  <div className="row">
        <h1 className="">Vehicles</h1>
        <div className="d-flex">
          {store.vehicles.map((item,i) => (
            
              <Vehicles key={i} index={i} item={item} type={"vehicles"}  />
            
          ))}
        </div>
      </div>
   
    </div>
  );
};
