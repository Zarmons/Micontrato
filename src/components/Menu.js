import React from "react";
import { Link } from "react-router-dom";
import {FcHome, FcBusinessman, FcDecision} from "react-icons/fc";


const Menu = () => {
  return (
    <div  className="container-menu center">
      <ul className="App layout-menu center">
        <li>
          
          <Link to="/" ><FcHome></FcHome>Inicio</Link>
        </li>
        <li>
          <Link to="/usuarios"><FcBusinessman></FcBusinessman>Usuarios</Link>
        </li>
        <li>
          <Link to="/preguntas"><FcDecision></FcDecision>Preguntas</Link>
        </li>
      </ul>
    </div>
  );
};
 
export default Menu;
