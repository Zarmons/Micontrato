import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <div  className="container-menu center">
      <ul className="App-header" className="layout-menu center">
        <li>
          <Link to="/" >Inicio</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/preguntas">Preguntas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
