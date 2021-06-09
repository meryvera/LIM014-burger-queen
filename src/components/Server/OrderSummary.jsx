import React from "react";
import { OrderSummaryProd } from "./OrderSummaryProd";
import { createOrder } from '../../firebase/firestore'

export const OrderSummary = ({ handleRemove, handleQty, state, setState, initialValues }) => {

  const totalSum = (products) => {
    const total = products.reduce((acc, item) => acc + item.price * item.amount, 0);
    return total
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState({...state, [name] : value})
  };

  const dataStore = async(state) => {
    console.log(state);
    await createOrder(state);
    await setState(initialValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dataStore(state);
  };

  return (
    <form className="orderList" onSubmit={handleSubmit}>
      <h3>Resumen del pedido</h3>
      <section className="customerInfo">
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
          onChange={handleInputChange}
          value={state.client}
        />
        <p>Mesero: </p>
        <input
          type="text"
          name="server"
          onChange={handleInputChange}
          value={state.server}
        />
        <p># Mesa : </p>
        <input
          type="number"
          name="table"
          min ="1" max="9"
          placeholder="1-9"
          onChange={handleInputChange}
          value={state.table}
        />
      </section>
      <section className="orderDetails">
        <div className="titles">
          <h4>Productos</h4>
          <h4>Precio</h4>
        </div>
        <aside className="sumary">
          {state.products.map((item) => (
            <OrderSummaryProd
              key={item.id}
              item={item}
              handleQty={handleQty}
              handleRemove={handleRemove}
            />
          ))}
          <h3>Total:&nbsp;&nbsp;&nbsp;S/. {totalSum(state.products)}</h3>
        </aside>
      </section>
      <button className="submitButton" >
        Enviar a cocina
      </button>
    </form>
  );
};
