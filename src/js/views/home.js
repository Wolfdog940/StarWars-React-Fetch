import React from "react";

import "../../styles/home.css";
import Character from "../component/character.jsx";
import Vehicles from "../component/vehicles.jsx";
import Planets from "../component/planets.jsx";
import { Context } from "../store/appContext";
import { useContext } from "react/cjs/react.development";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="row">
        <h1 className="">Characters</h1>
        <div className="d-flex overflow-auto">
          {store.character.map((item,i) => (
            <div>
              <Character key={i} index={i} item={item} type="character" />
            </div>
          ))}
        </div>
      </div>
	  <div className="row">
        <h1 className="">Planets</h1>
        <div className="d-flex overflow-auto">
          {store.planets.map((item,i) => (
            <div>
              <Planets key={i} index={i} item={item} type="planets" />
            </div>
          ))}
        </div>
      </div>
	  <div className="row">
        <h1 className="">Vehicles</h1>
        <div className="d-flex overflow-auto">
          {store.vehicles.map((item,i) => (
            <div>
              <Vehicles key={i} index={i} item={item} type="vehicles" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
