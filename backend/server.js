const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Получить список новых заказов
app.get("/api/orders", async (req, res) => {
  try {
    const [rows] = await pool.query(`
            SELECT 
                z.uniqid, z.datetime, z.ulitsa, z.dom, z.kvartira, 
                z.korpus, z.podyezd, z.etaj, z.domofon,
                z.dostavka, z.oplata, z.paidup, z.question, z.price, 
                z.metka, z.telegram_message_id, z.email
            FROM zakaz z
            WHERE z.telegram_message_id IS NULL
              AND STR_TO_DATE(z.datetime, '%d-%m-%Y %H:%i:%s') >= '2025-06-19'
        `);

    // Получаем клиентов и товары для каждого заказа
    const orders = [];

    for (const order of rows) {
      const [products] = await pool.query(
        `
                SELECT pt.name, lk.ingredients_desc, lk.ingredients_del_desc, lk.count
                FROM lk
                JOIN produktsiya_tovars pt ON lk.tovar = pt.id
                WHERE lk.uniqid = ?
            `,
        [order.uniqid]
      );

      const [clientRows] = await pool.query(
        `
                SELECT imya, familiya, phone FROM abonent WHERE email = ?
            `,
        [order.email]
      );

      const client = clientRows[0] || {};
      orders.push({ ...order, products, client });
    }

    res.json(orders);
  } catch (err) {
    console.error("Ошибка загрузки заказов:", err);
    res.status(500).json({ error: "Не удалось получить заказы" });
  }
});

// Обновление статуса
app.post("/api/update-status", async (req, res) => {
  const { uniqid, metka } = req.body;

  if (!uniqid || metka === undefined) {
    return res.status(400).json({ error: "Неверные данные" });
  }

  try {
    await pool.query("UPDATE zakaz SET metka = ? WHERE uniqid = ?", [
      metka,
      uniqid,
    ]);
    res.sendStatus(200);
  } catch (err) {
    console.error("Ошибка обновления статуса:", err);
    res.status(500).json({ error: "Не удалось обновить статус" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
