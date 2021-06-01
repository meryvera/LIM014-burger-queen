import React from 'react';
import deleteIcon from "../../img/delete.png";

export const OrderList = (props) => {
  console.log(props.choosenElements);

  return (
    <form className="orderList">
      <h2>Resumen del pedido</h2>
      <section className="customerInfo">
        <p>Cliente : </p> <input type="text" />
        <p>Mesero: </p> <input type="text" />
        <p># Mesa : </p>
        <select name="# Mesa">
          <option value="value1">Mesa 1</option>
          <option value="value2">Mesa 2</option>
          <option value="value3">Mesa 3</option>
          <option value="value1">Mesa 4</option>
          <option value="value2">Mesa 5</option>
        </select>
      </section>
      <section className="orderDetails">
        <div className="titles">
          <h4>Productos</h4>
          <h4>Precio</h4>
        </div>
        <aside className="sumary">
          <div className="prodQty">
            <p>Hamburguesa doble vegetariana con queso y huevo</p>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
              <button><img src={deleteIcon} alt="" /></button>
            </div>
          </div>
          <p>S/. 17</p>
        </aside>
        <aside className="sumary">
          <div className="prodQty">
            <p>Hamburguesa doble vegetariana con queso y huevo</p>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
              <button><img src={deleteIcon} alt="" /></button>
            </div>
          </div>
          <p>S/. 17</p>
        </aside>
      </section>
      <button>Enviar a cocina</button>
    </form>
  );
}
