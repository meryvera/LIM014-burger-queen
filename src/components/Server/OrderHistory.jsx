import React from 'react'
import { CardsHistory } from './CardsHistory'
import { NavBar } from './NavBar'
import { readAllOrders } from '../../firebase/firestore'

export const OrderHistory = () => {

  const [ordersH, setOrdersH] = React.useState([]);

  React.useEffect(() => {
    readAllOrders(setOrdersH);
  }, []);

  return (
    <section>
      <NavBar />
      <article className="statusCard">
        {ordersH.length > 0
          ? ordersH.map((orderH) => (
              <CardsHistory
                orderH={orderH}
                key={orderH.id}
              />
            ))
          : null
        }
      </article>
    </section>
  )
}
