import React from 'react'
import { NavLink } from "react-router-dom";
import mainBurger from "../../img/burger.png"

export const ChefNavBar = () => {
  return (
    <nav className="navServer">
        <img src={mainBurger} alt="burger" />
        <ul>
          <li><NavLink activeClassName="active" to="/cocina/preparar-orden">Órdenes a preparar</NavLink></li>
          <li><NavLink activeClassName="active" to="/cocina/historial-pedidos">Historial de los pedidos</NavLink></li>
          <li><NavLink activeClassName="active" to="/">Salir</NavLink></li>
        </ul>
      </nav>
  )
}
