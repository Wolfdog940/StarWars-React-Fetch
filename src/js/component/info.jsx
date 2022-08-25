import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import Character from "./character.jsx";

const Info=(props)=>{
    const {item} =props;
return(
    <div>{item.name}</div>
)


}



export default Info