import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";

function Order({ order }) {
  console.log(order);
  console.log("ssssssssssssssssssssss");
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment.unix(order.data.orders.created).format("MMMM Do YYYY, h:mma")}
      </p>

      <p className="order__id">
        <small>{order.data.id}</small>
      </p>

      {order.data.orders.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        ></CheckoutProduct>
      ))}
    </div>
  );
}

export default Order;
