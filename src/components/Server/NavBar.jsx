import React from 'react'
import { NavLink } from "react-router-dom";
import mainBurger from "../../img/burger.png"

export const NavBar = () => {
  return (
    <nav className="navServer">
      <img src={mainBurger} alt="burger" />
      <ul>
        <li><NavLink activeClassName="active" to="/mesero/hacer-pedidos">Realizar pedidos</NavLink></li>
        <li><NavLink activeClassName="active" to="/mesero/estado-pedidos">Estado de los pedidos</NavLink></li>
        <li><NavLink activeClassName="active" to="/mesero/historial-pedidos">Historial de los pedidos</NavLink></li>
        <li><NavLink activeClassName="active" to="/">Salir</NavLink></li>
      </ul>
    </nav>
  )
}
