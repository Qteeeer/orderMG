import React, { useState } from "react";
import "./order.css";
const OrderCard = ({ order }) => {
  const [status, setStatus] = useState(order.metka);

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await fetch("http://localhost:3000/api/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uniqid: order.uniqid, metka: newStatus }),
      });

      if (response.ok) {
        setStatus(newStatus);
      } else {
        alert("Ошибка изменения статуса");
      }
    } catch (e) {
      alert("Не удалось изменить статус");
    }
  };

  const clientName =
    order.client && (order.client.imya || order.client.familiya)
      ? `${order.client.imya || ""} ${order.client.familiya || ""}`.trim()
      : "Не указан";

  const clientPhone = order.client?.phone || "Не указан";

  return (
    <div className="order-card">
      <div className="order-header">
        <span className="order-id">Заказ: {order.uniqid}</span>
        <span className="order-date">{order.datetime}</span>
      </div>

      <div className="order-client">
        <strong>Клиент:</strong> {clientName}
        <br />
        <strong>Телефон:</strong> {clientPhone}
      </div>

      <div className="order-products">
        <strong>Состав:</strong>
        <ul>
          {order.products.map((p, idx) => (
            <li key={idx}>
              <b>{p.name}</b> × {p.count} шт
              {p.ingredients_desc && (
                <div>
                  <em>+ {p.ingredients_desc}</em>
                </div>
              )}
              {p.ingredients_del_desc && (
                <div>
                  <em>- {p.ingredients_del_desc}</em>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="order-details">
        <p>
          <strong>Способ оплаты:</strong> {order.oplata}
        </p>
        <p>
          <strong>Статус оплаты:</strong>
          <span className={order.paidup === 1 ? "paid" : "unpaid"}>
            {order.paidup === 1 ? "🟢 Оплачен" : "🔴 Неоплачен"}
          </span>
        </p>
        <p>
          <strong>Сумма:</strong> {order.price} ₽
        </p>
        <p>
          <strong>Способ доставки:</strong> {order.dostavka}
        </p>

        {order.dostavka !== "Самовывоз" && (
          <p>
            <strong>Адрес:</strong> {order.ulitsa}, д. {order.dom}
            {order.korpus ? `, корп. ${order.korpus}` : ""}
            {order.kvartira ? `, кв. ${order.kvartira}` : ""}
            {order.podyezd ? `, подъезд ${order.podyezd}` : ""}
            {order.etaj ? `, этаж ${order.etaj}` : ""}
            {order.domofon ? `, домофон ${order.domofon}` : ""}
          </p>
        )}

        {order.question && (
          <p>
            <strong>Комментарий:</strong> {order.question}
          </p>
        )}
      </div>

      <div className="order-actions">
        <button onClick={() => handleStatusChange(1)} disabled={status === 1}>
          🔄 Готовится
        </button>
        <button onClick={() => handleStatusChange(2)} disabled={status === 2}>
          📦 Готов
        </button>
        <button onClick={() => handleStatusChange(3)} disabled={status === 3}>
          🚚 Передан
        </button>
        <button onClick={() => handleStatusChange(5)} disabled={status === 5}>
          ✅ Выполнен
        </button>
        <button onClick={() => handleStatusChange(0)} disabled={status === 0}>
          🚫 Отменить
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
