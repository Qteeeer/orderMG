const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "koreas5g.beget.tech",
  user: "koreas5g_grinder",
  password: "mI9tM2hW8x",
  database: "koreas5g_grinder",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
