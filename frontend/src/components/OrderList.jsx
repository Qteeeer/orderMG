import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import "./order.css"; // ✅ Должен быть в той же папке
const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("http://localhost:3000/api/orders");
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 30000); // автообновление каждые 30 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderCard key={order.uniqid} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
