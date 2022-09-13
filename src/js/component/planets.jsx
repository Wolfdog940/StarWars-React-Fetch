import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Planets = (props) => {


    const {item,index,type} =props;


  return (
    <div className="card  bg-dark text-warning">
     {props.index+1==1?
      <img src={"https://qph.cf2.quoracdn.net/main-qimg-30fe49cbb053e20c04d2704f737acce3-lq"
              
            }  />
        
        :<img src={"https://starwars-visualguide.com/assets/img/planets/"+(props.index+1)+".jpg"
              
            }  />}
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="card-text">
          <div>Terrain : {item.terrain} </div>
          <div>Population : {item.population}</div>
        </div>
        <Link to={"/info/"+index+"/"+type}>
					<button className="btn btn-primary">More info!</button>
				</Link>
        <span><i className="far fa-heart"></i></span>
      </div>
    </div>
  );
};

export default Planets;
