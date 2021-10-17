import React, { useEffect, useState } from "react";
import "./Orders.css";
import { doc, query, collection, where, onSnapshot } from "firebase/firestore";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "users", `${user.uid}`, "orders"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {console.log(orders)}
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
